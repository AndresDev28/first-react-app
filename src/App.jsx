import './App.css'
import React from 'react';
import MyButton from './Button';

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };


  return (
    <>
      <h1>Hello world</h1>
      <MyButton text="Click here" onClick={handleClick} />
    </>
  )
}

export default App
