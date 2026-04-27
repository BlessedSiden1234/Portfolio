import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import "./CertificationCard.css";

function Certification() {
  const certifications = [
    {
      id: "main",
      title: "Computer Science Certificate",
      description: "Computer Science certification",
      link: "/certification/main"
    },
    {
      id: "nysc",
      title: "NYSC Certificate",
      description: "National Youth Service Corps Certification",
      link: "/certification/nysc"
    },
    {
      id: "cryptography",
      title: "Cryptography Certificate",
      description: "Cryptography Certification",
      link: "/certification/cryptography"
    },
    {
      id: "design-analyst",
      title: "Design Analyst Certificate",
      description: "Design Analyst Certification",
      link: "/certification/design-analyst"
    },
    {
      id: "technical-support",
      title: "Technical Support Certificate",
      description: "Technical Support Certification",
      link: "/certification/technical-support"
    },
    {
      id: "object-detection",
      title: "Object Detection Certificate",
      description: "Object Detection Certification",
      link: "/certification/object-detection"
    }
  ];

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row style={{ justifyContent: "center", marginBottom: "50px" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>Certifications</h1>
      </Row>

      <Row className="certifications-grid">
        {certifications.map((cert) => (
          <Col md={6} lg={4} key={cert.id} className="mb-4">
            <Link to={cert.link} className="cert-card-link">
              <div className="cert-card">
                <div className="cert-card-content">
                  <h4>{cert.title}</h4>
                  <p>{cert.description}</p>
                  <span className="view-link">View Certificate →</span>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Certification;
