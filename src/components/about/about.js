import "./about.css";
export function About() {
  return (
    <div className="about" id="about">
      <div className="wrapper">
        <h2 className="title">Profile</h2>
        <p className="subTitle">I'm learning full-stack</p>
        <hr></hr>

        <div className="row">
          <div className="section-about">
            <div className="icon-wrapper">
              <img className="icon" alt="me" src="./img/me.jpg"></img>
            </div>

            <h3 className="section-heading">About</h3>
            <p className="section-text">
              Hi, I am an Information Technology major at Umass Boston. But in
              my spare time, I'm learning how to build web apps. I'm most
              experienced with using a MERN stack to build applications, and I
              am hoping to find an opportunity to challenge and expand my skill
              set.{" "}
            </p>
          </div>
          <div className="section-icon"></div>
          <div className="section-skills">
            <h3 className="section-heading">Skills</h3>
            <div className="skills">
              <ul className="lines">
                <li className="line l--0"></li>
                <li className="line l--25"></li>
                <li className="line l--50"></li>
                <li className="line l--75"></li>
                <li className="line l--100"></li>
              </ul>

              <div className="charts">
                <div className="chart">
                  <ul className="chart-ul">
                    <li className="chart__bar" style={{ width: "98%" }}>
                      <span className="chart__label">NodeJS</span>
                    </li>
                    <li className="chart__bar" style={{ width: "92%" }}>
                      <span className="chart__label">ReactJS</span>
                    </li>
                    <li className="chart__bar" style={{ width: "82%" }}>
                      <span className="chart__label">MongoDB</span>
                    </li>
                    <li className="chart__bar" style={{ width: "73%" }}>
                      <span className="chart__label">Angular</span>
                    </li>
                    <li className="chart__bar" style={{ width: "83%" }}>
                      <span className="chart__label">Python</span>
                    </li>
                    <li className="chart__bar" style={{ width: "88%" }}>
                      <span className="chart__label">jQuery</span>
                    </li>
                    <li className="chart__bar" style={{ width: "96%" }}>
                      <span className="chart__label">HTML</span>
                    </li>
                    <li className="chart__bar" style={{ width: "88%" }}>
                      <span className="chart__label">CSS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
