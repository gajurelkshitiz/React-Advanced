import React, { useState } from 'react';

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const advancedCounter = () => {
    setTimeout(() => {
      setCounter((prevState) => {
        return prevState + 1;
      })
    }, 2000)
  }
  return (
    <>
       <section style={{margin: '4rem 0'}}>
          <h2> regular counter </h2>
          <h3>{counter}</h3>
          <button className='btn' style={{color:'white', background:'green'}} onClick={() => setCounter(counter + 1)}> +  </button>
          <button className='btn' style={{color:'white', background:'red'}} onClick={() => setCounter(counter - 1)}> -  </button>
          <button className='btn' onClick={() => setCounter(0)}> reset </button>
       </section>
       <section style={{margin: '4rem 0'}}>
          <h2> advanced counter </h2>
          <h3>{counter}</h3>
          <button className='btn' onClick={() => advancedCounter()}> Delay </button>
          
       </section>
    </>
  )
};

export default UseStateCounter;
