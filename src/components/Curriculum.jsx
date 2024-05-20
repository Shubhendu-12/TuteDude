
import React from 'react';
import '../styles/Curriculum.css';

const Curriculum = () => {
  return (
    <section className="curriculum">
      <h2>Data Science Course Curriculum</h2>
      <ul>
        <li>
          <h3>C++</h3>
          <p>Learn C++ for strong programming fundamentals.</p>
          <button>View Curriculum</button>
        </li>
        <li>
          <h3>MERN Stack</h3>
          <p>Master the MERN stack for high-demand projects.</p>
          <button>View Curriculum</button>
        </li>
        <li>
          <h3>Data Structure &amp; Algorithm</h3>
          <p>Excel in Data Structures and Algorithms for interview success.</p>
          <button>View Curriculum</button>
        </li>
        <li>
          <h3>Competitive Programming</h3>
          <p>Excel in Data Structures and Algorithms for interview success.</p>
          <button>View Curriculum</button>
        </li>
      </ul>
    </section>
  );
};

export default Curriculum;