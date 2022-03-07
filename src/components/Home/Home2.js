import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/3.png";
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             I'm an undergraduate of BSc (Hons) in Information Technology from Faculty of Humanities and 
             Social Sciences, at University Of Sri Jayewardenepura.
              <br />
              <br />While graphic design and cording are my two passions, I also enjoy watching movies, 
              reading novels and traveling. 
              <br></br><br></br>I am a young enthusiastic individual who always seeks for the 
              opportunity. Therefore I have the ultimate intention of counting doing my stuff well.I really 
              like to meet and work with different people.I am much interested in developing new things which
               excite me a lot.

              
              
             
             
            </p>
            <br></br><br></br><br></br>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br></br>
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
