import Image from "next/image";
import logo from "../../public/images/logo/lylinh.png";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="navbar-expand-md navbar fixed-top" id="navbar">
      <Link href="/">
        <a className="navbar-brand">
          <Image src={logo} />
        </a>
      </Link>
      <span
        className="navbar-menu ml-auto"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        role="button"
      >
        <span className="btn-line"></span>
      </span>
      <div
        className="collapse navbar-collapse order-1 order-lg-0"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/resume">
              <a className="nav-link">Resume</a>
            </Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li> */}
          <li className="nav-item">
            <Link href="/blog">
              <a className="nav-link">Blog</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
