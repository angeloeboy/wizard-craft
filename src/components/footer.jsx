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
  padding: 50px 0px;
  div {
    padding: 10px;

    p {
      margin: 0px;
      color: #d5931c;
      font-size: 1rem;
      font-weight: 700;
    }

    a {
      display: block;
      color: white;
      text-decoration: none;
      margin: 10px 0px;
      margin: 5px 0px;
      font-weight: 200;
    }

    img {
      width: 20px;
      display: inline-block;
      margin: 10px;
    }

    &:nth-child(5) {
      /* width: 30%; */

      a {
        display: inline-block;
      }
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
