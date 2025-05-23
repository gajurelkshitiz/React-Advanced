import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1> {firstValue} </h1>
      <h1> {secondValue} </h1> */}
      <h1> {text || 'john deo' } </h1>
      <button className='btn' onClick={() => setIsError(!isError)}> Toggle Error </button>
      <h1> {isError && 'Error Occured..'} </h1>
      {isError ? <p> There is an Error.. </p> : <div>
          <h2> System is Running clean.. </h2>
        </div>}
    </>
  )
  
};

export default ShortCircuit;
