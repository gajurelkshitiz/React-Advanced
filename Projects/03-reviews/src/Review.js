import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  console.log(people)
  console.log(people.length)
  const {name, job, image, text} = people[index]

  const checkNumber = (number) => {
    if (number <  0) {
      return people.length - 1
    }
    if (number > people.length -1) {
      return 0
    }
    return number
  }

  const prevNumber = () => {
    setIndex((index) => {
      const newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const nextNumber = () => {
    setIndex((index) => {
      const newIndex = index + 1
      return checkNumber(newIndex)
    })

    }

  const randomPeople = () => {
    let randomNumber = Math.floor(Math.random() * (people.length - 1))
    if (randomNumber === index){
      randomNumber = index - 1
    }
    setIndex(checkNumber(randomNumber))

  }
  
  return (
    <article className='review'>
        <div className="img-container">
          <img src={image} alt={name} className='person-img'/>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="title"> {name} </h4>
        <p className="job"> {job} </p>
        <p className="info"> {text} </p>
        <div className="button-container">
          <button className="prev-btn" onClick={() => prevNumber()}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={() => nextNumber()}>
            <FaChevronRight />
          </button>
        </div>
          <button className="random-btn" onClick={() => randomPeople()}>
            Surprise Me
          </button>
    </article>
  )
};

export default Review;
