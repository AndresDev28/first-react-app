import React from "react";
import './MyButton.css';

function MyButton({text, onClick}) {
  return (
    <button className="my-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default MyButton