import Link from "next/link";

export default function Resume() {
  return (
    <div class="lightbox-wrapper" id="resume" data-simplebar>
      <div class="container">
        <div class="lightbox-close">
          <Link href="/">
            <div className="close-btn">
              <span className="btn-line"></span>
            </div>
          </Link>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="lightbox-content">
              <div class="row">
                <div class="col-12">
                  <div class="section-heading page-heading">
                    <p class="section-description">Check out my Resume</p>
                    <h2 class="section-title">Resume</h2>
                    <div class="animated-bar"></div>
                  </div>
                </div>
              </div>

              <div class="resume-section single-section">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="col-block education">
                      <h3 class="col-title">Education</h3>
                      <div class="resume-item">
                        <span class="item-arrow"></span>
                        <h5 class="item-title">Computer Science</h5>
                        <span class="item-details">
                          Cambridge University / 2004 - 2007
                        </span>
                        <p class="item-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Optio quo repudiandae.
                        </p>
                      </div>
                      <div class="resume-item">
                        <span class="item-arrow"></span>
                        <h5 class="item-title">Bachelor Degree</h5>
                        <span class="item-details">
                          University of Tokyo / 2008 - 2010
                        </span>
                        <p class="item-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Optio quo repudiandae.
                        </p>
                      </div>
                      <div class="resume-item">
                        <span class="item-arrow"></span>
                        <h5 class="item-title">Master Degree</h5>
                        <span class="item-details">
                          Harvard University / 2012 - 2015
                        </span>
                        <p class="item-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Optio quo repudiandae.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="col-block experience">
                      <h3 class="col-title">Experience</h3>
                      <div class="resume-item">
                        <span class="item-arrow"></span>
                        <h5 class="item-title">Software Engineer</h5>
                        <span class="item-details">Adobe / 2015 - 2017</span>
                        <p class="item-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Optio quo repudiandae.
                        </p>
                      </div>
                      <div class="resume-item">
                        <span class="item-arrow"></span>
                        <h5 class="item-title">Back-End Developer</h5>
                        <span class="item-details">Google / 2017 - 2018</span>
                        <p class="item-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Optio quo repudiandae.
                        </p>
                      </div>
                      <div class="resume-item">
                        <span class="item-arrow"></span>
                        <h5 class="item-title">UI/UX Designer</h5>
                        <span class="item-details">
                          Discord / 2019 - Present
                        </span>
                        <p class="item-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Optio quo repudiandae.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="skills-section single-section">
                <div class="row">
                  <div class="col-12">
                    <div class="section-heading">
                      <p class="section-description">
                        My level of knowledge in some tools
                      </p>
                      <h2 class="section-title">My Skills</h2>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="single-skill" data-percentage="95">
                      <div class="skill-info">
                        <span class="skill-name">HTML/CSS</span>
                        <span class="skill-percentage"></span>
                      </div>
                      <div class="progress skill-progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="single-skill" data-percentage="80">
                      <div class="skill-info">
                        <span class="skill-name">Web Design</span>
                        <span class="skill-percentage"></span>
                      </div>
                      <div class="progress skill-progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="single-skill" data-percentage="90">
                      <div class="skill-info">
                        <span class="skill-name">JavaScript</span>
                        <span class="skill-percentage"></span>
                      </div>
                      <div class="progress skill-progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="single-skill" data-percentage="90">
                      <div class="skill-info">
                        <span class="skill-name">React JS</span>
                        <span class="skill-percentage"></span>
                      </div>
                      <div class="progress skill-progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="single-skill" data-percentage="95">
                      <div class="skill-info">
                        <span class="skill-name">Express.js</span>
                        <span class="skill-percentage"></span>
                      </div>
                      <div class="progress skill-progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="single-skill" data-percentage="80">
                      <div class="skill-info">
                        <span class="skill-name">TypeScript</span>
                        <span class="skill-percentage"></span>
                      </div>
                      <div class="progress skill-progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="video-section single-section">
                <div class="row align-items-center">
                  <div class="col-12 col-lg-6 content-part">
                    <h3 class="video-title">Take a tour of my office</h3>
                    <p class="video-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quia cum quasi assumenda culpa praesentium consectetur
                      voluptatibus expedita. Voluptatem tempore, aspernatur rem
                      facilis, distinctio nemo! Odio velit, nemo dolorem
                      voluptas!
                    </p>
                    <p class="video-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium qui aspernatur unde mollitia, in laborum.
                    </p>
                  </div>
                  <div class="col-12 col-lg-6 video-part">
                    <a
                      class="media-lightbox"
                      href="https://www.youtube.com/watch?v=doteMqP6eSc"
                      data-lightbox
                    >
                      <div class="embed-responsive embed-responsive-16by9">
                        <div class="embed-responsive-item element-cover-bg">
                          <span class="play-wrapper">
                            <i class="icon ion-md-play"></i>
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
