import React from "react";
import styled from "styled-components";
import fb from "../assets/facebook-logo.svg";
import ig from "../assets/instagram.svg";
import gplus from "../assets/google-plus.svg";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";

const Foot = styled.footer`
  background-color: #1d0055;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  padding: 70px 0px;
  div {
    padding: 10px;

    p {
      margin: 0px;
      color: #d5931c;
      font-size: 1.1rem;
      font-weight: 700;
    }

    a {
      display: block;
      color: white;
      text-decoration: none;
      margin: 10px 0px;
      margin: 5px 0px;
      font-weight: 200;
      font-size: 1.1rem;
    }

    img {
      width: 20px;
      display: inline-block;
      margin: 0px 10px;
      margin-top: auto;
    }

    &:nth-child(5) {
      /* width: 30%; */

      margin-top: auto;
      a {
        display: inline-block;
        position: relative;
        margin: 0px 20px;
        img {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }

  .copyright {
    p {
      font-size: 1rem;
      font-weight: 300;
      color: white;
    }
  }
`;

export let Footer = () => {
  return (
    <Foot>
      <div className="copyright">
        <p>© Glen Vale 2021</p>
      </div>
      <div className="contact">
        <p>Contact Info</p>
        <a href="www.facebook.com">Lorem Ipsum</a>
        <a href="www.facebook.com">Lorem Ipsum</a>
        <a href="www.facebook.com">Lorem Ipsum</a>
      </div>
      <div className="contact">
        <p>Contact Info</p>
        <a href="www.facebook.com">Lorem Ipsum</a>
        <a href="www.facebook.com">Lorem Ipsum</a>
        <a href="www.facebook.com">Lorem Ipsum</a>
      </div>
      <div className="contact">
        <p>Contact Info</p>
        <a href="www.facebook.com">Lorem Ipsum</a>
        <a href="www.facebook.com">Lorem Ipsum</a>
        <a href="www.facebook.com">Lorem Ipsum</a>
      </div>
      <div className="social-medias">
        <a href="www.facebook.com">
          <img src={fb} alt="" />
        </a>
        <a href="www.facebook.com">
          <img src={ig} alt="" />
        </a>
        <a href="www.facebook.com">
          <img src={gplus} alt="" />
        </a>
        <a href="www.facebook.com">
          <img src={linkedin} alt="" />
        </a>
        <a href="www.facebook.com">
          <img src={whatsapp} alt="" />
        </a>
      </div>
    </Foot>
  );
};
