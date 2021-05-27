import React, { useState } from 'react';

const Tour = ({ deleteTour, id, image, info, price, name }) => {
  const [read, setRead] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
         <p>{
           read ? info : `${info.substring(0, 150)}...`
           }
           <button onClick={() => setRead(!read)}>{read ? 'Show less' : 'Read more'}</button></p>
         <button className='delete-btn' onClick={() => deleteTour(id)}>Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
