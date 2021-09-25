import React, { Fragment } from 'react';

function App() {
  const name = '리액트';
  return (
    <Fragment>
    {name === '리액트' ? (
      <h1>안녕!</h1>
    ):(
      <h1>잘가!</h1>
    )}
    </Fragment>
  );
}

export default App;
