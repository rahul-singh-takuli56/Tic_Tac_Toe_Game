import React, { useState } from 'react'
import Boards from './Components/Boards'

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquare = history[currentMove];

  const handlePlay = (nextSquare) => {
    const nextHistoy = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistoy);
    setCurrentMove(nextHistoy.length - 1);
  }

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move # ${move}`;
    }
    else {
      description = "Let's Start Game";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })


  return (
    <div className='bg-green-500 flex h-screen  w-full justify-center items-center  gap-8'>
      <div className='Board bg-violet-500 p-3'>
        <div className='bg-red-400 p-3 font-bold m-1' >
          <h1>TIC TAC TOE GAME</h1>
        </div>
        <Boards xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
      </div>
      <div>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  )
}

export default App
