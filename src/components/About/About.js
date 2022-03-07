import React from "react";
import { Container, Row, Col, CardColumns } from "react-bootstrap";
import Particle from "../Particle";

import laptopImg from "../../Assets/about.png";
import flames from "../../Assets/f.png";
import rdb from "../../Assets/r.jfif";
import iee from "../../Assets/i.jfif";
import seds from "../../Assets/s.png";
import voice from "../../Assets/V.png";



function About() {
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
         

       

          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" ,marginTop:"30px"}}>
              Experiences
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <CardColumns >
            <div class="card">
            <div class="containerr">
            <h5>Regional Development Bank  </h5>
            <img src={rdb} alt="about" className="img-fluid" style={{width: "100px", height: "100px", borderRadius: "50px"}} />
             <h6><strong className="purple">Internship </strong> | 2019 - 2020</h6> 
             
             
             <p>As a bank assistant I have Gathered and analyzed financial and related data of customers.Assist customers in handling their deposits and check payments.Assist banking personnel in preparing and also I checked bank documents and statements and Ensure compliance of security and banking policies and guidelines in banking assistant functions.</p>
            </div>
            </div>
            </CardColumns>
            <CardColumns>
            <div class="card">
            <div class="containerr">
            <h5>IEE USJ Student Branch </h5>
            <img src={iee} alt="about" className="img-fluid" style={{width: "100px", height: "100px", borderRadius: "50px"}} />
             <h6><strong className="purple">Media crew member</strong> | 2021 - present</h6> 
             <p>IEEE Student Branch of the University of Sri Jayewardenepura is the latest addition to the Student Branches of the IEEE Sri Lanka Section. Institute of Electrical and Electronic Engineers is the world’s largest association of technical professionals with more than 400,000 members representing over 150 countries around the world.I could gather wide range of disciplines, including information technology, information assurance, telecommunication, nanotechnology and many more.</p>
            </div>
            </div>
          </CardColumns>
          <CardColumns>
            <div class="card" style={{alignItems:'center'}}>
            <div class="containerr">
            <h5>SEDS J'pura </h5>
            <img src={seds} alt="about" className="img-fluid" style={{width: "100px", height: "100px"}} />
             <h6> <strong className="purple">Graphic Designer</strong>  | 2021 - present</h6>  
             <p>Students for the Exploration and Development of Space (SEDS) is a 501(c)3 non-profit that empowers young people to participate and make an impact in space exploration.As a web developer and graphic designer I could be able to participate in national projects as well as to attend conferences, publish their work, and develop their professional network, in order to help students, become more effective in their present and future careers in industry, academia, government, and education.</p>
            </div>
            </div>
            
            
            </CardColumns>
           
          
            </Row>
          </Col>




          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
            <br></br>
            <p></p>
            <br></br>
            <CardColumns></CardColumns>
            <CardColumns>
            <div class="card">
            <div class="containerr">
            <h5>Japura Voice</h5>
            <img src={voice} alt="about" className="img-fluid" style={{width: "100px", height: "100px", borderRadius: "50px"}} />
             <h6> <strong className="purple">Graphic Designer </strong>| 2021 - present</h6>  
             <p>J’pura Voice,is the Official Media and Broadcasting Unit of USJ.As a taskmaster of programming division I could be a part of a lots of projects like creators aid and japura voice rebranding project and gather knowledge of vedio editing,filming,news making,dubbing and graphics.</p>
            </div>
            </div>
            </CardColumns>
            <CardColumns>
            <div class="card">
            <div class="containerr">
            <h5>Japura Flames </h5>
            <img src={flames} alt="about" className="img-fluid" style={{width: "100px", height: "100px", borderRadius: "50px"}} />
             <h6><strong className="purple">Graphic Designer </strong> | 2020 - present</h6> 
             
             <p>The best media coverage of sports and events of University of Sri Jayewardenepura. J’pura flames crew promotes and supports all functions and events of the university making mother Jpura reach great heights.</p>
            </div>
            </div>
            <br></br>
           <p></p>
           <br></br>
           </CardColumns>
          </Col>
        </Row>
        
        

        

       
      </Container>
      
    </Container>
  );
}

export default About;
