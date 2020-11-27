import "./experience.css";

export function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="wrapper">
        <h2 className="title">Experience</h2>
        <hr></hr>
        <div className="row">
          <div className="section-edu">
            <h3 className="section-heading">Education</h3>
            <div className="education-wrapper">
              <div className="heading">University of Massachusetts Boston</div>
              <div className="desc">College of Science and Mathematics</div>
              <div className="info">Information Technology</div>
              <div className="desc">Expected May 2021</div>
            </div>
          </div>
          <div className="section-exp">
            <h3 className="section-heading">Work History</h3>
            <div className="box">
              <ul>
                <li>
                  <span></span>
                  <div className="heading">Voya Finanical</div>
                  <div className="info"> Software Development Intern</div>
                  <div className="desc">
                    {" "}
                    + Created a project/cost estimation tool with Angular and
                    Node Js to cut down on the time it took to estimate the
                    scope of a project.
                    <br></br>+ Implemented and ran A/B tests on new designs for
                    specific client’s web portals. <br></br>+ Assisted with
                    various features and bug fixes across a web application
                    built with Java spring boot and Drupal.
                  </div>
                  <div className="time">
                    <span>Aug, 2020</span>
                    <span>May, 2020</span>
                  </div>
                </li>
                <li>
                  <span></span>
                  <div className="heading">Virtuverse</div>
                  <div className="info">Back End Developer Intern</div>
                  <div className="desc">
                    {" "}
                    + Built an authentication system with Node JS based on Json
                    Web Tokens.<br></br>+ Assisted in creating and querying SQL
                    databases to store and query user information. <br></br>+
                    Helped create RESTful API servers to handle network clients.
                  </div>
                  <div className="time">
                    <span>Mar, 2019</span>
                    <span>Jan, 2019</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
