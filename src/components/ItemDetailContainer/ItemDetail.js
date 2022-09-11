import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../ItemListContainer/ItemCount/ItemCount';


const ItemDetail = ({ item }) => {

  const onAdd = () => {
    console.log('Funcion onAdd');
  }
  
    return (
    <Container >
        <Row>
                     
            <Col xs={6} className='mt-3'>  <img src={item.img} style={{ width: '20rem' }}></img> </Col>
            
            <Col xs={6} className='mt-3'> 
              
              <h3> {item.title}</h3>
              <h3>{item.description}</h3>
              <h3>$ {item.price}</h3>      
              
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd}  />

            

              
            </Col>
        </Row>
    </Container>
  )
}

export default ItemDetail;