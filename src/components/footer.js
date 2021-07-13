import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  let headerIcons = [
    {
      link: "https://www.facebook.com",
      name: "facebook",
      class: "icon facebook fa fa-facebook-f",
    },
    {
      link: "https://www.twitter.com",
      name: "twitter",
      class: "icon twitter fa fa-twitter",
    },
    {
      link: "https://www.linkedin.com",
      name: "linkedin",
      class: "icon linkedin fab fa-linkedin-in",
    },
    {
      link: "https://www.youtube.com",
      name: "youtube",
      class: "icon youtube fa fa-youtube",
    },
    {
      link: "https://www.instagram.com",
      name: "instagram",
      class: "icon instagram fa fa-instagram",
    },
  ];

  return (
    <Container>
      <Row>
        <Col className="footer-wraper">
          <a href="/">
            <div className="cellNo">
              <i className="fa fa-mobile"></i>
              <p>202 656 1896</p>
            </div>
          </a>
          <a href="/">
            <div className="cellNo">
              <i className="fa fa-envelope"></i>
              <p>voice@christenney.com</p>
            </div>
          </a>
          {headerIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className={icon.class}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.link}
              ></i>
            </a>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="rights">
            &copy; 2021 All rights Reserved{" "}
            <a href="/">voice@christenney.com</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
