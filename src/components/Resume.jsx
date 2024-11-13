import React from 'react';
import resumePDF from '../assets/PaolaCV.png'; // Asegúrate de que la ruta sea correcta

function Resume() {
  return (
    <section id="resume" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Resume</h2>
        <p className="text-center">Download my resume to learn more about my skills and experience.</p>
        <div className="text-center">
          <a href={resumePDF} download className="btn custom-btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
