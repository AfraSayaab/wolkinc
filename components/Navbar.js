"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className="fixed-top d-flex justify-content-between align-items-center">
      <div className="container d-flex justify-content-between">
        <div className="logo">
          <h1>
            <Link href="#hero">
              <Image src={logo} width={200} height={200} alt="Logo" className="img-fluid" />
            </Link>
          </h1>
        </div>

        <nav id="navbar" className={`navbar ${menuOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            <li>
              <Link href="#hero" className="nav-link scrollto active" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="#about" className="nav-link scrollto" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="#services" className="nav-link scrollto" onClick={() => setMenuOpen(false)}>Services</Link>
            </li>
            <li>
              <Link href="#contact" className="nav-link scrollto" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={toggleMenu}></i>
        </nav>
      </div>

      <style jsx>{`
        #header {
          height: 80px;
          transition: all 0.5s;
          z-index: 997;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0.8;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          margin: 0;
        }

        .navbar {
          display: flex;
          align-items: center;
        }

        .navbar ul {
          display: flex;
          margin: 0;
          padding: 0;
          list-style: none;
          align-items: center;
        }

        .navbar li {
          position: relative;
        }

        .navbar a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0 10px 30px;
          font-size: 15px;
          font-weight: 500;
          color: #fff;
          white-space: nowrap;
          transition: 0.3s;
        }

        .navbar a:hover,
        .navbar .active,
        .navbar li:hover > a {
          color: #3ec1d5;
        }

        .mobile-nav-toggle {
          color: #fff;
          font-size: 28px;
          cursor: pointer;
          display: none;
          line-height: 0;
          transition: 0.5s;
        }

        @media (max-width: 991px) {
          .mobile-nav-toggle {
            display: block;
          }

          .navbar ul {
            display: none;
          }

          .navbar.navbar-mobile ul {
            display: block;
            position: fixed;
            overflow: hidden;
            top: 0;
            left:0;
            right: 0;
            bottom: 0;
            width: 50%;
            background: #fff;
            padding: 20px;
            transition: 0.3s;
            z-index: 999;
            margin: 0;
            list-style: none;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
          }

          .navbar.navbar-mobile a {
            padding: 15px 20px;
            font-size: 15px;
            color: #0d2529;
          }

          .navbar.navbar-mobile a:hover,
          .navbar.navbar-mobile .active,
          .navbar.navbar-mobile li:hover > a {
            color: #3ec1d5;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
