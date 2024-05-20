// components/CertificatesInternships.js
import React from 'react';
import '../styles/CertificatesInternships.css';

const CertificatesInternships = () => {
  return (
    <section className="certificates-internships">
      <h2>Unlock 6 Certificates &amp; Internship Opportunities!</h2>
      <div className="certificate-section">
        <h3>Get 6 Industry Recognized Certificates!</h3>
        <div className="certificate">
          <div className="certificate-header">
            <h4>Certificate</h4>
            <h4>of</h4>
            <h4>Completion</h4>
          </div>
          <div className="certificate-body">
            <p>John Doe</p>
            <p>Certificate details...</p>
          </div>
          <div className="certificate-footer">
            <p>Official and Verified</p>
            <p>Enhances Credibility</p>
          </div>
        </div>
      </div>
      <div className="internship-section">
        <h3>Bag Internship Opportunities!</h3>
        <p>With every course, we make you not only industry-ready but also help you crack your first internship.</p>
        <div className="internship-illustration">Illustration</div>
      </div>
    </section>
  );
};

export default CertificatesInternships;