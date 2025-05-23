import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const devContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('hello world');
    console.log(refContainer.current.value);
    console.log(devContainer.current);
  }

  useEffect(() => {
    console.log(refContainer.current.value);
    refContainer.current.focus();
  });

  const handleClick = (e) => {
    
  }
  console.log(refContainer);
  console.log(devContainer);
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <input type='text' ref={refContainer} />
        <button type='submit' onClick={handleClick}> Submit </button>
        <div ref={devContainer}> hello world</div>
      </div>
    </form>
  )
};

export default UseRefBasics;
