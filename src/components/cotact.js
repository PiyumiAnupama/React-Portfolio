import React from "react";
import { Container, Row, Col, CardColumns } from "react-bootstrap";
import Particle from "./Particle";

import laptopImg from "../Assets/about.png";

function contact() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px",marginTop:"-40px" }}>
              Working <strong className="purple">Experience</strong>
            </h1>
            <div className="gridd">
            
             <h3>Regional Development Bank - Internship</h3>
             <h4>Trainee | 2019-2020</h4>
          </div>

          <br></br>

          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" ,marginTop:"30px"}}>
              Volunteer <strong className="purple">Experience</strong>
            </h1>
            <CardColumns>
            <div class="card">
            <div class="containerr">
            <h5>IEE USJ Student Branch </h5>
             <h6>Media crew member</h6> 
            </div>
            </div>
            <div class="card">
            <div class="containerr">
            <h5>SEDS J'pura </h5>
             <h6>Graphic Designer</h6>  
            </div>
            </div>
            </CardColumns>
            <CardColumns>
            <div class="card">
            <div class="containerr">
            <h5>Japura Flames </h5>
             <h6>Graphic Designer</h6> 
            </div>
            </div>
            <div class="card">
            <div class="containerr">
            <h5>Japura Voice</h5>
             <h6>Graphic Designer</h6>  
            </div>
            </div>
            </CardColumns>
          </Col>




          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
        

        

       
      </Container>
      
    </Container>
  );
}
        export default contact;