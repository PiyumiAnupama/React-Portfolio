import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";

import ccgc from "../../Assets/ccgc.jfif";
import japura from "../../Assets/j.png";
import vta from "../../Assets/vt.jfif";
import sb from "../../Assets/sa.jfif";

function Project() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Education </strong>
           <br></br>
           <p></p>
        </h1>
        <div>
        <img src={japura} alt="about" className="img-fluid" style={{width: "100px", height: "100px"}} />
        <h2 className="ed">University of Sri Jayewardenepura</h2>
        <h3 className="edu">BSc (Hons) in Information Technology    • 2020 - 2024</h3>
        <br></br>
        <img src={vta} alt="about" className="img-fluid" style={{width: "100px", height: "100px"}} />
        <h2 className="ed">Vocational Training Authorty</h2>
        <h3 className="edu">NVQ Level 4 (Graphic Design)    • 2021 Juny - up to day</h3>
       
        
        
        <h3 className="edu">NVQ Level 4 (Information Communication Technology Technician)     • 2019 - 2020</h3>
        <br></br>
        <img src={sb} alt="about" className="img-fluid" style={{width: "100px", height: "100px"}} />
        <h2 className="ed">Sanghamitta Girls' College, Galle</h2>
        <h3 className="edu">G.C.E Advance Level   • Aug 2018</h3>
        <br></br>
        <img src={ccgc} alt="about" className="img-fluid" style={{width: "100px", height: "100px"}} />
        <h2 className="ed">Christ Church Girls' College, Baddegama</h2>
        <h3 className="edu">G.C.E Ordinary Level  • Dec 2015</h3>
        <br></br><br></br>


        </div>
        

      </Container>
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Skills </strong>
        </h1>
        
        <p class="a">HTML</p>
        <div class="containerrr">
          <div class="skills html"></div>
        </div>

        <p class="a">CSS</p>
        <div class="containerrr">
          <div class="skills css"></div>
        </div>

        <p class="a">JavaScript</p>
        <div class="containerrr">
          <div class="skills js"></div>
        </div>

        <p class="a">Python</p>
        <div class="containerrr">
          <div class="skills php"></div>
        </div>

        <p class="a">Java</p>
        <div class="containerrr">
          <div class="skills java"></div>
        </div>

      </Container>

      <br></br>
    </Container>
  );
}

export default Project;
