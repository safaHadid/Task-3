import React from 'react';
import './ScheduleVisitBtn.css';

const ScheduleVisitBtn = ({ style }) => {
  return (
    <div>
      <a href="#" className="navbar-button" style={style}>
        <span className="button-icon">
          <i className="fas fa-calendar-alt"></i>
        </span>
        Schedule a visit
      </a>
    </div>
  );
};

export default ScheduleVisitBtn;
