import React from "react";
import styled from "styled-components";
import fb from "../assets/logos/facebook-logo.svg";
import ig from "../assets/logos/instagram.svg";
import gplus from "../assets/logos/google-plus.svg";
import linkedin from "../assets/logos/linkedin.svg";
import whatsapp from "../assets/logos/whatsapp.svg";

const Foot = styled.footer`
  background-color: #1d0055;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  padding: 70px 0px;
  position: relative;
  overflow-x: hidden;
  box-sizing: border-box;

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
      margin-top: 10%;

      a {
        display: inline-block;
        position: relative;
        margin: 0px 20px;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%);
          transform: translateX(-50%);
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

  .copyrightSquare {
    position: absolute;
    top: 0;
    left: 5%;
    content: "";
    width: 50px;
    height: 100px;
    /* background-color: pink; */
    border: 1px solid #9387a8;
    border-top: none;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    padding: 120px 4% 70px 0px;
    .copyright {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    div:nth-child(2) {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
    }

    div:nth-child(3) {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }

    div:nth-child(4) {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 3;
    }

    div:nth-child(5) {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 3;
      grid-row-end: 4;
      text-align: center;
    }
  }

  @media (max-width: 900px) {
    .contact {
      text-align: center;
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
      <div className="copyrightSquare"></div>
    </Foot>
  );
};
