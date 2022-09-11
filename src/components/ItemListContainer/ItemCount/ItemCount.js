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
    <div className='m-3'>
        <div>
                <Button onClick={sumar} variant="secondary" className='m-3'>+</Button>
                <Button onClick={restar} variant="secondary" >-</Button>
                <h5> Cantidad: {count} </h5>
        </div>
        <div className=''>
                
                <Button variant="outline-dark mt-3" >Agregar al carrito</Button>


        </div>
    </div>
  )
}

export default ItemCount