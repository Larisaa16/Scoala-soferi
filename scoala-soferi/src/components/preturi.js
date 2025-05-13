import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
    {
      id: 1,
      plan: 'Permis Categoria A',
      price: '1.200 RON',
      features: [
        '20 ore conducere practică motocicletă',
        'Pregătire teoretică completă',
        'Program flexibil',
        'Asistență la programarea examenului',
        'Suport permanent instructor'
      ],
      link: 'https://www.scoaladesoferidevis.ro/inscriere'
    },
    {
      id: 2,
      plan: 'Permis Categoria B',
      price: '2.000 RON',
      features: [
        '30 ore conducere practică auto',
        'Cursuri teorie rutieră',
        'Program flexibil + weekend',
        'Simulare examen teoretic',
        'Asistență completă la înscriere'
      ],
      link: 'https://www.scoaladesoferidevis.ro/inscriere'
    },
    {
      id: 3,
      plan: 'Permis Categoria C',
      price: '2.700 RON',
      features: [
        '40 ore conducere practică auto',
        'Cursuri teoretice intensive',
        'Program personalizat',
        'Simulare examen + ore extra',
        'Consultanță completă pentru documente'
      ],
      link: 'https://www.scoaladesoferidevis.ro/inscriere'
    }
  ];
  

function AppPricing() {
  return (
    <section id="preturi" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Preturi &amp; planuri</h2>
          <div className="subtitle">Verificați prețurile și planurile noastre</div>
        </div>
        <Row>
          {
            pricingData.map(pricing => {
              return (
                <Col sm={4} key={pricing.id}>
                  <div className='heading'>
                    <h3>{pricing.plan}</h3>
                    <span className='price'>{pricing.price}</span>
                  </div>
                  <div className='content'>
                    <ListGroup>
                      {
                        pricing.features.map((feature, index) => {
                          return (
                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>    
                          );
                        })
                      }
                    </ListGroup>
                  </div>

                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppPricing;