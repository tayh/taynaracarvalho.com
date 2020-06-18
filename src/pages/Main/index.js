import React from 'react';

import DraggableList from './menu';

export default function Main() {
  const myList = ['Home', 'About', 'Projects'];
  return (
    <>
      <DraggableList items={myList} />
    </>
  );
}
