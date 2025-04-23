import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Freelancing</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            Contributed to the design and development of a responsive showcase website for Hindglan Tech using HTML, CSS, Bootstrap, and JavaScript. Ensured cross-browser compatibility and mobile-first design principles to enhance user experience. Collaborated on UI/UX elements and optimized performance for faster load times and smooth navigation
            </p>
          </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default Career;
