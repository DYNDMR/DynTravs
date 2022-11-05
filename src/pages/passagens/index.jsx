import Header from "../../componentes/header"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Cards from "../../componentes/cards";

const Passagens = () => {

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Alert variant="primary">
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="ida e volta"
                                />
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="5" controlId="validationCustom01">
                                        <Form.Label>Origem</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Origem"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="5" controlId="validationCustom02">
                                        <Form.Label>Destino</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Destino"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                    <Form.Select  aria-label="Default select example">
                                        <option>Passageiros</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">+3</option>
                                    </Form.Select></Col>
                                    <Col xs={5}>
                                    <Form.Select aria-label="Default select example">
                                        <option>Classe</option>
                                        <option value="1">Economica</option>
                                        <option value="2">Prime</option>
                                        <option value="3">Pendurado na asa</option>
                                    </Form.Select>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        label="Aceito receber e-mails com promoções"
                                    />
                                </Form.Group>
                                <Button type="submit">Buscar</Button>
                            </Form>
                        </Alert>
                    </Col>
                </Row>
            </Container>
            {/* cards */}
            <Container>
                <Row>
                    <Col>
                        <Cards
                            img={"/imagens/botanical-garden-2168222_640.jpg"}
                            titulo={"Curitiba"}
                            texto={" Curitiba é a capital do estado do Paraná, na região sul do Brasil. A Torre Panorâmica, que tem um observatório em sua parte superior, destaca-se na silhueta da cidade. Conhecida como centro cultural, Curitiba abriga vários espaços para apresentações, como a Ópera de Arame, uma estrutura de aço tubular com telhado transparente, e o enorme Centro Cultural Teatro Guaíra, que apresenta uma programação variada."}
                            btn={<Button>Encontre sua passagem</Button>}
                        />
                    </Col>

                    <Col>
                        <Cards
                            img={"/imagens/99.jpg"}
                            titulo={"Jericoacoara"}
                            texto={" Visite Jijoca de Jericoacoara Jericoacoara é uma pequena vila de pescadores, meca de windsurf e kitesurf, no Ceará, no Brasil. Localizado a cerca de 300 km a oeste de Fortaleza. Jeri, como é melhor conhecido, é o tipo de lugar idílico onde muitos viajantes acabam decidindo ficar por mais tempo do que planejaram originalmente. Prepare seu bolso, pois qualquer almoço lá passa de 500 reais. Achei um absurdo!"}
                            btn={<Button>Encontre sua passagem</Button>}
                        />
                    </Col>

                    <Col>
                        <Cards
                            img={"/imagens/salvador-2379443_640.jpg"}
                            titulo={"Salvador"}
                            texto={"Salvador, a capital do estado da Bahia no nordeste do Brasil, é conhecida pela arquitetura colonial portuguesa, pela cultura afrobrasileira e pelo litoral tropical. O bairro do Pelourinho é seu coração histórico, com vielas de paralelepípedo terminando em praças grandes, prédios coloridos e igrejas barrocas, como São Francisco, com trabalhos em madeira revestidos com ouro."}
                            btn={<Button>Encontre sua passagem</Button>}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Passagens
