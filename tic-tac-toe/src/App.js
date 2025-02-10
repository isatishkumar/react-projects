import { useState } from 'react';
import './App.css';
import Square from './Square';

function App() {
  const [xIsNext, setXisNext] = useState(true);
  const [square,setSquare] = useState(Array(9).fill(null));
  const [status,setStatus] = useState();
  const [history,setHistory] = useState([[...square]]);
  const [gameStep, setGameStep] = useState(0);

  function clickHandler(value) {
    let winner = calculateWinner(square);
    if(square[value] || winner) {
      return;
    }
    const xstate = xIsNext ? 'X' :'O';
    const squareCopy = square.slice();
    squareCopy[value] = xstate;
    setSquare(squareCopy);
    setXisNext(!xIsNext);
    history.push(squareCopy);
    winner = calculateWinner(squareCopy);
    const state = winner ? `Winner is ${winner}` : `Next turn ${xIsNext ? 'O' :'X'}`;
    setStatus(state);
  }

  function handleHistoryClick(current) {
    if(current === gameStep){
      return;
    }
    setXisNext(current%2===0);
    const state =  `Next turn ${current%2!==0 ? 'O' :'X'}`;
    setStatus(state);
    setGameStep(current);
    setSquare(history[current]);
    setHistory(history.slice(0,current));
  }
  return (
    <>
     <h1> Tic Tac Toe</h1>
     <p>{status}</p>
     <div className='main-container'>
      <div className='grid-container'>
        {Array.from({length:9},(_,i)=>i).map(ind=><Square key={ind} handleClick={()=>clickHandler(ind)} value={square[ind]}/>)}
      </div> 
      <div className='history'>
          <ol>
              {history.map((_,i)=><li key={i}> <button onClick={()=>handleHistoryClick(i)}> go to step {i} </button></li>)}
          </ol>
      </div>
     </div>
    </>
  );
}

function calculateWinner(squares){

  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(let [a,b,c] of lines){
    if(squares[a] && squares[a]=== squares[b] && squares[a]===squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;


