import './Reservations.css';
import React from 'react';
import ReservCard from '../ReservCard/ReservCard';

const Reservations = ({ reservations }) => {
  const reservCards = reservations.map(reservation => {
    return (
      <ReservCard
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />)});

  return (
    <section className='reserv-container'>
      {reservCards}
    </section>
  )
}

export default Reservations;
