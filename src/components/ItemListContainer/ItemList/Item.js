import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../../Styles/Item.css';

const Item = ({ item  }) => { 

  return (
    <div >
        <Card style={{ width: '16rem' }} className="card m-4" >
            
                <Card.Img variant="top" src={item.img} className='card-img' />
            
                <Card.Body>
                <Card.Title>
                    <p>{item.title}</p>
                    
                </Card.Title>
                    <Card.Text>
                    <p>$ {item.price}</p> 
                    <p>#{item.category}</p>

                    <Link to={`/detail/${item.id}`}>
                    <Button variant="outline-light" >Ver detalles</Button>
                    </Link>
                    
                    </Card.Text>       
                </Card.Body>
            
        </Card>


    </div>
  )
}

export default Item;