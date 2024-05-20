import Link from "next/link";
import { VscBriefcase } from "react-icons/vsc";
import {
  BsCardChecklist,
  BsBarChart,
  BsBinoculars,
  BsBrightnessHigh,
  BsCalendar4Week,
} from "react-icons/bs";

const Services = () => {
  return (
    <>
      <div id="services" className="services-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline services-head text-center">
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row text-center ">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="about-move">
                <div className="services-details">
                  <div className="single-services">
                    <Link className="services-icon" href="#">
                      <VscBriefcase />
                    </Link>
                    <h4>Expert Coder</h4>
                    <p>
                      will have to make sure the prototype looks finished by
                      inserting text or photo.make sure the prototype looks
                      finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="about-move">
                <div className="services-details">
                  <div className="single-services">
                    <Link className="services-icon" href="#">
                      <BsCardChecklist />
                    </Link>
                    <h4>Creative Designer</h4>
                    <p>
                      will have to make sure the prototype looks finished by
                      inserting text or photo.make sure the prototype looks
                      finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className=" about-move">
                <div className="services-details">
                  <div className="single-services">
                    <Link className="services-icon" href="#">
                      <BsBarChart />
                    </Link>
                    <h4>Wordpress Developer</h4>
                    <p>
                      will have to make sure the prototype looks finished by
                      inserting text or photo.make sure the prototype looks
                      finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className=" about-move">
                <div className="services-details">
                  <div className="single-services">
                    <Link className="services-icon" href="#">
                      <BsBinoculars />
                    </Link>
                    <h4>Social Marketer </h4>
                    <p>
                      will have to make sure the prototype looks finished by
                      inserting text or photo.make sure the prototype looks
                      finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className=" about-move">
                <div className="services-details">
                  <div className="single-services">
                    <Link className="services-icon" href="#">
                      <BsBrightnessHigh />
                    </Link>
                    <h4>Seo Expart</h4>
                    <p>
                      will have to make sure the prototype looks finished by
                      inserting text or photo.make sure the prototype looks
                      finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className=" about-move">
                <div className="services-details">
                  <div className="single-services">
                    <Link className="services-icon" href="#">
                      <BsCalendar4Week />
                    </Link>
                    <h4>24/7 Support</h4>
                    <p>
                      will have to make sure the prototype looks finished by
                      inserting text or photo.make sure the prototype looks
                      finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
