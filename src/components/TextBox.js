import React, { useRef, useState } from "react";

function TextBox({ onInsert }) {
  var temp = 5000;
  const [value, setValue] = useState(temp);
  const treeStates = {
    state0: 'img/sapling.png',
    state1: 'img/tree0.png',
    state2: 'img/tree1.png',
    state3: 'img/tree2.png',
    state4: 'img/tree3.png',
    state5: 'img/tree4.png',
    state6: 'img/tree5.png',
  };

  const handleInsert = () => {
    const rand = Math.floor(Math.random() * 256) + 1;
    const perfectSquare = rand * rand;
    setValue(perfectSquare);
    onInsert(perfectSquare);
    const button = document.querySelector('#seedButton');
    button.innerText = "Grow the tree!";
  };

  return (
      <div>
        <button id='seedButton'onClick={handleInsert}>Plant the seed!</button>
      </div>
  );
}

export default TextBox;