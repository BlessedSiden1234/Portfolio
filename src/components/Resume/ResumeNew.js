import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfFile from "../../Assets/../Assets/Blessed_Siden_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);

    // Convert imported PDF module to a blob for react-pdf
    fetch(pdfFile)
      .then((res) => res.blob())
      .then((blob) => setPdfBlob(blob));
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfFile} // still works for download
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Viewer */}
       {/* PDF Viewer */}
<Row className="resume d-flex justify-content-center">
  {pdfBlob && (
    <Document
      file={pdfBlob}
      onLoadSuccess={onDocumentLoadSuccess}
      className="d-flex flex-column align-items-center" // <-- add this
    >
      {Array.from(new Array(numPages), (_, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          scale={width > 786 ? 1.7 : 0.6}
          className="mb-4"
        />
      ))}
    </Document>
  )}
</Row>


        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfFile} // still works for download
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
