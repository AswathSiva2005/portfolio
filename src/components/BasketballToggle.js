import React from 'react';
import './BasketballToggle.css';

const BasketballToggle = ({ isActive, onClick, label, filterId }) => {
  return (
    <div className="toggle-wrapper">
      <div className="toggle basketball-hoop">
        <input 
          id={`hoop-${filterId}`} 
          type="checkbox" 
          checked={isActive}
          onChange={onClick}
        />
        <label className="toggle-item" htmlFor={`hoop-${filterId}`}>
          <div className="ball__wrapper">
            <div className="ball"></div>
          </div>
          <div className="hoop"></div>
        </label>
      </div>
      <div className="name">{label}</div>
    </div>
  );
};

export default BasketballToggle;
