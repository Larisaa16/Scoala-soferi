import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


export default function AppContact() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        try {
            const response = await fetch("http://127.0.0.1:8888/scoala-soferi/contact.php", {
                method: "POST",
                body: formData
            });
    
            const data = await response.text();
    
            if (data.includes("trimis cu succes") || data.includes("success")) {
                alert("Mesaj trimis cu succes! Vă vom contacta în curând.");
            } else {
                throw new Error(data || "Eroare necunoscută de la server");
            }
        } catch (error) {
            console.error("Eroare detaliată:", error);
            alert(`Eroare la trimitere: ${error.message}`);
        }
    };

    return (
        <section id="contact" className="block contact-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Contacteaza-ne</h2>
                    <div className="subtitle">Ne poti contacta oricand</div>
                </div>
                <Form className='contact-form' onSubmit={handleSubmit}>
                    <Row>
                        <Col sm={4}>
                            <Form.Control type="text" placeholder="Nume complet" name="nume" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type="email" placeholder="Email" name="email" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type="tel" placeholder="Numar de telefon" name="telefon" required />
                        </Col>
                        <Row>
                            <Col sm={12}>
                                <Form.Control as="textarea" placeholder="Introduceti mesajul" name="mesaj" required />
                            </Col>
                        </Row>
                    </Row>
                    <div className='btn-holder'>
                        <Button type="submit">Trimite</Button>
                    </div>
                </Form>
            </Container>
            <div className='google-map'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.201641221268!2d24.85308880000001!3d44.8785453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2bba235e8193b%3A0x6e86b341ffe51c67!2sSTRADA%20DEPOZITELOR%2CNR.38!5e0!3m2!1sro!2sro!4v1745338175684!5m2!1sro!2sro"
                    title="Harta locatiei" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>n
            </div>
            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className="fas fa-envelope"></i>
                            soferidevis@gmail.com
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            +40 712 345 678
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            Str. Depozitelor, Nr. 38, Pitești
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}