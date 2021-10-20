import Link from "next/link";


export default function Contact() {
  return (
    <div class="lightbox-wrapper" id="contact" data-simplebar>
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
                    <p class="section-description">
                      Feel free to contact me anytimes
                    </p>
                    <h2 class="section-title">Get in Touch</h2>
                    <div class="animated-bar"></div>
                  </div>
                </div>
              </div>

              <div class="contact-section single-section">
                <div class="row">
                  <div class="col-12 col-lg-7">
                    <form
                      class="contact-form"
                      id="contact-form"
                      action="http://exill.dk/demo/kitzu/template/php/contact.php"
                    >
                      <h4 class="content-title">Message Me</h4>
                      <div class="row">
                        <div class="col-12 col-md-6 form-group">
                          <input
                            class="form-control"
                            id="contact-name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required=""
                          />
                        </div>
                        <div class="col-12 col-md-6 form-group">
                          <input
                            class="form-control"
                            id="contact-email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                        <div class="col-12 form-group">
                          <input
                            class="form-control"
                            id="contact-subject"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required=""
                          />
                        </div>
                        <div class="col-12 form-group form-message">
                          <textarea
                            class="form-control"
                            id="contact-message"
                            name="message"
                            placeholder="Message"
                            rows="5"
                            required=""
                          ></textarea>
                        </div>
                        <div class="col-12 form-submit">
                          <button
                            class="btn button-main button-scheme"
                            id="contact-submit"
                            type="submit"
                          >
                            Send Message
                          </button>
                          <p class="contact-feedback"></p>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-12 col-lg-5">
                    <div class="contact-info">
                      <h4 class="content-title">Contact Info</h4>
                      <p class="info-description">
                        Always available for freelance work if the right project
                        comes along, Feel free to contact me!
                      </p>
                      <ul class="list-unstyled list-info">
                        <li>
                          <div class="media align-items-center">
                            <span class="info-icon">
                              <i class="icon ion-logo-ionic"></i>
                            </span>
                            <div class="media-body info-details">
                              <h6 class="info-type">Name</h6>
                              <span class="info-value">Thi Ly Linh</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media align-items-center">
                            <span class="info-icon">
                              <i class="icon ion-md-map"></i>
                            </span>
                            <div class="media-body info-details">
                              <h6 class="info-type">Location</h6>
                              <span class="info-value">
                                Hoa Phong - Hoa vang - DaNang, VietNam
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media align-items-center">
                            <span class="info-icon">
                              <i class="icon ion-md-call"></i>
                            </span>
                            <div class="media-body info-details">
                              <h6 class="info-type">Call Me</h6>
                              <span class="info-value">
                                <a href="tel:+441632967704">0905973081</a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media align-items-center">
                            <span class="info-icon">
                              <i class="icon ion-md-send"></i>
                            </span>
                            <div class="media-body info-details">
                              <h6 class="info-type">Email Me</h6>
                              <span class="info-value">
                                <a href="mailto:thilylinh98@gmail.com">
                                  thilylinh98@gmail.com
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
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
