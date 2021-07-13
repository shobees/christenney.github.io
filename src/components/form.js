import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="overlay">
      <Container>
        <h2 className="heading"> CONTACT US</h2>
        <form className="form">
          <Row>
            <Col>
              <input className="name-input" placeholder="NAME" type="text" />
            </Col>
          </Row>
          <Row xs={1} lg={2} md={2}>
            <Col>
              <input className="email-input" placeholder="EMAIL" type="email" />
            </Col>
            <Col>
              <input
                className="phone-input"
                placeholder="PHONE"
                type="number"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <textarea className="textarea" placeholder="MESSAGE" />
            </Col>
          </Row>
          <button id="button" onClick={handleSubmit}>
            SEND
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Form;
