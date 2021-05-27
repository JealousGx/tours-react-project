import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, deleteTour }) => {
  return <section>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline" />
    </div>
    <div>
      {tours.map((tour) => <Tour key={tour.id} deleteTour={deleteTour} {...tour} />)}
    </div>
  </section>;
};

export default Tours;
