import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemDetail = ({ item }) => {
  
    return (
    <Container>
        <Row>
                     
            <Col xs={6}>  <img src={item.img} style={{ width: '20rem' }}></img> </Col>
            
            <Col xs={6}> 
              <h3>{item.title}</h3>
              <h3>{item.description}</h3>
              <h3>$ {item.price}</h3>
              
            </Col>
        </Row>
    </Container>
  )
}

export default ItemDetail;