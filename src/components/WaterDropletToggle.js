import React from 'react';
import './WaterDropletToggle.css';

const WaterDropletToggle = ({ isActive, onClick, label, filterId }) => {
  return (
    <div className="water-toggle-wrapper">
      <div 
        className={`water-container ${isActive ? 'active' : ''}`} 
        onClick={onClick}
      >
        <div className="subcontainer">
          <div className="half">
            <div className="droplet"></div>
            <div className="splash">
              <div className="splash-container">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <div className="half">
            <div className="droplet"></div>
            <div className="splash">
              <div className="splash-container">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="water-label">{label}</div>
    </div>
  );
};

export default WaterDropletToggle;
