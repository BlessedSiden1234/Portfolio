import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiGithub,
  SiDocker,
  SiMicrosoftazure,
  SiFirebase,
  SiVercel,
  SiRender,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* IDE & Collaboration */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      {/* API / Testing */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* Cloud & Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
      </Col>
    </Row>
  );
}

export default Toolstack;
