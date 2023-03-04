import React, {useState} from 'react';
import {Tree} from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';

const BinaryTree = () => {
  const [treeData, setTreeData] = useState({
    name: 'Root',
    children: []
  });
  const [treeKey, setTreeKey] = useState(0);

  const handleClick = () => {
    const maxDepth = 3;
    let subtreeCount = 0;
    const addSubtree = (node, depth) => {
      if (depth === maxDepth) {
        return;
      }
      subtreeCount++;
      const leftChild = {
        name: `Subtree ${subtreeCount}-left`,
        key: `Subtree ${subtreeCount}-left-${depth}`,
        children: []
      };
      const rightChild = {
        name: `Subtree ${subtreeCount}-right`,
        key: `Subtree ${subtreeCount}-right-${depth}`,
        children: []
      };
      node.children.push(leftChild);
      node.children.push(rightChild);
      addSubtree(leftChild, depth + 1);
      addSubtree(rightChild, depth + 1);
    };
    addSubtree(treeData, 0);
    setTreeData({...treeData});
    setTreeKey(treeKey + 1);
  };

  return (
      <div>
        <button onClick={handleClick}>Grow tree</button>

        <Tree
            key={treeKey}
            data={treeData}
            height={400}
            svgProps={{
              transform: 'rotate(90)'
            }}
            width={400}
        />

      </div>
  );
};

export default BinaryTree;
