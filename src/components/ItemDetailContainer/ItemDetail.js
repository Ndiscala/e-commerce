import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../ItemListContainer/ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';


const ItemDetail = ({ item }) => {

  const [cantidad, setCantidad] = useState(0);
  const { addToCart } = useContext(CartContext) 

  const onAdd = (cantidadItem) => {
    setCantidad(cantidadItem);
    addToCart(item, cantidadItem);
  }
  
    return (
    <Container >
        <Row>
                     
            <Col xs={6} className='mt-3' >  <img src={item.img} style={{ width: '20rem' }}></img> </Col>
            
            <Col xs={6} className='mt-3'> 
              
              <h3> {item.title}</h3>
              <h3>{item.description}</h3>
              <h3>$ {item.price}</h3>      
              
            

              {cantidad === 0 ? (
                   <ItemCount stock={item.stock} onAdd={onAdd} initial={1}/>
                  )   : (
                    <Link to="/cart"> 
                    <Button type="button" className="btn button" >Ir al carrito</Button>
                    </Link>
                  )}

            

              
            </Col>
        </Row>
    </Container>
  )
}

export default ItemDetail;