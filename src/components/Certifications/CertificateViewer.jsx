import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineArrowLeft } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Import all PDFs
import certPdf from "../../Assets/Blessed_Siden_Cert.pdf";
import nyscCertPdf from "../../Assets/nysc_cert.pdf";
import cryptographyPdf from "../../Assets/cryptography.pdf";
import designAnalystPdf from "../../Assets/design_analyst.pdf";
import technicalSupportPdf from "../../Assets/technical_support.pdf";
import objectDetectionPdf from "../../Assets/object_detection.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const certificates = {
  main: { title: "Certificate", pdf: certPdf },
  nysc: { title: "NYSC Certificate", pdf: nyscCertPdf },
  cryptography: { title: "Cryptography Certificate", pdf: cryptographyPdf },
  "design-analyst": { title: "Design Analyst Certificate", pdf: designAnalystPdf },
  "technical-support": { title: "Technical Support Certificate", pdf: technicalSupportPdf },
  "object-detection": { title: "Object Detection Certificate", pdf: objectDetectionPdf }
};

function CertificateViewer() {
  const { type = "main" } = useParams();
  const navigate = useNavigate();
  const [width, setWidth] = useState(1200);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const certificate = certificates[type];

  useEffect(() => {
    setWidth(window.innerWidth);

    if (certificate) {
      fetch(certificate.pdf)
        .then((res) => res.blob())
        .then((blob) => setPdfBlob(blob));
    }
  }, [type, certificate]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  if (!certificate) {
    return (
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", textAlign: "center", marginTop: "50px" }}>
          <h3>Certificate not found</h3>
          <Button
            variant="primary"
            onClick={() => navigate("/certification")}
            style={{ marginTop: "20px", maxWidth: "200px" }}
          >
            <AiOutlineArrowLeft /> Back
          </Button>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Back Button */}
      <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
        <Button
          variant="secondary"
          onClick={() => navigate("/certification")}
          style={{ maxWidth: "150px" }}
        >
          <AiOutlineArrowLeft />
          &nbsp;Back
        </Button>
      </Row>

      {/* Title */}
      <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
        <h2 style={{ textAlign: "center" }}>{certificate.title}</h2>
      </Row>

      {/* Download Button */}
      <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
        <Button
          variant="primary"
          href={certificate.pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;View Full PDF
        </Button>
      </Row>

      {/* PDF Viewer */}
      <Row className="resume d-flex justify-content-center">
        {pdfBlob && (
          <Document
            file={pdfBlob}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex flex-column align-items-center"
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.6 : 0.6}
                className="mb-4"
              />
            ))}
          </Document>
        )}
      </Row>
    </Container>
  );
}

export default CertificateViewer;
