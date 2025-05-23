import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ firstName, lastName, email });
    if (firstName && lastName && email){
      const person = {id: new Date().getTime().toString(), firstName, lastName, email};
      console.log(person);
      setPeople((prevPeople) => {
        return [...prevPeople, person]
      })
      setFirstName('');
      setLastName('');
      setEmail('');
    }
    else {
      console.log('Empty fields');
    }
  }

  return (
    <article>
      <form className='form'>
        <div className='form-control'>
          <label htmlFor='firstName'>First Name</label>
          <input 
            type='text' 
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='lastName'>Last Name</label>
          <input 
            type='text' 
            id='lastName' 
            value={lastName}  
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input 
            type='email' 
            id='email' 
            value={email}  
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' onClick={handleSubmit}>Add Person</button>
      </form>

      {people.map((person, index) => {
        const {id, firstName, lastName, email} = person;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <h4>{lastName}</h4>
            <h4>{email}</h4>
          </div> 
        )
      })}
    </article>
  )
};

export default ControlledInputs;
