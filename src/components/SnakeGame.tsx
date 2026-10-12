import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, RotateCcw, Trophy, Gamepad2, X } from "lucide-react";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 15, y: 15 };
const INITIAL_DIRECTION = { x: 1, y: 0 };
const SPEED = 150;

export default function SnakeGame({ isFocused = true }: { isFocused?: boolean }) {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const gameLoop = useRef<ReturnType<typeof setInterval> | null>(null);

  const moveSnake = useCallback(() => {
    if (isGameOver || isPaused || !isFocused) return;

    const newSnake = [...snake];
    const head = { ...newSnake[0] };
    head.x += direction.x;
    head.y += direction.y;

    // Check collisions
    if (
      head.x < 0 || head.x >= GRID_SIZE ||
      head.y < 0 || head.y >= GRID_SIZE ||
      newSnake.some(segment => segment.x === head.x && segment.y === head.y)
    ) {
      setIsGameOver(true);
      if (score > highScore) setHighScore(score);
      return;
    }

    newSnake.unshift(head);

    // Check food
    if (head.x === food.x && head.y === food.y) {
      setScore(prev => prev + 10);
      setFood({
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      });
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, direction, food, isGameOver, isPaused, score, highScore, isFocused]);

  useEffect(() => {
    gameLoop.current = setInterval(moveSnake, SPEED);
    return () => {
      if (gameLoop.current) clearInterval(gameLoop.current);
    };
  }, [moveSnake]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFocused) return;

      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case "ArrowUp": if (direction.y === 0) setDirection({ x: 0, y: -1 }); break;
        case "ArrowDown": if (direction.y === 0) setDirection({ x: 0, y: 1 }); break;
        case "ArrowLeft": if (direction.x === 0) setDirection({ x: -1, y: 0 }); break;
        case "ArrowRight": if (direction.x === 0) setDirection({ x: 1, y: 0 }); break;
        case " ": setIsPaused(prev => !prev); break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, isFocused]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(INITIAL_DIRECTION);
    setIsGameOver(false);
    setIsPaused(false);
    setScore(0);
  };

  return (
    <div className="relative w-full max-w-md mx-auto bg-zinc-900 rounded-[32px] p-8 shadow-2xl overflow-hidden border border-zinc-800">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Gamepad2 className="w-6 h-6 text-brand-primary" />
          <h3 className="font-display font-bold text-white text-xl">Snake.exe</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Score</p>
            <p className="font-mono text-white font-bold">{score}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">High</p>
            <p className="font-mono text-brand-secondary font-bold font-accent lowercase">{highScore}</p>
          </div>
        </div>
      </div>

      <div 
        className="relative aspect-square bg-zinc-800 rounded-2xl overflow-hidden grid"
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
      >
        {/* Snake */}
        {snake.map((segment, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{ x: segment.x * 100 + "%", y: segment.y * 100 + "%" }}
            className={`absolute w-[5%] h-[5%] rounded-sm ${i === 0 ? "bg-brand-primary z-10" : "bg-brand-primary/60"}`}
            style={{ left: 0, top: 0 }}
          />
        ))}

        {/* Food */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute w-[5%] h-[5%] bg-brand-secondary rounded-full shadow-[0_0_10px_rgba(246,133,27,0.5)]"
          style={{ left: food.x * (100 / GRID_SIZE) + "%", top: food.y * (100 / GRID_SIZE) + "%" }}
        />

        {/* Overlays */}
        <AnimatePresence>
          {(isGameOver || isPaused) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm flex flex-col items-center justify-center z-20"
            >
              {isGameOver ? (
                <>
                  <Trophy className="w-12 h-12 text-brand-secondary mb-4" />
                  <h4 className="text-white font-sans text-2xl font-bold mb-2">Game Over!</h4>
                  <p className="text-zinc-400 mb-6">Final Score: {score}</p>
                  <button 
                    onClick={resetGame}
                    className="flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-brand-primary/20"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Try Again
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

      <div className="mt-6 flex justify-center gap-4">
        <p className="text-xs text-zinc-500 font-medium">Use arrow keys to move · Space to pause</p>
      </div>
    </div>
  );
}
