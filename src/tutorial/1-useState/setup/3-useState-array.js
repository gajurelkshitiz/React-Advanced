import React from 'react';
// import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // const [people, setPeople] = useState(data);
  const [people, setPeople] = React.useState(data);
  return (
    <React.Fragment>
      {people.map((person) => {
        const {id, name} = person;
        const removeItem = (id) => {
          const newPeople = people.filter((person) => person.id !== id);
          setPeople(newPeople);
        }
        return (
          <h2>useState array example</h2>
          <div key={id} className='item'>
            <h4> {name} </h4>
            <button onClick={() => removeItem(id)}> Remove </button>
          </div>
        )
      })}
      <button type='button' className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </React.Fragment>
  )
};

export default UseStateArray;
