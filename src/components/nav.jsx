import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import fb from "../assets/facebook-logo.svg";
import ig from "../assets/instagram.svg";
import gplus from "../assets/google-plus.svg";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";

const Navigation = styled.nav`
  position: fixed;
  width: 100vw;
  z-index: 1000;

  .nav-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #d5931c;
    padding: 0px 5%;

    .nav-socmed-logo {
      display: flex;
      align-items: center;
      background-color: red;
      a {
        margin: 0px 20px;
        position: relative;
        img {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }

    .nav-phone {
      p {
        font-weight: 500;
        margin: 8px 0px;
        color: white;
      }
    }
  }
  .primary-nav {
    display: flex;
    align-items: center;
    padding: 30px 5%;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
    background-color: ${(props) =>
      props.position === "top" ? "transparent" : "#2a0c5d"};

    .nav-logo {
      background-color: green;
      width: 150px;
      position: relative;
      img {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .nav-links {
      ul {
        li {
          display: inline-block;
          margin-left: 37px;
          font-weight: 700;
          a {
            text-decoration: none;
            color: white;
          }
        }
      }
    }
  }
`;
let Nav = () => {
  const [pos, setPos] = useState("top");

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;

      if (scrolled >= 50) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, [pos]);

  return (
    <Navigation position={pos}>
      <div className="nav-details">
        <div className="nav-socmed-logo">
          <a href="#asd">
            <img src={fb} alt="" />
          </a>
          <a href="#asd">
            <img src={ig} alt="" />
          </a>
          <a href="#asd">
            <img src={gplus} alt="" />
          </a>
          <a href="#asd">
            <img src={linkedin} alt="" />
          </a>
          <a href="#asd">
            <img src={whatsapp} alt="" />
          </a>
        </div>

        <div className="nav-phone">
          <p>Phone | 000-000-00-</p>
        </div>
      </div>

      <div className="primary-nav">
        <div className="nav-logo">
          <a href="#sd">
            <img src={Logo} alt="" />
          </a>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              {/* <Link to="/#products">
                <p>Products</p>
              </Link> */}
              <a href="/#Products">Products</a>
            </li>
            <li>
              <a href="#Highlights">Highlights</a>
            </li>
            <li>
              <a href="#ad">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </Navigation>
  );
};

export default Nav;
