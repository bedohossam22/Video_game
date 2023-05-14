import React from 'react';
import { mappedImages } from './data';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart)
library.add(faStar)

export default function Gridlist() {
  const NameOfProduct = ['T-Shirt M', 'T-shirt L', 'Sandals', 'Sandal2', 'jeenz', 'jeenz2', 'white shirt', 'another shirt'];

  return (
    <div className="Grid-list">
      <div className="fair">
        <button className="button">Hot</button>
        <button className="button">New </button>
        <button className="button ekko">Best Sale</button>
        </div>
        <div className="item-grid-container">
          {mappedImages.map((image, index) => (
            <div key={index} className="item-3">
              {image}
              <h2>{NameOfProduct[index]}</h2>
              <p id='ok'>Clothing</p>
              <h1>Colorful Pattern Shirts</h1>
              <p>$238.85<span>$245.8</span></p>
              <div className="icon-container">
  <div className='stars'>
    <FontAwesomeIcon className='fly' icon="star" />
    <FontAwesomeIcon className='fly' icon="star" />
    <FontAwesomeIcon className='fly' icon="star" />
    <FontAwesomeIcon className='fly' icon="star" />
    <FontAwesomeIcon className='fly'  icon="star" />
  </div>
  <div className='shop'>
    <FontAwesomeIcon icon="shopping-cart" />
  </div>
</div>
             
              </div>
          
                   
          ))}
       
      </div>
    </div>
  );
}