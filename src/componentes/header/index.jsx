import "./header.css"

import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {

    return (
        <div>
            <header>
                <Container fluid>
                    <Row>
                        <Col>
                            <img src="/imagens/pngwing.com.png" width="80px" ></img>
                        </Col>
                        <Col >
                            <Nav className="justify-content-end" activeKey="/home">

                                <Nav.Item>
                                    <Link className="link" to={"/login"} >
                                        Entrar
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="link" to={"/cadastro"} >
                                        Cadastrar
                                    </Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
                {/* NAVBAR */}
                <Navbar >
                    <Container fluid>

                        <Nav.Item className="box-link">
                            <Nav.Link as={Link} to="/passagens">
                               Home
                            </Nav.Link>
                        </Nav.Item>


                        <Nav.Item className="box-link">
                            <Nav.Link as={Link} to="/hoteis">
                                Hotéis
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="box-link">
                            <Nav.Link as={Link} to="/passagens">
                                Promoções
                            </Nav.Link>
                        </Nav.Item>
                        <Nav className="me-auto">
                            <Nav.Item className="box-link">
                                <Nav.Link as={Link} to="/contato">
                                    Contato
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>

            </header>


        </div>
    )
}
export default Header