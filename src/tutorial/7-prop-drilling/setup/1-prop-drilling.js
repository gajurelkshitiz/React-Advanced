import React, { useState } from 'react';
import {data} from "../../../data"

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  return <section>
    <h3>props drilling</h3>
    <List people={people} />
  </section>
};

const List = ({people}) => {
  return <>
    {people.map((person) => {
      return <SinglePerson key={person.id} />
    })}
  </>
}

const SinglePerson = ({id, name}) => {
  return <div className="item">
    <h4>Single Item</h4>
  </div>
}

export default PropDrilling;
