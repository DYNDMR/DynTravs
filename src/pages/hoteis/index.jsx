import Header from "../../componentes/header"
import { Container, Button, Col, CardGroup, Row } from "react-bootstrap";
import Cards from "../../componentes/cards";

const Hoteis = () => {

    return (
        <>
            <Header />
            {/* cards */}
            <Container>
                <Row>
                    <Col>
                        <Cards
                            img={"/imagens/curitibaHotel.jpg"}
                            titulo={"Master Curitiba Hotel"}
                            texto={" O Master Express Curitiba está localizado no centro de Curitiba, a 550 metros do Teatro Guaíra e a 15 km do Aeroporto Internacional Afonso Pena. Oferece serviço de quarto, estacionamento, acomodações modernas, academia, restaurante e business center. Os quartos espaçosos possuem ar-condicionado, piso de madeira, TV a cabo, Wi-Fi e banheiro privativo com chuveiro. "}
                            btn={<Button>Reservar</Button>}
                        />
                    </Col>

                    <Col>
                        <Cards
                            img={"/imagens/hotelJeri.jpg"}
                            titulo={"Mini Hotel Dunas"}
                            texto={" O Mini Hotel Dunas está situado na badalada Jericoacoara, a 800 metros da Duna do Pôr do Sol. A propriedade está localizada a 814 metros do centro de Jericoacoara e a 2 km da Pedra Furada. Para sua comodidade, o Wi-Fi gratuito está disponível. Os quartos com decoração simples do Mini Hotel Dunas oferecem frigobar, TV de tela plana, amenidades de banho de cortesia e banheiro privativo."}
                            btn={<Button>Reservar</Button>}
                        />
                    </Col>

                    <Col>
                        <Cards
                            img={"/imagens/hotelSalvador.jpg"}
                            titulo={"Rede Andrade Riviera"}
                            texto={"Visite o Maurilio, Esta acomodação fica a 3 minutos a pé da praia. Convenientemente situado no bairro de Amaralina, em Salvador, o Rede Andrade Riviera Premium está localizado a 2,7 km da Praia Pituba, a 5 km do Shopping Iguatemi e a 6 km da Estação Rodoviária Central. A propriedade está situada a 7 km do Farol da Barra, a 7 km do Salvador Shopping e a 8 km da Praia da Barra."}
                            btn={<Button>Reservar</Button>}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Hoteis
