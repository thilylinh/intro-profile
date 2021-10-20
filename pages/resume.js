import Link from "next/link";

export default function Resume() {
  return (
    <div className="lightbox-wrapper" id="resume" data-simplebar>
      <div className="container">
        <div className="lightbox-close">
          <Link href="/">
            <div className="close-btn">
              <span className="btn-line"></span>
            </div>
          </Link>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="lightbox-content">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading page-heading">
                    <p className="section-description">Check out my Resume</p>
                    <h2 className="section-title">Resume</h2>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>

              <div className="resume-section single-section">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="col-block education">
                      <h3 className="col-title">Education</h3>
                      <div className="resume-item">
                        <span className="item-arrow"></span>
                        <h5 className="item-title">Computer Science</h5>
                        <span className="item-details">
                          Cambridge University / 2004 - 2007
                        </span>
                        <p className="item-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Optio quo repudiandae.
                        </p>
                      </div>
                      <div className="resume-item">
                        <span className="item-arrow"></span>
                        <h5 className="item-title">Bachelor Degree</h5>
                        <span className="item-details">
                          University of Tokyo / 2008 - 2010
                        </span>
                        <p className="item-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Optio quo repudiandae.
                        </p>
                      </div>
                      <div className="resume-item">
                        <span className="item-arrow"></span>
                        <h5 className="item-title">Master Degree</h5>
                        <span className="item-details">
                          Harvard University / 2012 - 2015
                        </span>
                        <p className="item-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Optio quo repudiandae.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="col-block experience">
                      <h3 className="col-title">Experience</h3>
                      <div className="resume-item">
                        <span className="item-arrow"></span>
                        <h5 className="item-title">Software Engineer</h5>
                        <span className="item-details">Adobe / 2015 - 2017</span>
                        <p className="item-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Optio quo repudiandae.
                        </p>
                      </div>
                      <div className="resume-item">
                        <span className="item-arrow"></span>
                        <h5 className="item-title">Back-End Developer</h5>
                        <span className="item-details">Google / 2017 - 2018</span>
                        <p className="item-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Optio quo repudiandae.
                        </p>
                      </div>
                      <div className="resume-item">
                        <span className="item-arrow"></span>
                        <h5 className="item-title">UI/UX Designer</h5>
                        <span className="item-details">
                          Discord / 2019 - Present
                        </span>
                        <p className="item-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Optio quo repudiandae.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills-section single-section">
                <div className="row">
                  <div className="col-12">
                    <div className="section-heading">
                      <p className="section-description">
                        My level of knowledge in some tools
                      </p>
                      <h2 className="section-title">My Skills</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="single-skill" data-percentage="95">
                      <div className="skill-info">
                        <span className="skill-name">HTML/CSS</span>
                        <span className="skill-percentage"></span>
                      </div>
                      <div className="progress skill-progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="single-skill" data-percentage="80">
                      <div className="skill-info">
                        <span className="skill-name">Web Design</span>
                        <span className="skill-percentage"></span>
                      </div>
                      <div className="progress skill-progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="single-skill" data-percentage="90">
                      <div className="skill-info">
                        <span className="skill-name">JavaScript</span>
                        <span className="skill-percentage"></span>
                      </div>
                      <div className="progress skill-progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="single-skill" data-percentage="90">
                      <div className="skill-info">
                        <span className="skill-name">React JS</span>
                        <span className="skill-percentage"></span>
                      </div>
                      <div className="progress skill-progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="single-skill" data-percentage="95">
                      <div className="skill-info">
                        <span className="skill-name">Express.js</span>
                        <span className="skill-percentage"></span>
                      </div>
                      <div className="progress skill-progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="single-skill" data-percentage="80">
                      <div className="skill-info">
                        <span className="skill-name">TypeScript</span>
                        <span className="skill-percentage"></span>
                      </div>
                      <div className="progress skill-progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="video-section single-section">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6 content-part">
                    <h3 className="video-title">Take a tour of my office</h3>
                    <p className="video-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quia cum quasi assumenda culpa praesentium consectetur
                      voluptatibus expedita. Voluptatem tempore, aspernatur rem
                      facilis, distinctio nemo! Odio velit, nemo dolorem
                      voluptas!
                    </p>
                    <p className="video-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium qui aspernatur unde mollitia, in laborum.
                    </p>
                  </div>
                  <div className="col-12 col-lg-6 video-part">
                    <a
                      className="media-lightbox"
                      href="https://www.youtube.com/watch?v=doteMqP6eSc"
                      data-lightbox
                    >
                      <div className="embed-responsive embed-responsive-16by9">
                        <div className="embed-responsive-item element-cover-bg">
                          <span className="play-wrapper">
                            <i className="icon ion-md-play"></i>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
