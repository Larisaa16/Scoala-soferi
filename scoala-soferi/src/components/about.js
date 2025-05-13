import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

import img1 from '../assets/images/img2.png';

export default function AppAbout() {
  return (
    <section id="about" className="block about-block" style={{ backgroundColor: '#f9f9f9', padding: '60px 0' }}>
      <Container fluid>
        <div className="title-holder text-center mb-5">
          <h2 className="about-title" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', textTransform: 'uppercase' }}>Despre Noi</h2>
          <div className="subtitle" style={{ fontSize: '1rem', color: '#999999' }}>Învăță despre noi</div>
        </div>
        <Row className="align-items-center justify-content-center">
          <Col sm={12} md={6} className="text-center mb-4 mb-md-0">
            <Image src={img1} fluid className="about-image" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }} 
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} 
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
          </Col>
          <Col sm={12} md={6}>
            <p className="about-text" style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
              La <strong>Școala Șoferi de Vis</strong> transformăm visul permisului auto în realitate! Oferim pregătire de calitate, 
              instructori răbdători și program flexibil, astfel încât fiecare cursant să învețe să conducă în siguranță și cu încredere.
            </p>
            <p className="about-text" style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
              Alegându-ne, investești în siguranța și încrederea ta la volan. Îți suntem alături la fiecare pas, de la prima oră până la examenul final!
            </p>
            <p className="about-text" style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
              Împreună facem din șofat o experiență plăcută și sigură!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
