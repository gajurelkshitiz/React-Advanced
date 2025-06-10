import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
import {reducer} from "./reducer"

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      const newPeople = {id: new Date().getTime().toString(), name}
      dispatch({ type:"ADD_PEOPLE", payload:newPeople })
      setName('')
    }
    else{
      dispatch({ type:"NO_VALUE" })
    }
  };

  const closeModal = () => {
    dispatch({ type:"CLOSE_MODAL" })
  };
  const removePeople = (id) => {
    dispatch({type:"REMOVE_PEOPLE", payload:id})
  };

  return ( 
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input 
            type='text' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <button type='submit' className='btn'> Add </button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4> {person.name} </h4>
            <button 
              onClick={() => removePeople(person.id)}> clear </button>
          </div>
        )
      })}
      
    </>
  )
};

export default Index;
