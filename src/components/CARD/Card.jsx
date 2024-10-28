import React from 'react'

const Card = ({type,title}) => {
  
  return (
    <div className={type}>
      <h6>{title}</h6>
    </div>
  );
}

export default Card