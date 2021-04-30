import { useState, useCallback } from 'react';
import './Board.css'
import Square from './Square'

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = useCallback((i) => {
    const s = squares.slice();

    s[i] = xIsNext ? 'X' : 'O';

    setSquares(s);
    setXIsNext(!xIsNext);
  }, [squares, xIsNext]);

  return (
    <div className="board-container">
      <div className="infoGame">
        <strong>{status}</strong>
      </div>
      <dir className="squares-container">
        <Square
        value={squares[0]}
        onClick={() => handleClick(0)}
      />
        <Square
        value={squares[1]}
        onClick={() => handleClick(1)}
      />
        <Square
        value={squares[2]}
        onClick={() => handleClick(2)}
      />
      </dir>
      <dir className="squares-container">
        <Square
        value={squares[3]}
        onClick={() => handleClick(3)}
      />
        <Square
        value={squares[4]}
        onClick={() => handleClick(4)}
      />
        <Square
        value={squares[5]}
        onClick={() => handleClick(5)}
      />
      </dir>
      <dir className="squares-container">
        <Square
        value={squares[6]}
        onClick={() => handleClick(6)}
      />
        <Square
        value={squares[7]}
        onClick={() => handleClick(7)}
      />
        <Square
        value={squares[8]}
        onClick={() => handleClick(8)}
      />
      </dir>
    </div>
  )
}