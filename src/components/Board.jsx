import { useState, useCallback, useEffect } from 'react';
import './Board.css'
import Square from './Square'

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus ] = useState(`Next player: ${xIsNext ? 'X' : 'O'}`);
  const [winner, setWinner] = useState(null);

  const calculateWinner = useCallback((squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [ a, b, c] = lines[i];
      
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
        return squares[a];
      }
    }

    return null;
  }, []);

  const handleClick = useCallback((i) => {
    const s = squares.slice();
    if( calculateWinner(s) || s[i]) {
      return;
    }

    s[i] = xIsNext ? 'X' : 'O';

    setSquares(s);
    setXIsNext(!xIsNext);
    setStatus(`Next player: ${!xIsNext ? 'X' : 'O'}`);
  }, [squares, xIsNext, calculateWinner]);


  useEffect(() => {
    setWinner(calculateWinner(squares));
    
    if(winner) {
      setStatus(`Winner: ${winner}`)
    }

  }, [squares,winner, calculateWinner])

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