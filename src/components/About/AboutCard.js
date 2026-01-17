import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I’m <span className="azure-blue">Blessed Siden</span>.
            <br />
            I hold a <span className="azure-blue">BSc in Computer Science</span>{" "}
            from the{" "}
            <span className="azure-blue">
              University of the People (United States, Pasadena, CA)
            </span>{" "}
            and a{" "}
            <span className="azure-blue">
              BSc in Quantity Surveying
            </span>{" "}
            from the{" "}
            <span className="azure-blue">
              University of Benin (Nigeria)
            </span>.
            <br />
            <br />
            I’m a <span className="azure-blue">Full Stack Software Engineer</span>{" "}
            with a strong interest in building scalable web applications,
            cloud-native systems, and developer-focused products.
            <br />
            <br />
            I enjoy working across the stack, from crafting clean and responsive
            user interfaces to designing robust backend APIs and deploying
            applications using modern cloud and DevOps practices.
            <br />
            <br />
            Apart from coding, here are a few things I genuinely enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building side projects & experimenting with new tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Working with cloud platforms (Azure, AWS, Firebase)
            </li>
            <li className="about-activity">
              <ImPointRight /> Mobile app development with React Native
            </li>
            <li className="about-activity">
              <ImPointRight /> Open-source collaboration & continuous learning
            </li>
          </ul>

          <p style={{ color: "rgba(95, 168, 255, 0.85)" }}>
            “I enjoy turning ideas into reliable, real-world software.”
          </p>
          <footer className="blockquote-footer">Blessed Siden</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
