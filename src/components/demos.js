import React from "react";
import { Col, Row } from "react-bootstrap";
import demo1 from "../demos/demo1.mp3";
import demo2 from "../demos/demo2.mp3";
import demo3 from "../demos/demo3.mp3";

const voiceDemos = [
  { id: 1, title: "Commercial", src: demo1 },
  { id: 2, title: "Explainer", src: demo2 },
  { id: 3, title: "Narration", src: demo3 },
];
const Demos = () => {
  return (
    <Col id="demos">
      <h2>LISTEN & DOWNLOAD</h2>
      {voiceDemos.map((demo) => (
        <Row key={demo.id}>
          <Col>
            <h4>{demo.title}</h4>
            <audio controls>
              <source src={demo.src} type="audio/mpeg" />
            </audio>
          </Col>
        </Row>
      ))}
    </Col>
  );
};

export default Demos;
