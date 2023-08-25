import React from 'react';
import carSvg from '../assets.js/images/car.svg';

function ProgressBar({ progress }) {
  const displayProgress = Math.min(progress, 100);

  return (
    <div className="progress-container">
      <div className="progress-road">
        <i className="bi bi-flag-fill milestone"></i>

        <div className="progress-bar" />
        <img
          src={carSvg}
          className="car"
          style={{ left: `${displayProgress}%` }}
          alt="car"
        />
        <span className="car-percentage">{displayProgress.toFixed(0)}%</span>
      </div>
    </div>
  );
}

export default ProgressBar;
