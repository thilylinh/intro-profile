import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import ServiceItem from "../components/service-box/serviceItem";
import CarouselMulti from "../components/carousel/carousel";

export default function About() {
  return (
    <div className="lightbox-wrapper">
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
                    <p className="section-description">Get to know me</p>
                    <h2 className="section-title">About Me</h2>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>

              <div className="info-section single-section">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-5 info-img">
                    <Image
                      src="/images/image/my-image.jpg"
                      width="2048"
                      height="2048"
                    />
                  </div>

                  <div className="col-12 col-lg-7 info-content">
                    <div className="content-block">
                      <h2 className="content-subtitle">Who am i?</h2>
                      <h6 className="content-title">
                        {"I'm Thi Ly Linh, a Web Developer"}
                      </h6>
                      <div className="content-description">
                        <p>
                          I am a freelancer based in Viet Nam and websites for
                          years, which comply with the latest design trends. I
                          help convert a vision and an idea into meaningful and
                          useful products. Having a sharp eye for product
                          evolution helps me prioritize tasks, iterate fast and
                          deliver faster.
                        </p>
                      </div>
                      <address className="content-info">
                        <div className="row">
                          <div className="col-12 col-md-6 single-info">
                            <span>Name:</span>
                            <p>Thi Ly Linh</p>
                          </div>
                          <div className="col-12 col-md-6 single-info">
                            <span>Email:</span>
                            <p>
                              <a href="mailto:thilylinh98@gmail.com">
                                thilylinh98@gmail.com
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-6 single-info">
                            <span>Age:</span>
                            <p>23</p>
                          </div>
                          <div className="col-12 col-md-6 single-info">
                            <span>From:</span>
                            <p>DaNang, VN</p>
                          </div>
                        </div>
                      </address>
                      <div className="d-block d-sm-flex align-items-center">
                        <a
                          className="btn content-download button-main button-scheme"
                          href="#0"
                          role="button"
                        >
                          Download CV
                        </a>
                        <ul className="list-unstyled list-inline content-follow">
                          <li className="list-inline-item">
                            <Link href="https://www.facebook.com/linh.thily.92">
                              <a>
                                <FontAwesomeIcon
                                  icon={faFacebook}
                                  color="#ffffff"
                                  size="1x"
                                />
                              </a>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link href="https://github.com/thilylinh">
                              <a>
                                <FontAwesomeIcon
                                  icon={faGithub}
                                  color="#ffffff"
                                  size="1x"
                                ></FontAwesomeIcon>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="services-section single-section">
                <div className="row">
                  <div className="col-12">
                    <div className="section-heading">
                      <p className="section-description">
                        Services i offer to my clients
                      </p>
                      <h2 className="section-title">My Services</h2>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <ServiceItem
                    icon="faGithub"
                    title="Web Developer"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  ></ServiceItem>
                  <ServiceItem
                    icon="faGithub"
                    title="Web Developer"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  ></ServiceItem>
                  <ServiceItem
                    icon="faGithub"
                    title="Web Developer"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  ></ServiceItem>
                  <ServiceItem
                    icon="faGithub"
                    title="Web Developer"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  ></ServiceItem>
                  <ServiceItem
                    icon="faGithub"
                    title="Web Developer"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  ></ServiceItem>
                  <ServiceItem
                    icon="faGithub"
                    title="Web Developer"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  ></ServiceItem>
                </div>
              </div>

              <div className="testimonials-section single-section">
                <div className="row">
                  <div className="col-12">
                    <div className="section-heading">
                      <p className="section-description">
                        What my clients think about me
                      </p>
                      <h2 className="section-title">Testimonials</h2>
                    </div>
                  </div>
                </div>

                <div className="my-slider">
                  <CarouselMulti />
                </div>
              </div>

              <div className="pricing-section single-section">
                <div className="row">
                  <div className="col-12">
                    <div className="section-heading">
                      <p className="section-description">
                        Get started with my services
                      </p>
                      <h2 className="section-title">Choose a Plan</h2>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="single-plan mb-4 mb-sm-5">
                      <i className="plan-icon icon ion-md-egg"></i>
                      <h3 className="plan-type">Standard</h3>
                      <h2 className="plan-price">$19/month</h2>
                      <ul className="list-unstyled plan-list">
                        <li>Mobile App Design</li>
                        <li>Responsive Design</li>
                        <li>Database Development</li>
                        <li>Web Design</li>
                        <li>24/7 Support</li>
                      </ul>
                      <a
                        className="btn button-main button-scheme plan-btn"
                        href="#0"
                        role="button"
                      >
                        Get Standard
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="single-plan mb-4 mb-sm-5">
                      <i className="plan-icon icon ion-ios-rocket"></i>
                      <h3 className="plan-type">Professional</h3>
                      <h2 className="plan-price">$29/month</h2>
                      <ul className="list-unstyled plan-list">
                        <li>Mobile App Design</li>
                        <li>Responsive Design</li>
                        <li>Database Development</li>
                        <li>Web Design</li>
                        <li>24/7 Support</li>
                      </ul>
                      <a
                        className="btn button-main button-scheme plan-btn"
                        href="#0"
                        role="button"
                      >
                        Get Pro
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-plan mb-4 mb-sm-5">
                      <i className="plan-icon icon ion-logo-ionic"></i>
                      <h3 className="plan-type">Business</h3>
                      <h2 className="plan-price">$39/month</h2>
                      <ul className="list-unstyled plan-list">
                        <li>Mobile App Design</li>
                        <li>Responsive Design</li>
                        <li>Database Development</li>
                        <li>Web Design</li>
                        <li>24/7 Support</li>
                      </ul>
                      <a
                        className="btn button-main button-scheme plan-btn"
                        href="#0"
                        role="button"
                      >
                        Get Business
                      </a>
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
