import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import pdf from "../../Assets/Anupama.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import {pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeNew() {


  return (
    <div>
      
        

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
   
    </div>
  );
}

export default ResumeNew;
