import React from "react";
import styled from "styled-components";
import fb from "../assets/logos/facebook-logo.svg";
import ig from "../assets/logos/instagram.svg";
import gplus from "../assets/logos/google-plus.svg";
import linkedin from "../assets/logos/linkedin.svg";
import whatsapp from "../assets/logos/whatsapp.svg";
import logo from "../assets/logo.png";

const Foot = styled.footer`
  background-color: #1d0055;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;

  .container {
    padding: 70px 15%;
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-weight: 300;

    h1 {
      color: #ffa302;
      font-size: 1rem;
      font-weight: 500;
    }

    .logo-texts {
      color: white;
      grid-column: 1/3;
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
      grid-template-rows: 3fr 1fr 3fr;
      padding: 70px 5%;
      .logo-texts {
        grid-column: 1/8;
        grid-row: 1/1;
      }

      .footer-navigation {
        grid-column: 1/6;
        grid-row: 3/4;
      }

      .contacts {
        grid-column: 4/7;
        grid-row: 3/4;
      }
    }

    @media (max-width: 400px) {
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
            <a href="/About">
              <p>About</p>
            </a>
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
