import React, { useRef, useState } from "react";

function TextBox({ onInsert }) {  
  var temp = 5000;
  const [value, setValue] = useState(temp);
  // const handleChange = (e) => setValue(+e.target.value);
  let button = document.querySelector('button');


  const handleInsert = () => {
    setValue((Math.ceil(Math.random(0, 10000) * 10000)));
    onInsert(value);
    inputRef.current.focus();
    button.innerText = "Grow the tree!";
  };

  const inputRef = useRef(null);

  return (
    <div>
      {/* <input
        ref={inputRef}
        onChange={handleChange}
        type="number"
        value={value}
      /> */}
      <button id='seedButton'onClick={handleInsert}>Plant the seed!</button>
    </div>
  );
}

export default TextBox;
