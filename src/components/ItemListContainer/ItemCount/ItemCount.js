import React  from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function ItemCount ({ stock, initial, onAdd })  {
  const [count, setCount] = useState(initial);


  const sumar = () => {
    count < stock && setCount(count + 1);
  };  

  const restar = () =>{
    setCount(count - 1);
  }

  return (
    <div className='m-3'>
        <div>
                <Button onClick={sumar} variant="secondary" className='m-3'>+</Button>
                <Button onClick={restar} variant="secondary" >-</Button>
                <h5> Cantidad: {count} </h5>
        </div>
        <div className=''>
                
                <Button variant="outline-dark mt-3" onClick={() => onAdd(count)} >Agregar al carrito</Button>


        </div>
    </div>
  )
}

export default ItemCount