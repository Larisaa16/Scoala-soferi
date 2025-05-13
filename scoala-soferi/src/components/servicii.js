import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-motorcycle',
    title: 'Permis Categoria A',
    description: 'Pregătire completă pentru obținerea permisului moto, teorie și practică alături de instructori dedicați.'
  },
  {
    id: 2,
    icon: 'fas fa-car',
    title: 'Permis Categoria B',
    description: 'Cursuri pentru șoferii auto începători, adaptate fiecărui nivel, cu accent pe siguranță și încredere.'
  },
  {
    id: 3,
    icon: 'fas fa-car-side',
    title: 'Permis Categoria B Extins',
    description: 'Extinderea permisului B cu module avansate pentru experiență practică variată și condus în siguranță.'
  },
  {
    id: 4,
    icon: 'fas fa-truck',
    title: 'Permis Categoria C',
    description: 'Pregătire pentru conducerea autovehiculelor de mare tonaj, conform standardelor europene.'
  }
]

function AppServices() {
  return (
    <section id="servicii" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Serviciile Noastre</h2>
          <div className="subtitle">Ce îți oferim</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={6} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;