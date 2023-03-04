import React, { useRef, useState } from "react";

function TextBox({ onInsert }) {
  const [value, setValue] = useState(0);
  const handleChange = (e) => setValue(+e.target.value);
  const handleInsert = () => {
    setValue(0);
    onInsert(value);
    inputRef.current.focus();
  };
  const inputRef = useRef(null);

  return (
    <div>
      <input
        ref={inputRef}
        onChange={handleChange}
        type="number"
        value={value}
      />
      <button onClick={handleInsert}>Insert</button>
    </div>
  );
}

export default TextBox;
