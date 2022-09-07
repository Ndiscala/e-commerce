import React  from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';


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
                <Button onClick={sumar} variant="outline-dark"  >+</Button>
                <Button onClick={restar} variant="outline-dark" >-</Button>
                <p> Cantidad: {count} </p>
        </div>
        <div className=''>
                <Link to="/detail/${item.id}">
                    <Button variant="outline-dark" >Ver detalles</Button>
                </Link>

        </div>
    </div>
  )
}

export default ItemCount