import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="container">
      <header>
        <div className="top-bar">
          <div className="logo">LOGO</div>
          <nav>
            <ul>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Curriculum</a></li>
              <li><a href="#">Refund</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <button className="login">Login</button>
            <button className="signup">Signup</button>
          </div>
        </div>
      </header>

      <main>
        <section className="intro">
          <div className="initiative">An IIT Delhi Alumni Initiative</div>
          <h1>Become an Expert in the field of <span>Data Science</span> with 6 courses</h1>
          <p>A specially crafted Tech Kickstarter, with 5+ extensive online courses.</p>
          <div className="features">
            <div>Personal Mentorship</div>
            <div>Internship Assistance</div>
            <div>Industry Certified Courses</div>
          </div>
          <div className="cta-buttons">
            <button className="enroll">Enroll Now</button>
            <button className="know-more">Know More</button>
          </div>
        </section>

        <section className="stats">
          <div>
            <h3>24</h3>
            <p>Courses</p>
          </div>
          <div>
            <h3>30k+</h3>
            <p>Learners</p>
          </div>
          <div>
            <h3>100k+</h3>
            <p>Doubts Solved</p>
          </div>
          <div>
            <h3>10k+</h3>
            <p>Student Projects</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Header;