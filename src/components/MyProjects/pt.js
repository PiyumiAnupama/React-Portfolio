import React from "react";
import { Container, Row, Col, CardColumns } from "react-bootstrap";

import Particle from "../Particle";



function pt() {
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
        <br></br>
      <CardColumns>
      
            <div class="card">
            
            <h5>IEE USJ Student Branch </h5>
             <h6>Media crew member</h6> 
            </div>
           
            <div class="card">
            
            <h5>SEDS J'pura </h5>
             <h6>Graphic Designer</h6>  
            </div>
            
            
            </CardColumns>
            <CardColumns>
            <div class="card">
            
            <h5>Japura Flames </h5>
             <h6>Graphic Designer</h6> 
            </div>
            
            <div class="card">
            
            <h5>Japura Voice</h5>
             <h6>Graphic Designer</h6>  
            </div>
            
            
           
            </CardColumns>
            <CardColumns className="f">
            <div class="card">
            
            <h5>Japura Voice</h5>
             <h6>Graphic Designer</h6>  
            </div>
            </CardColumns>
      </Container>
      <br></br><br></br><br></br>
    </Container>
  );
}

export default pt;
