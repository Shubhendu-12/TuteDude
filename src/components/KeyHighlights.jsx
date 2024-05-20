import React from 'react';
import '../styles/KeyHighlights.css';

const InternshipProgram = () => {
  return (
    <div className="internship-container">
      <h2>Key Highlights</h2>
      <div className="highlights">
        {/* Highlight icons and labels */}
        <div className="highlight">
          <img src="industry-standard-courses.svg" alt="Industry Standard Courses" />
          <p>Industry Standard Courses</p>
        </div>
        {/* Add the remaining highlight icons and labels */}
      </div>

      <h2>How does the Internship Program work?</h2>
      <div className="internship-steps">
        <div className="step">
          <img src="pre-recorded-courses.svg" alt="Pre-recorded Courses" />
          <p>Learn from our structured pre recorded courses made by experts to meet industry needs</p>
        </div>
        {/* Add the remaining internship steps */}
      </div>

      <button className="apply-btn">Apply now for ₹2999</button>
    </div>
  );
};

export default InternshipProgram;