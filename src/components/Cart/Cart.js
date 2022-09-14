import { Button } from 'bootstrap';
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const {cart, clear, removeItem, } = useContext(CartContext);

  return (
    <div>
         { cart.map((prod) => (
                <div key={prod.id} > 

                    <h3>{prod.title}</h3>
                    <h3>Cantidad: {prod.cantidad}</h3>
                    <h3>Precio${prod.price}.-</h3>
                    <Button onClick={() => removeItem(prod.id)}>Delete</Button>
                </div>  ))}

              <Button onClick={clear}>Clear Cart</Button>
              <h4>Total: ${total}</h4>
    </div>
  );
};


export default Cart;