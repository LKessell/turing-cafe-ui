import './ReservCard.css';
import React from 'react';

const ReservCard = ({ id, name, date, time, number }) => {
  return (
    <article className='reserv-card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {number}</p>
    </article>
  )
}

export default ReservCard;
