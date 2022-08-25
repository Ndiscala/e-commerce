import React  from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function ItemCount ({ stock, initial, onAdd })  {
  const [count, setCount] = useState(1);


  const sumar = () =>{
    (count < 10) ? setCount(count + 1) : console.log('stock maximo');
  }  

  const restar = () =>{
    (count > 1) ? setCount(count - 1) : console.log('stock minimo permitido');
    
  }

  return (
    <div className=''>
        <div>
                <Button onClick={sumar} variant="success">+</Button>
                <Button onClick={restar} variant="warning">-</Button>
                <p> Count: {count} </p>
        </div>
        <div>
                <Button onClick={onAdd} variant="outline-dark">Agregar al carrito</Button>

        </div>
    </div>
  )
}

export default ItemCount