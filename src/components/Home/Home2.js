import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/user-1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="azure-blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate engineer who enjoys building reliable, scalable, and
              user-focused applications across the web, mobile, and cloud.
              <br />
              <br />
              I work comfortably with
              <i>
                <b className="azure-blue">
                  {" "}
                  JavaScript, Python, and modern development technologies
                </b>
              </i>
              , applying them to solve real-world problems.
              <br />
              <br />
              My core interests include developing
              <i>
                <b className="azure-blue">
                  {" "}
                  full-stack web applications, mobile apps,
                </b>
              </i>{" "}
              and cloud-native systems with production-ready APIs.
              <br />
              <br />
              I enjoy building with
              <b className="azure-blue"> React</b>,{" "}
              <b className="azure-blue">React Native</b>,{" "}
              <b className="azure-blue">Node.js</b>, and{" "}
              <b className="azure-blue">Express</b>, while also working with
              <b className="azure-blue"> Python</b> for backend logic, automation,
              and applied machine learning.
              <br />
              <br />
              I actively deploy and integrate applications using
              <i>
                <b className="azure-blue">
                  {" "}
                  Microsoft Azure, AWS, and Firebase
                </b>
              </i>
              , leveraging cloud services, CI/CD workflows, and clean architecture
              to ensure performance, scalability, and maintainability.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="azure-blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/BlessedSiden1234"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/blessed-siden-926b601b8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
