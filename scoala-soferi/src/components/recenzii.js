import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

var dateRecenzii=[
    {
        id:1,
        name:'Andrei',
        descriere:'O experiență excelentă! Instructorii sunt foarte răbdători și explica totul clar. Am reușit să învăț rapid regulile de circulație și să capăt încredere la volan.',
        functie:'Fost cursant'
    },
    {
        id:2,
        name: 'Ioana',
        descriere:'Recomand cu drag această școală de șoferi! Programările au fost flexibile, iar atmosfera prietenoasă m-a ajutat să scap de emoții și să trec examenul din prima.',
        functie:'Fostă cursantă'
    },
    {
        id: 3,
        name: 'Mihai',
        descriere: 'Instructorii sunt profesioniști și dedicați, mașinile sunt moderne și bine întreținute. M-au pregătit foarte bine atât pentru sala cât și pentru traseu!',
        functie: 'Cursant'
    }
  
]

export default function AppRecenzii() {
  return (
    <section id="recenzii" className="recenzii-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Recenziile clientilor</h2>
          <div className="subtittle">Ce spun clientii despre noi</div>
        </div>
        <Carousel controls={false}>
            {
                dateRecenzii.map(recenzii =>{
                    return (
                      <Carousel.Item key={recenzii.id}>
                        <blockquote>
                          <p>{recenzii.descriere}</p>
                          <cite>
                            <span className="name">{recenzii.name}</span>
                            <span className="functie">{recenzii.functie}</span>
                          </cite>
                        </blockquote>
                      </Carousel.Item>
                    );
                })
            }
          
        </Carousel>
      </Container>
    </section>
  );
}
