import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ title = 'Aleatoria',
    description='asd',
    price= 300,
    stock= 10,
    category= 'Monos NFT',    
    img= 'imagenes/monos.jpg'
    }) => { 
    

    const onAdd = () => {
        console.log('Funcion onAdd');
    }

   

  return (
    <div>
            <Card style={{ width: '16rem' }} className="m-5" >
                <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    <p>$ {price}</p> 
                    <p>{category}</p>
                    
                </Card.Text>
                    
            </Card.Body>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
                
            </Card>


    </div>
  )
}

export default Item;