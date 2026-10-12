import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Circle, RotateCcw } from "lucide-react";

type Player = "X" | "O" | null;

export default function TicTacToe({ isFocused = true }: { isFocused?: boolean }) {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<Player | "Draw">(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  const calculateWinner = (squares: Player[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    if (squares.every((square) => square !== null)) {
      return { winner: "Draw" as const, line: null };
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (winner || board[i]) return;

    const newBoard = [...board];
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const result = calculateWinner(newBoard);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine(null);
  };

  // Simple AI for "O" if it's O's turn and no winner yet
  useEffect(() => {
    if (!isXNext && !winner) {
      const timer = setTimeout(() => {
        const availableMoves = board
          .map((val, idx) => (val === null ? idx : null))
          .filter((val) => val !== null) as number[];
        
        if (availableMoves.length > 0) {
          // Try to win or block X
          const move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
          handleClick(move);
        }
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isXNext, winner, board]);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-3 mb-8">
        {board.map((square, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: square ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(i)}
            className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-3xl shadow-sm border transition-colors ${
              winningLine?.includes(i)
                ? "bg-brand-primary/20 border-brand-primary"
                : "bg-white border-zinc-100 hover:border-zinc-200"
            }`}
          >
            <AnimatePresence mode="wait">
              {square === "X" && (
                <motion.div
                  key="X"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="text-zinc-900"
                >
                  <X className="w-10 h-10" />
                </motion.div>
              )}
              {square === "O" && (
                <motion.div
                  key="O"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-brand-primary"
                >
                  <Circle className="w-10 h-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          {winner ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg font-bold text-zinc-900 uppercase tracking-widest"
            >
              {winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`}
            </motion.p>
          ) : (
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              {isXNext ? "Your Turn (X)" : "AI is thinking (O)..."}
            </p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetGame}
          className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors shadow-lg"
        >
          <RotateCcw className="w-3 h-3" />
          Reset Game
        </motion.button>
      </div>
    </div>
  );
}
