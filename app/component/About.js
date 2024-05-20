import Link from "next/link";
import Image from "next/image";
import img from "..//../public/img/about/1.jpg";
import { IoCheckmarkSharp } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="about-area area-padding">
      <div className="container">
        <div className="section-headline text-center">
          <h2>About eBusiness</h2>
        </div>
        <div className="container">
          <div className="row">
          <div className="col-md-6 col-sm-6  col-lg-6 col-12">
          <div className="">
            <div className="single-well">
              <Link href="#">
                <Image className="img-fluid img " src={img} alt=""  height={400}  />
              </Link>
            </div>
          </div>
          </div>
           <div className="col-sm-6 col-md-6 col-12 col-lg-6 ">
           <div className="">
            <div className="single-well">
              <Link href="#">
                <h4 className="sec-head ">Project Maintenance</h4>
              </Link>
              <p>
                Redug Lagre dolor sit amet, consectetur adipisicing elit. Itaque
                quas officiis iure aspernatur sit adipisci quaerat unde at
                nequeRedug Lagre dolor sit amet, consectetur adipisicing elit.
                Itaque quas officiis iure
              </p>
              <ul>
                <li>
                  <IoCheckmarkSharp className="icon" /> Interior design Package
                </li>
                <li>
                  <IoCheckmarkSharp className="icon" /> Building House
                </li>
                <li>
                  <IoCheckmarkSharp className="icon" /> Repairing of Residential
                  Roof
                </li>
                <li>
                  <IoCheckmarkSharp className="icon" /> Renovation of Commercial
                  Office
                </li>
                <li>
                  <IoCheckmarkSharp className="icon" /> Make Quality Products
                </li>
              </ul>
            </div>
          </div>
           </div>
          </div>
          </div>
        </div>
      </div>
     
  );
};

export default About;
