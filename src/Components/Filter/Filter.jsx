import React from 'react'
import { links } from '../../assets/images-links';
import "./Filter.css"


function Filter() {
  return (
    <div className="filter-div">
      {links.map((item, i) => (
        <div key={i} className="links-bos">
          <img src={item} alt="" />
        </div>
      ))}
      ;
    </div>
  );
}

export default Filter;