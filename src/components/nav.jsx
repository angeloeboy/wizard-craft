import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import fb from "../assets/logos/facebook-logo.svg";
import ig from "../assets/logos/instagram.svg";
import gplus from "../assets/logos/google-plus.svg";
import linkedin from "../assets/logos/linkedin.svg";
import whatsapp from "../assets/logos/whatsapp.svg";
import arrow from "../assets/logos/arrowLeft.png";

const Navigation = styled.nav`
  /* position: fixed; */
  width: 100vw;
  z-index: 1000;
  position: fixed;

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
      .browse {
        display: none;
      }

      img {
        display: none;
      }
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

    .nav-menuBar {
      display: none;
      .nav-bar {
        content: "";
        background-color: #ffa302;
        width: 40px;
        height: 4px;
        margin: 7px 0px;
      }
    }
  }

  @media (max-width: 900px) {
    .primary-nav {
      /* display: none; */
      .nav-links {
        position: absolute;
        height: 100vh;
        background-color: #1c0052;
        top: 0;
        right: 0;
        width: 100%;
        transform: translateX(100%);
        box-sizing: border-box;
        transform: ${(props) =>
          props.isHidden ? "translateX(100%);" : "translateX(0%);"};
        padding: 20px;
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        .browse {
          /* padding-left: 40px; */
          display: block;
          color: #ffa302;
          font-weight: 600;
          font-size: 1.5rem;
          border-bottom: 2px solid #341a66;
          padding-bottom: 10px;
        }

        .arrow {
          display: block;
          position: absolute;
          width: 15px;
          right: 40px;
          top: 24px;
        }

        ul {
          margin: 0px;
          padding: 0px;
          li {
            display: block;
            margin: 20px 0px;

            a {
              font-size: 1rem;
            }
          }
        }
      }
      .nav-menuBar {
        display: block;
      }
    }
  }

  @media (max-width: 550px) {
    .nav-details {
      .nav-socmed-logo {
        a {
          margin: 0px 15px;
          img {
            width: 15px;
          }
        }
      }

      .nav-phone {
        p {
          font-size: 12px;
        }
      }
    }
  }
`;
let Nav = () => {
  const [pos, setPos] = useState("top");
  const [isNavHidden, setNavVisibility] = useState(true);
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
    <Navigation position={pos} isHidden={isNavHidden}>
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
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="nav-links">
          <p className="browse">Browse Wizard Cart</p>
          <img
            src={arrow}
            alt=""
            className="arrow"
            onClick={() => setNavVisibility(!isNavHidden)}
          />
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
              <Link to="/About">
                <p>About</p>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="nav-menuBar"
          onClick={() => {
            setNavVisibility(!isNavHidden);
          }}
        >
          <div className="nav-bar"></div>
          <div className="nav-bar"></div>
          <div className="nav-bar"></div>
        </div>
      </div>
    </Navigation>
  );
};

export default Nav;
