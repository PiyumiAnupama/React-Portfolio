import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/7.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/7.png";
import chatify from "../../Assets/Projects/6.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Coffe Table Book"
              description="This coffee table book is a must-have for anyone who loves under water .I have included so many interesting topics.logos are designed using illustrator except them totaly book is designed using photoshop."
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="App UI Design"
              description="The first impressions are 94% design related.I designed a Mobile App using figma online tool.It contains Splash screens,Onboarding Screens,Login and profile screens,booking screens and other hotel information screens.Accourding to the given feedbacks it is a user friendly UI"
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hotel Website"
              description="I have designed Website for Kurunduwatta Holiday resort. It contains Facilities, Gallery, contacts, services etc: And Html,css,Js are used for it"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mobile Application development"
              description="I have delevopled full stack Hotel Booking App using react native and backend developed using Google firebase"
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Online Examination System"
              description="Online Examination system is a MCQ base examination system. It provides an easy to use environment for both students and teachers. It develops using java and OOP concepts"
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sales Management System"
              description=". Sales System project is useful for inventory management . Also it can be used for managing their sales and purchase. By the use of this software they can analyze daily sales and product inventory very easily. It develops using Python"
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Graphic designs"
              description="Flyers,Posters,logos, using photoshop & Illustrator."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
