import "./experience.css";

export function Experience() {
  return (
    <div className="experience" id='experience'>
      <div className="wrapper">
        <h2 className="title">Experience</h2>
        <hr></hr>
        <div className="row">
          <div className="section-edu">
            <h3 className="section-heading">Education</h3>
            <div className="education-wrapper">
              <div className="heading">University of Massachusetts Boston</div>
              <div class="desc">College of Science and Mathematics</div>
              <div class="info">Information Technology</div>
              <div class="desc">Expected May 2021</div>
            </div>
          </div>
          <div className="section-exp">
            <h3 className="section-heading">Work History</h3>
            <div className="box">
              <ul>
                <li>
                  <span></span>
                  <div class="heading">Voya Finanical</div>
                  <div class="info">It Developer intern</div>
                  <div class="desc">
                    {" "}
                    + Created budget and product estimation tools with Angular
                    and Node Js to streamline the development process.
                    <br></br>+ Build and run A/B tests redesigning large
                    client’s web portals. <br></br>+ Implemented various
                    features and bug fixes across a web application with Java
                    spring boot and Drupal.
                  </div>
                  <div class="time">
                    <span>Aug, 2020</span>
                    <span>May, 2020</span>
                  </div>
                </li>
                <li>
                  <span></span>

                  <div class="heading">JOB ONE</div>
                  <div class="info">the best animation</div>
                  <div class="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </div>
                  <div class="time">
                    <span>
                      JUN, 29<sup>th</sup>
                    </span>
                    <span>11:36 AM</span>
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
