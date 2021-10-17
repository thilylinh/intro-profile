import Nav from "../components/navbar/navbar";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <div className="App">
        <Nav></Nav>
        <section
          className="home-area element-cover-bg home-background"
          id="home"
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-12 col-lg-8 home-content text-center">
                <h1 className="home-name">
                  Thi <span>Ly Linh</span>
                </h1>
                <h4 className="cd-headline clip home-headline">
                  I’m a{" "}
                  <span className="cd-words-wrapper single-headline">
                    <b className="is-visible">Developer</b>
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="fixed-wrapper">
            <div className="fixed-block block-left">
              <ul className="list-unstyled languages-list">
                <li>
                  <Link href="#0">
                    <a>
                      <span className="single-language">ENG</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#0">
                    <a>
                      <span className="single-language">VN</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="fixed-block block-right">
              <ul className="list-unstyled">
                <li className="item">
                  <Link href="https://www.facebook.com/linh.thily.92">
                    <a>
                      <FontAwesomeIcon icon={faFacebook} color="#ffffff" size="3x"/>
                    </a>
                  </Link>
                </li>
                <li className="item">
                  <Link href="https://github.com/thilylinh">
                    <a>
                      <FontAwesomeIcon
                        icon={faGithub}
                        color="#ffffff"
                        size= "3x"
                      ></FontAwesomeIcon>
                    </a>
                  </Link>
                </li>
              </ul>
              {/* <ul className="list-unstyled social-icons">
                <li>
                  <Link href="#0">
                    <a>
                      <FontAwesomeIcon
                        icon={faSearch}
                        color="#ffffff"
                      ></FontAwesomeIcon>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#0">
                    <a>
                      <i className="icon ion-logo-github"></i>
                    </a>
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
