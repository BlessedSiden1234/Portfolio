import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/ecommerce1.png";
import emotion from "../../Assets/Projects/facial-emotion.png";
import editor from "../../Assets/Projects/geo-weather1.png";
import chatify from "../../Assets/Projects/subnet-express.png";
import suicide from "../../Assets/Projects/social-impact1.png";
import bitsOfCode from "../../Assets/Projects/expense-tracker1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="azure-blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SubnetExpress"
              description="SubnetExpress is a full-stack VTU and wallet-based utility platform built with the MERN stack. The frontend is developed in React, while the backend uses Node.js, Express, and MongoDB (Mongoose) with JWT-based authentication for secure user access. The platform enables users to fund wallets via Paystack and PalmPay virtual accounts, purchase airtime and mobile data, pay cable TV and electricity bills, and buy education tokens such as WAEC and NECO, with reliable payment and service integrations for real-world financial transactions."
              demoLink="https://subnetexpress.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI for Social Impact"
              ghLink="https://github.com/BlessedSiden1234/Artificial-Intelligence-For-Social-Impact"
              description="Artificial Intelligence for Social Impact is a research-focused project that applies AI and Natural Language Processing (NLP) techniques to analyze public Reddit posts for suicide-related content. The system identifies early warning signs of mental health distress to support suicide prevention efforts, using machine learning models such as TF-IDF, Random Forest, and LSTM."
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Expense Tracker"
              ghLink="https://github.com/BlessedSiden1234/Expense-tracker-app"
              description="A full-stack expense tracking application built with React on the frontend and Azure Functions for serverless API routes. The application uses Azure Cosmos DB for scalable data storage and supports real-time expense logging, monthly summaries, and category-based tracking. Designed with a clean Bootstrap UI and deployed on Netlify with a cloud-native Azure backend."
              demoLink="https://monumental-kitsune-d8f9ca.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ecommerce App"
              ghLink="https://github.com/BlessedSiden1234/Ecommerce-App"
              description="Ecommerce-App is a full-stack e-commerce platform built with the MERN stack (React, Node.js, Express, and MongoDB). It allows users to browse products, manage shopping carts, and securely complete checkouts using PayPal and Stripe. The platform includes role-based JWT authentication, enabling administrators to manage products, users, and inventory through a protected admin dashboard."
              demoLink="https://ecommerce-app-2-6n1n.onrender.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Facial Emotion Recognition System"
              description="Developed a CNN-based emotion classification model trained on the FER-2013 dataset using Keras and TensorFlow. The model accurately classifies multiple human facial emotions and achieved a maximum validation accuracy of 60.1%. OpenCV was integrated for face detection, after which the detected facial region is passed to the classifier to predict the individual’s emotional state."
              ghLink="https://github.com/BlessedSiden1234/Facial-Emotion-Recognition-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Geo & Weather Dashboard"
              ghLink="https://github.com/BlessedSiden1234/GeoWeatherDashboard"
              description="Geo & Weather Dashboard is a responsive React application that allows users to search for cities worldwide and view real-time weather data. It also displays weather information for randomly selected cities in a dynamic grid layout, delivering a clean, intuitive, and mobile-friendly user experience. The application integrates GeoDB Cities API for location search and OpenWeather API for live weather data, with efficient async data fetching and pagination."
              demoLink="https://geoweatherdashboard-1.onrender.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
