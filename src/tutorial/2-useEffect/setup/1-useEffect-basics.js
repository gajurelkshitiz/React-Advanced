import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('Calling UseEffect');
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value])

  useEffect(() => {
    console.log("hello world"); 
  }, [])

  console.log('Rendering component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>Click Me</button>
    </>
  ) 
  
};

export default UseEffectBasics;
