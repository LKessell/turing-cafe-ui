import './Reservations.css';
import React from 'react';
import ReservCard from '../ReservCard/ReservCard';

const Reservations = ({ reservations }) => {
  const reservCards = reservations.map(reservation => <ReservCard />);

  return (
    <section className='reserv-container'>
      {reservCards}
    </section>
  )
}

export default Reservations;
