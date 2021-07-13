import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navs from "./navBar";
const Home = () => {
  return (
    <div className="overlay">
      <Container>
        <Row>
          <Col>{/* <Navs /> */}</Col>
        </Row>
        <Row className="name-wraper">
          <Row>
            <Col>
              <h2 className="name">Chris Tenney</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="title">voice over artist</h2>
            </Col>
            <Col className="title-col">
              <h2 className="slogen">
                <span style={{ color: "#7d0e01" }}>Friendly,</span>{" "}
                <span style={{ color: "#ae6927 " }}>Gentle</span> and Believable
              </h2>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
