import React, { useState } from 'react';
import ListItem from './ListItem.js';
import images from './data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Items() {
  const itemNames = ['Tshirt', 'Bag', 'Sandals', 'Hat', 'Shoe', 'Belo', 'Jenzo', 'Summer Hats'];
  const maxIndex = itemNames.length - 1;
  const [firstIndex, setFirstIndex] = useState(0);

  const handlePrevClick = () => {
    const container = document.querySelector('.item-container');
    container.classList.add('fade-out');
    setTimeout(() => {
      setFirstIndex(Math.max(firstIndex - 1, 0));
      container.classList.remove('fade-out');
      container.classList.add('fade-in');
    }, 300);
  };
  
  const handleNextClick = () => {
    setFirstIndex(Math.min(firstIndex + 1, maxIndex - 4));
    const container = document.querySelector('.item-container');
    container.classList.add('slide-left');
    setTimeout(() => {
      container.classList.remove('slide-left');
    }, 300);
  };

  return (
    <div className="flex-container">
      <div className='ohayo'>
        <h1><span>Popular</span> Categories</h1>
        <div>
          <button className='btn-1' onClick={handlePrevClick}><FaChevronLeft /></button>
          <button className='btn-2' onClick={handleNextClick}><FaChevronRight /></button>
        </div>
      </div>
      <div className="item-container">
        {itemNames.slice(firstIndex, firstIndex + 5).map((name, index) => (
          <ListItem key={index} name={name} image={images[firstIndex + index]} />
        ))}
      </div> 
     
    </div>
  );
}