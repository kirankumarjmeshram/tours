import React, { useState } from 'react';

const Tour = ({id,image,info,price,name}) => {
  return <article className='single-tour'>
        <img src={image} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>	&#8377; {Math.round(Math.random()*100)}{price}</h4>
          </div>
          <p>{info}</p>
          <button className='delete-btn'>not interested</button>
        </footer>
  </article>
};

export default Tour;
