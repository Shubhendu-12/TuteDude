// components/RefundOffer.js
import React from 'react';
import '../styles/RefundOffer.css';

const RefundOffer = () => {
  return (
    <section className="refund-offer">
      <h2>Don't miss out on this limited-time opportunity to learn for Free!</h2>
      <div className="offer-countdown">
        <div className="offer-button">
          <button>100% Refund Offer</button>
          <p>20 Seats left</p>
        </div>
        <p>Offer ends in 10:00Mins</p>
      </div>
      <div className="offer-steps">
        <div className="step">
          <h3>Step 1</h3>
          <p>Enroll into your favorite course for only ₹1,499</p>
          <div className="step-icon">Icon</div>
          <p>Start Learning with Lifetime Course Access.</p>
        </div>
        <div className="step">
          <h3>Step 2</h3>
          <p>Complete Course &amp; Assignments within 2 Years!</p>
          <div className="step-icon">Icon</div>
          <p>2 years from the date of enrolment</p>
          <p>Finish the course within 3 Years to Qualify for Refund.</p>
        </div>
        <div className="step">
          <h3>Step 3</h3>
          <p>Receive 100% Refund upon completion</p>
          <div className="step-icon">Icon</div>
          <p>100% Fee is refunded upon Course Completion within 2 Years. Get your ₹1,499 back.</p>
        </div>
      </div>
    </section>
  );
}

export default RefundOffer;