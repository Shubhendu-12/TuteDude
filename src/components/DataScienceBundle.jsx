import React from 'react';
import '../styles/DataScienceBundle.css';

const DataScienceBundle = () => {
  return (
    <div className="bundle-container">
      <div className="bundle-card">
        <h2>Enroll For DataScience</h2>
        <p className="bundle-offer">Bundle @₹1,499 <span className="strike">₹2,600</span></p>
        <p className="bundle-desc">Become an Expert in the data science field by enrolling into 6 Extensive courses!</p>
        <button className="enroll-btn">Enroll Now</button>
        <div className="bundle-details">
          <p>Total number of Courses: 6</p>
          <p>Total number of Certificates: 6</p>
          <p>Access to Courses: Lifetime</p>
        </div>
      </div>
      <div className="bundle-card">
        <h2>Enroll For DataScience</h2>
        <p className="bundle-offer">Bundle @₹1,499 <span className="discount">₹2,600</span></p>
        <p className="bundle-desc">Become an Expert in the data science field by enrolling into 6 Extensive courses!</p>
        <button className="enroll-btn">Enroll Now</button>
        <div className="bundle-details">
          <p>Total number of Courses: 6</p>
          <p>Total number of Certificates: 6</p>
          <p>Access to Courses: Lifetime</p>
        </div>
      </div>
    </div>
  );
};

export default DataScienceBundle;