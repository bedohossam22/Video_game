import React, { useState, useEffect } from 'react';

export default function Content(props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.pageYOffset);
      window.pageYOffset > 500 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const item = props.item;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftClick = () => {
    let newIndex = currentImageIndex - 1;
    if (newIndex < 0) {
      newIndex = item.images.length - 1;
    }
    setCurrentImageIndex(newIndex);
  };

  const handleRightClick = () => {
    let newIndex = currentImageIndex + 1;
    if (newIndex >= item.images.length) {
      newIndex = 0;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
   
    <div className="Content">
      
      <h1>{item.name}</h1>
      <div className="media">
        <span className="arrow left" onClick={handleLeftClick}>
          &larr;
        </span>
        <img alt="ok" src={item.images[currentImageIndex]} />
        <span className="arrow right" onClick={handleRightClick}>
          &rarr;
        </span>
      </div>
      <section className="compare">
        <p>Company:&nbsp;&nbsp; {item.Company} </p>
        <p>Genre :&nbsp;&nbsp; {item.Genre} </p>
        <p>Price :&nbsp;&nbsp; {item.Price} </p>
      </section>
    </div>
  );
}