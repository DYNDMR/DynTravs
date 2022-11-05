import Card from 'react-bootstrap/Card';
import "./cards.css"
import Col from 'react-bootstrap/Col';




const Cards = ({ width, img, titulo, texto, info, preco, quarto, btn }) => {

  return (

    <Col className="box-cards">
      <Card style={{ width: '22rem' }} className="card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>
            {texto}
          </Card.Text>
          <Card.Text>
            {info}
          </Card.Text>
          <Card.Text>
            {preco}
          </Card.Text>
          <Card.Text>
          </Card.Text>
          {btn}
        </Card.Body>
      </Card>
    </Col>


  )


}
export default Cards;