import React from "react";
import styled from "styled-components";
import fb from "../assets/logos/facebook-logo.svg";
import ig from "../assets/logos/instagram.svg";
import gplus from "../assets/logos/google-plus.svg";
import linkedin from "../assets/logos/linkedin.svg";
import whatsapp from "../assets/logos/whatsapp.svg";
import logo from "../assets/logo.png";
import { HashLink as Link } from "react-router-hash-link";
import distillateProducts from "./distillateProducts";

const Foot = styled.footer`
  background-color: #3b118b;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;

  .container {
    padding: 70px 10%;
    max-width: 1500px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    font-weight: 300;

    h1 {
      color: #ffa302;
      font-size: 1rem;
      font-weight: 500;
    }

    .logo-texts {
      color: white;
      grid-column: 1/3;
      max-width: 300px;
      .logo {
        width: 150px;
      }

      p {
        margin-top: 20px;
      }
    }

    .footer-navigation {
      grid-column: 4/6;

      .links {
        margin-top: 5px;

        a {
          text-decoration: none;
          color: white;

          p {
            margin-top: 5px;
          }
        }
      }
    }

    .contacts {
      grid-column: 6/7;

      .icons {
        display: flex;
        align-items: center;
        margin-top: 5px;
        a {
          margin-right: 20px;
          img {
            width: 15px;
          }
        }
      }
    }

    @media (max-width: 830px) {
      padding: 70px 5%;
      flex-direction: column;
      display: block;
      .logo-texts {
        max-width: initial;
        margin-bottom: 20px;
      }
      .footer-navigation {
        display: inline-block;
        width: 30%;
        font-size: 0.8rem;
      }
      .contacts {
        display: inline-block;
        width: 50%;
        float: right;
      }
    }

    @media (max-width: 500px) {
      .logo-texts {
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export let Footer = () => {
  return (
    <Foot id="footer">
      <div className="container">
        <div className="logo-texts">
          <img src={logo} alt="" className="logo" />
          <p>
            Wizard carts are focused on quality. We want our consumers to enjoy
            the highest quality vape that is possible.
          </p>
        </div>

        <div className="footer-navigation">
          <h1>Navigation</h1>
          <div className="links">
            <a href="/">
              <p>Home</p>
            </a>
            <a href="#products">
              <p>Products</p>
            </a>
            <a href="#Highlights">
              <p>Highlights</p>
            </a>
            <Link to="/About">
              <p>About</p>
            </Link>
          </div>
        </div>

        <div className="contacts">
          <h1>Contacts</h1>

          <div className="icons">
            <a
              href="https://web.facebook.com/wizardcart"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fb} alt="" />
            </a>
            <a
              href="https://www.instagram.com/wizardcart"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ig} alt="" />
            </a>
            <a
              href="mailto:wizardcartridge@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gplus} alt="" />
            </a>
            <a href="" target="_blank">
              <img src={linkedin} alt="" />
            </a>
            <a href="" target="_blank">
              <img src={whatsapp} alt="" />
            </a>
          </div>
        </div>
      </div>
    </Foot>
  );
};
