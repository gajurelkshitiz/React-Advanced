import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  
  const handleResize = () => {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', handleResize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', handleResize);
    }
  })
  console.log('render');
  // console.log({size})
  return (
    <>
      <h2> Window Size </h2>
      <h1> {size} px </h1>
    </>
  )
};

export default UseEffectCleanup;
