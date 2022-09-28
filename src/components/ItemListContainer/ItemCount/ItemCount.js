import React  from 'react';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';


function ItemCount ({ stock, onAdd, initial = 1 })  {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  const sumar = () => {
    count < stock && setCount(count + 1);
  };  

  const restar = () =>{
    if (count > initial) {
          setCount(count - 1);
      } else {
          console.log('Minimo stock');
      }
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