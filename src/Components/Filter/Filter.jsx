import React from 'react'
import { links } from '../../assets/images-links';
import "./Filter.css"


function Filter() {
  return (
    <div className="filter-div">
      {links.map((item, i) => (
        <div key={i} className="links-box">
          <img src={item.imgSrc} alt="" className='links-img' />
          <p className='links-label'>{item.label}</p>
        </div>
      ))}
      ;
    </div>
  );
}

export default Filter;