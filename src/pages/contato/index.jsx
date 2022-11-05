import Header from "../../componentes/header"
import { Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contato = () => {

    return (
        <>
            <Header />
            <Container>
      <Row>
        <Col>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Digite seu e-mail</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Digite sua dúvida</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
            <p>Não significa que vamos responder</p>
            <div>
                <Button type="submit" className="btn-register">Enviar</Button>
            </div>
            </Col>
      </Row>
    </Container>

        </>
    )
}

export default Contato
