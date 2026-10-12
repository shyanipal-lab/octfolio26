"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Play, RotateCcw, Trophy, Gamepad2, Pause, X } from "lucide-react"

// Game constants
const BOARD_WIDTH = 10
const BOARD_HEIGHT = 20
const EMPTY_CELL = 0

// Tetromino shapes
const TETROMINOES = {
  I: {
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    color: "bg-cyan-500",
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "bg-yellow-500",
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: "bg-purple-500",
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    color: "bg-green-500",
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    color: "bg-red-500",
  },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: "bg-blue-500",
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: "bg-orange-500",
  },
}

const TETROMINO_KEYS = Object.keys(TETROMINOES)

type TetrominoType = keyof typeof TETROMINOES
type Board = number[][]
type Position = { x: number; y: number }

interface Piece {
  shape: number[][]
  color: string
  position: Position
  type: TetrominoType
}

export const BlockGame = ({ isFocused = true }: { isFocused?: boolean }) => {
  const [board, setBoard] = useState<Board>(() =>
    Array(BOARD_HEIGHT)
      .fill(null)
      .map(() => Array(BOARD_WIDTH).fill(EMPTY_CELL)),
  )
  const [currentPiece, setCurrentPiece] = useState<Piece | null>(null)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [lines, setLines] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [gameStarted, setGameStarted] = useState(false)

  // Create a new random piece
  const createNewPiece = useCallback((): Piece => {
    const randomType = TETROMINO_KEYS[Math.floor(Math.random() * TETROMINO_KEYS.length)] as TetrominoType
    const tetromino = TETROMINOES[randomType]
    return {
      shape: tetromino.shape,
      color: tetromino.color,
      position: { x: Math.floor(BOARD_WIDTH / 2) - Math.floor(tetromino.shape[0].length / 2), y: 0 },
      type: randomType,
    }
  }, [])

  // Check if a piece can be placed at a position
  const canPlacePiece = useCallback(
    (piece: Piece, newPosition: Position): boolean => {
      for (let y = 0; y < piece.shape.length; y++) {
        for (let x = 0; x < piece.shape[y].length; x++) {
          if (piece.shape[y][x]) {
            const newX = newPosition.x + x
            const newY = newPosition.y + y

            if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) {
              return false
            }

            if (newY >= 0 && board[newY][newX] !== EMPTY_CELL) {
              return false
            }
          }
        }
      }
      return true
    },
    [board],
  )

  // Rotate a piece 90 degrees clockwise
  const rotatePiece = useCallback((piece: Piece): Piece => {
    const rotated = piece.shape[0].map((_, index) => piece.shape.map((row) => row[index]).reverse())
    return { ...piece, shape: rotated }
  }, [])

  // Place piece on board
  const placePieceOnBoard = useCallback(
    (piece: Piece): Board => {
      const newBoard = board.map((row) => [...row])

      for (let y = 0; y < piece.shape.length; y++) {
        for (let x = 0; x < piece.shape[y].length; x++) {
          if (piece.shape[y][x]) {
            const boardY = piece.position.y + y
            const boardX = piece.position.x + x
            if (boardY >= 0) {
              newBoard[boardY][boardX] = 1
            }
          }
        }
      }

      return newBoard
    },
    [board],
  )

  // Clear completed lines
  const clearLines = useCallback((board: Board): { newBoard: Board; linesCleared: number } => {
    const newBoard = board.filter((row) => row.some((cell) => cell === EMPTY_CELL))
    const linesCleared = BOARD_HEIGHT - newBoard.length

    while (newBoard.length < BOARD_HEIGHT) {
      newBoard.unshift(Array(BOARD_WIDTH).fill(EMPTY_CELL))
    }

    return { newBoard, linesCleared }
  }, [])

  // Move piece down
  const movePieceDown = useCallback(() => {
    if (!currentPiece || gameOver || isPaused || !isFocused) return

    const newPosition = { ...currentPiece.position, y: currentPiece.position.y + 1 }

    if (canPlacePiece(currentPiece, newPosition)) {
      setCurrentPiece({ ...currentPiece, position: newPosition })
    } else {
      // Place piece and create new one
      const newBoard = placePieceOnBoard(currentPiece)
      const { newBoard: clearedBoard, linesCleared } = clearLines(newBoard)

      setBoard(clearedBoard)
      setLines((prev) => prev + linesCleared)
      const newScore = score + linesCleared * 100 * level
      setScore(newScore)
      if (newScore > highScore) setHighScore(newScore)

      const nextPiece = createNewPiece()
      if (canPlacePiece(nextPiece, nextPiece.position)) {
        setCurrentPiece(nextPiece)
      } else {
        setGameOver(true)
      }
    }
  }, [currentPiece, gameOver, isPaused, canPlacePiece, placePieceOnBoard, clearLines, level, createNewPiece, score, highScore, isFocused])

  // Handle keyboard input
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (!isFocused) return

      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
        event.preventDefault()
      }

      if (!currentPiece || gameOver || isPaused) {
        if (event.key === " " && !gameOver) {
          setIsPaused(prev => !prev)
        }
        return
      }

      switch (event.key) {
        case "ArrowLeft":
          const leftPosition = { ...currentPiece.position, x: currentPiece.position.x - 1 }
          if (canPlacePiece(currentPiece, leftPosition)) {
            setCurrentPiece({ ...currentPiece, position: leftPosition })
          }
          break

        case "ArrowRight":
          const rightPosition = { ...currentPiece.position, x: currentPiece.position.x + 1 }
          if (canPlacePiece(currentPiece, rightPosition)) {
            setCurrentPiece({ ...currentPiece, position: rightPosition })
          }
          break

        case "ArrowDown":
          movePieceDown()
          break

        case "ArrowUp":
        case " ":
          const rotated = rotatePiece(currentPiece)
          if (canPlacePiece(rotated, rotated.position)) {
            setCurrentPiece(rotated)
          }
          break
      }
    },
    [currentPiece, gameOver, isPaused, canPlacePiece, movePieceDown, rotatePiece, isFocused],
  )

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) return

    const interval = setInterval(
      () => {
        movePieceDown()
      },
      Math.max(100, 1000 - (level - 1) * 100),
    )

    return () => clearInterval(interval)
  }, [gameStarted, gameOver, isPaused, level, movePieceDown])

  // Keyboard event listeners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [handleKeyPress])

  // Update level based on lines cleared
  useEffect(() => {
    setLevel(Math.floor(lines / 10) + 1)
  }, [lines])

  // Start game
  const startGame = () => {
    setBoard(
      Array(BOARD_HEIGHT)
        .fill(null)
        .map(() => Array(BOARD_WIDTH).fill(EMPTY_CELL)),
    )
    setCurrentPiece(createNewPiece())
    setScore(0)
    setLevel(1)
    setLines(0)
    setGameOver(false)
    setIsPaused(false)
    setGameStarted(true)
  }

  // Render the game board with current piece
  const renderBoard = () => {
    const displayBoard = board.map((row) => [...row])

    // Add current piece to display board
    if (currentPiece) {
      for (let y = 0; y < currentPiece.shape.length; y++) {
        for (let x = 0; x < currentPiece.shape[y].length; x++) {
          if (currentPiece.shape[y][x]) {
            const boardY = currentPiece.position.y + y
            const boardX = currentPiece.position.x + x
            if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
              displayBoard[boardY][boardX] = 2 // Current piece
            }
          }
        }
      }
    }

    return (
      <div 
        className="relative aspect-[1/2] bg-zinc-800 rounded-2xl overflow-hidden grid gap-[1px] p-[1px]"
        style={{ gridTemplateColumns: `repeat(${BOARD_WIDTH}, 1fr)` }}
      >
        {displayBoard.map((row, y) => 
          row.map((cell, x) => (
            <div
              key={`${y}-${x}`}
              className={`w-full h-full rounded-[2px] transition-colors duration-100 ${
                cell === 1 
                  ? "bg-zinc-600 shadow-[inset_0_0_8px_rgba(0,0,0,0.3)]" 
                  : cell === 2 
                    ? `${currentPiece?.color || "bg-brand-primary"} shadow-[inset_0_0_8px_rgba(0,0,0,0.2)]` 
                    : "bg-zinc-900/30"
              }`}
            />
          ))
        )}

        {/* Overlays */}
        <AnimatePresence>
          {(gameOver || isPaused || !gameStarted) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm flex flex-col items-center justify-center z-20 p-6 text-center"
            >
              {gameOver ? (
                <>
                  <Trophy className="w-12 h-12 text-brand-secondary mb-4" />
                  <h4 className="text-white font-sans text-2xl font-bold mb-2">Game Over!</h4>
                  <p className="text-zinc-400 mb-6">Final Score: {score}</p>
                  <button 
                    onClick={startGame}
                    className="flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-brand-primary/20"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Try Again
                  </button>
                </>
              ) : !gameStarted ? (
                <>
                  <Gamepad2 className="w-12 h-12 text-brand-primary mb-4" />
                  <h4 className="text-white font-sans text-2xl font-bold mb-6">Ready?</h4>
                  <button 
                    onClick={startGame}
                    className="flex items-center gap-2 bg-brand-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-brand-primary/20"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    Start Game
                  </button>
                </>
              ) : (
                <>
                  <h4 className="text-white font-sans text-2xl font-bold mb-6">Paused</h4>
                  <button 
                    onClick={() => setIsPaused(false)}
                    className="flex items-center gap-2 bg-white text-zinc-900 px-8 py-3 rounded-full font-bold shadow-lg"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    Resume
                  </button>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-md bg-zinc-900 rounded-[32px] p-8 shadow-2xl overflow-hidden border border-zinc-800">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Gamepad2 className="w-6 h-6 text-brand-primary" />
          <h3 className="font-display font-bold text-white text-xl">Blocks.exe</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Score</p>
            <p className="font-mono text-white font-bold">{score}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">High</p>
            <p className="font-mono text-brand-secondary font-bold">{highScore}</p>
          </div>
        </div>
      </div>

      {renderBoard()}

      <div className="mt-6 flex flex-col items-center gap-4">
        <div className="flex gap-8">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Level</p>
            <p className="font-mono text-white font-bold">{level}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Lines</p>
            <p className="font-mono text-white font-bold">{lines}</p>
          </div>
        </div>
        <p className="text-xs text-zinc-500 font-medium">Use arrow keys to move/rotate · Space to pause</p>
      </div>
    </div>
  );
}
