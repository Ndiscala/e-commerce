import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../ItemListContainer/ItemCount/ItemCount';





const ItemDetail = ({ item }) => {

  const [cantidad, setCantidad] = useState(0);

  const onAdd = (arg) => {
    setCantidad(arg);
  }
  
    return (
    <Container >
        <Row>
                     
            <Col xs={6} className='mt-3' >  <img src={item.img} style={{ width: '20rem' }}></img> </Col>
            
            <Col xs={6} className='mt-3'> 
              
              <h3> {item.title}</h3>
              <h3>{item.description}</h3>
              <h3>$ {item.price}</h3>      
              
             <ItemCount stock={item.stock} onAdd={onAdd} initial={1}/>

              {cantidad === 0 ? (
                   <h4>Cantidad: 0</h4>
                  )   : (
                    <h4>Cantidad: {cantidad}</h4>
                  )}

            

              
            </Col>
        </Row>
    </Container>
  )
}

export default ItemDetail;