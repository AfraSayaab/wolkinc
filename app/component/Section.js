"use client"// components/Section.js
import React from 'react';
import dynamic from 'next/dynamic';
import img1 from '../../public/img/hero-carousel/1.jpg';
import img2 from '../../public/img/hero-carousel/2.jpg';
import img3 from '../../public/img/hero-carousel/3.jpg';
import 'animate.css';
import Link from 'next/link';
import { Carousel } from 'react-bootstrap';

const Section = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <Carousel controls indicators interval={1000} fade>
          <Carousel.Item>
            <div
              className="carousel-item active"
              style={{
                backgroundImage: `url(${img1.src})`,
                backgroundSize: 'cover',
              }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    The Best Business Information
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    We&apos;re In The Business Of Helping You Start Your Business
                  </p>
                  <a
                    href="#about"
                    className="btn-get-started scrollto animate__animated animate__fadeInUp"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="carousel-item active"
              style={{
                backgroundImage: `url(${img2.src})`,
                backgroundSize: 'cover',
              }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    The Best Business Information
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    We&apos;re In The Business Of Helping You Start Your Business
                  </p>
                  <Link
                    href="#about"
                    className="btn-get-started scrollto animate__animated animate__fadeInUp"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="carousel-item active"
              style={{
                backgroundImage: `url(${img3.src})`,
                backgroundSize: 'cover',
              }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    The Best Business Information
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    We&apos;re In The Business Of Helping You Start Your Business
                  </p>
                  <a
                    href="#about"
                    className="btn-get-started scrollto animate__animated animate__fadeInUp"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Section;
