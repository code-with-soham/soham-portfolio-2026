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
                <h4>Diploma in Computer Science & Technology</h4>
                <h5>Bishnupur Public Institute of Engineering</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed a 3-year diploma program with a GPA of 8.4, building a
              strong foundation in programming, databases, and software
              engineering fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Expantra Tech Pvt Ltd, Kolkata</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Assisted in implementing modern frontend practices for better
              usability and performance. Collaborated with the development team
              on real-world project workflows and gained practical exposure to
              industry-level web development standards and version control.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>Brainware University, Barasat</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing B.Tech in CSE with a SGPA of 8.79 (Sem-V).
              Focused on full-stack development, data structures & algorithms,
              and building production-ready applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
