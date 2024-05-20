import { BsEnvelope, BsGeoAlt } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import ContactForm from "./ContactForm";
import GoogleCaptchaWrapper from "../google-captcha-wrapper";
const Contact = () => {
  return (
    <>
      <div id="contact" className="contact-area">
        <div className="contact-inner area-padding">
          <div className="contact-overly"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Contact us</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="contact-icon text-center">
                  <div className="single-icon">
                    <FiSmartphone className="icon" />
                    <p>
                      Call: +1 5589 55488 55
                      <br />
                      <span>Monday-Friday (9am-5pm)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-icon text-center">
                  <div className="single-icon">
                    <BsEnvelope className="icon" />
                    <p>
                      Email: info@example.com
                      <br />
                      <span>Web: www.example.com</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-icon text-center">
                  <div className="single-icon">
                    <BsGeoAlt className="icon" />
                    <p>
                      Location: A108 Adam Street
                      <br />
                      <span>NY 535022, USA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452"
                  width="100%"
                  height="380"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                ></iframe>
              </div>
              <GoogleCaptchaWrapper>
                <ContactForm />
              </GoogleCaptchaWrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
