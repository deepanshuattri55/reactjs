import React, { useState, useEffect } from "react";
import "./app.css";

const App = () => {
  const [statement, setStatement] = useState([
    "We design and develop applications",
    "that run the world and",
    "showcase the future"
  ]);
  const [words, setWords] = useState(statement.split(" "));
  const [blocks, setBlocks] = useState([]);
  const [speed, setSpeed] = useState(100);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("playing");

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameState === "playing") {
        setBlocks((prevBlocks) => [
          ...prevBlocks,
          {
            word: words[Math.floor(Math.random() * words.length)],
            x: Math.floor(Math.random() * 10),
            y: 0,
          },
        ]);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [words, speed, gameState]);

  const handleKeyPress = (e) => {
    if (gameState === "playing") {
      switch (e.key) {
        case "ArrowLeft":
          setBlocks((prevBlocks) =>
            prevBlocks.map((block) => ({
              ...block,
              x: block.x - 1,
            }))
          );
          break;
        case "ArrowRight":
          setBlocks((prevBlocks) =>
            prevBlocks.map((block) => ({
              ...block,
              x: block.x + 1,
            })
            )
          );
          break;
        case " ":
          setBlocks((prevBlocks) =>
            prevBlocks.map((block) => ({
              ...block,
              y: block.y + 1,
            }))
          );
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [gameState]);

  return (
    <div className="App">
      <h1>Blocks</h1>
      <div className="GameField">
        {blocks.map((block, index) => (
          <WordBlock key={index} word={block.word} x={block.x} y={block.y} />
        )
        )
        }
      </div>
      <div className="Scoring">
        <p>Score: {score}</p>
      </div>
      <div className="UpcomingBlocks">
        {upcomingBlocks.map((block, index) => (
          <UpcomingBlock key={index} word={block.word} />
        ))}
      </div>
    </div>
  );
}; 

export default App;
