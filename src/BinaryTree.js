import React from 'react';
import {Tree} from 'react-tree-graph';

const BinaryTree = () => {
  const data = {
    name: 'A',
    children: [
      {
        name: 'B',
        children: [
          {
            name: 'D',
            children: []
          },
          {
            name: 'E',
            children: []
          }
        ]
      },
      {
        name: 'C',
        children: [
          {
            name: 'F',
            children: []
          },
          {
            name: 'G',
            children: []
          }
        ]
      }
    ]
  };

  return (
    <div>
      <Tree
        data={data}
        height={400}
        width={400}
        svgProps={{
          className: 'custom'
        }}
        nodeRadius={15}
      />
    </div>
  );
};

export default BinaryTree;
