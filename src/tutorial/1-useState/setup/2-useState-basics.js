import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler);

  const [text, setText] = useState('random title');
  const clickHandler = () => {
    if (text === 'random title') {
      setText('hello people');
    }
    else {
      setText('random title');
    }
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className='btn' onClick={clickHandler}> 
        change title
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
