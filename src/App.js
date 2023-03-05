import React, { useState } from "react";
import BinaryTree from "./components/BinaryTree";
import TextBox from "./components/TextBox";
import saplingImage from "./img/sapling.png";
import "./styles.css";

function App() {
  const [nodes, setNodes] = useState([]);
  const handleInsert = (value) => {
    setNodes([...nodes, value]);
  };

  return (
    <div className="App">
      <img src={saplingImage} alt="sapling" style={{ display: "none" }} /> {/* import sapling image */}
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <TextBox onInsert={handleInsert} />
      <BinaryTree nodes={nodes} />
    </div>
  );
}

export default App;
