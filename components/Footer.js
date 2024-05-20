import Image from "next/image";
import Link from "next/link";
import img1 from ".//../public/img/portfolio/1.jpg";
import img2 from ".//../public/img/portfolio/2.jpg";
import img3 from ".//../public/img/portfolio/3.jpg";
import img4 from ".//../public/img/portfolio/4.jpg";
import img5 from ".//../public/img/portfolio/5.jpg";
import img6 from ".//../public/img/portfolio/6.jpg";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../public/logo.png";
import React, { Fragment } from "react";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-content">
                  <div className="footer-head">
                    <div className="footer-logo">
                      <h2>
                        <Link href="#hero">
                          <Image src={logo} width={200} height={200} alt="" className="img-fluid" />
                        </Link>
                      </h2>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis.
                    </p>
                    <div className="footer-icons">
                      <ul>
                        <li>
                          <Link href="#">
                            <FaFacebook />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaTwitter />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaInstagram />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FaLinkedin />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-content">
                  <div className="footer-head">
                    <h4>information</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                    <div className="footer-contacts">
                      <p>
                        <span>Tel:</span> +123 456 789
                      </p>
                      <p>
                        <span>Email:</span> contact@example.com
                      </p>
                      <p>
                        <span>Working Hours:</span> 9am-5pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-content">
                  <div className="footer-head">
                    <h4>Instagram</h4>
                    <div className="flicker-img">
                      <Link className="img" href="#">
                        <Image src={img1} alt="" width={100} height={50} />
                      </Link>
                      <Link className="img" href="#">
                        <Image src={img2} alt="" width={100} height={50} />
                      </Link>
                      <Link className="img" href="#">
                        <Image src={img3} alt="" width={100} height={50} />
                      </Link>
                      <Link className="img" href="#">
                        <Image src={img4} alt="" width={100} height={50} />
                      </Link>
                      <Link className="img" href="#">
                        <Image src={img5} alt="" width={100} height={50} />
                      </Link>
                      <Link className="img" href="#">
                        <Image src={img6} alt="" width={100} height={50} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="copyright text-center">
                  <p>
                    &copy; Copyright <strong>Wolk Inc</strong>. All Rights
                    Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
