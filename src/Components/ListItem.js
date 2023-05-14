import React from 'react';

export default function ListItem(props) {
  return (
    <div className="item">
      <img src={props.image} alt={props.name} className="item-image" />
      <div className="item-name">{props.name}</div>
    </div>
  );
}