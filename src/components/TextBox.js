import React, { useRef, useState } from "react";

function TextBox({ onInsert }) {
  const [value, setValue] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false); // new state
  const treeStates = {
    state0: "img/sapling.png",
    state1: "img/tree0.png",
    state2: "img/tree1.png",
    state3: "img/tree2.png",
    state4: "img/tree3.png",
    state5: "img/tree4.png",
    state6: "img/tree5.png"
  };

  const handleInsert = () => {
    const rand = Math.floor(Math.random() * 256) + 1;
    const perfectSquare = rand * rand;
    setValue(perfectSquare);
    onInsert(perfectSquare);
    setButtonClicked(true); // set buttonClicked to true when button is clicked
  };

  return (
    <div>
      <button id="seedButton" onClick={handleInsert}>
        {value ? "Grow the tree!" : "Plant the seed!"}
      </button>
      {buttonClicked && !value && (
        <img src={treeStates.state0} alt="sapling" />
      )}
    </div>
  );
}

export default TextBox;
