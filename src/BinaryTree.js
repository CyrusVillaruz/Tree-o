import React, {useState} from 'react';
import {Tree} from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';

const BinaryTree = () => {
  const [treeData, setTreeData] = useState({
    name: 'Root',
    children: []
  });

  const handleClick = () => {
    let index = 0;
    const addSubtree = (node, depth) => {
      index++;
      if (depth < 3) {
        node.children.push({
          name: `Subtree ${index}`,
          children: []
        });
        addSubtree(node.children[node.children.length - 1], depth + 1);
        addSubtree(node.children[node.children.length - 1], depth + 1);
      }
    };
    addSubtree(treeData, 0);
    setTreeData({...treeData});
  };

  return (
      <div>
        <button onClick={handleClick}>Grow tree</button>

        <Tree
            data={{
              children: [
                {},
                {}
              ],
            }}
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
