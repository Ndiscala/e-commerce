import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemDetail = () => {
  return (
    <Container>
        <Row>
            <Col xs={6}> <img src='imagenes/nft.jpg' style={{ width: '16rem' }} /> </Col>
            
            <Col xs={6}> 
                <h2>Nombre</h2>
                
                <p>Descripcion</p>

                <h2>Precio</h2>
            </Col>
        </Row>
    </Container>
  )
}

export default ItemDetail;