import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function contact() {
    return (
        <Container fluid className="resume-section">
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              <span className="purple">Anupama</span> Piyadigama
            </p>
            <p>No 94D, Weyhena, Mattaka</p>
            <p>070 3272432</p>
            <div >
            <p>Personal : <a href="mailto:piyumianupama99@gmail.com">piyumianupama99@gmail.com</a></p>
            <p>University : <a href="mailto:96447@fhss.sjp.ac.lk">96447@fhss.sjp.ac.lk</a></p>
             
             </div>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Piyadigama"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/piyumi-anupama-3449351b3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          </Col>
        </Row>
        </Container>
          );
        }
        export default contact;