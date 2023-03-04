import React, { useRef, useState } from "react";

function TextBox({ onInsert }) {
  var temp = 5000;
  const [value, setValue] = useState(temp);

  const handleInsert = () => {
    setValue((Math.ceil(Math.random(0, 10000) * 10000)));
    onInsert(value);
    const button = document.querySelector('#seedButton');
    button.innerText = "Grow the tree!";
  };

  const inputRef = useRef(null);

  return (
      <div>
        <button id='seedButton'onClick={handleInsert}>Plant the seed!</button>
      </div>
  );
}

export default TextBox;
