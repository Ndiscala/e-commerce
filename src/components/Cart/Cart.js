import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import Form from '../Form/Form';


const Cart = () => {

  const [idCompra, setIdCompra] = useState('');
  const {cart, clear, removeItem, totalPrice } = useContext(CartContext);

  const total = totalPrice();

  const handleId = (id) => {
    setIdCompra(id);
  }

  if(idCompra){
    return <h1>Gracias por tu compra!tu id es: {idCompra} </h1>
        
  }

  if(cart.length === 0) {
    return <h2> Aún no tienes productos en el carrito</h2>
  }

  return (
    <div>
         { cart.map((prod) => (
                <div key={prod.id} 
                      style={{
                        border: '2px solid #778899',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        padding: '20px',
                        margin: '20px',
                        backgroundColor: '#dcdcdc'
                    }} > 

                    <h4>{prod.title}</h4>
                    <h4>Cantidad: {prod.cantidad}</h4>
                    <h3>Precio  ${prod.price}.-</h3>
                    <Button onClick={() => removeItem(prod.id)} variant="outline-danger">Eliminar</Button>
                </div>  ))}
                <div style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        alignItems: "center",
                        padding: '10px',
                        margin: '30px',
                    }} >
                  <Button onClick={clear}  variant='dark' size="lg">Limpiar carrito</Button>
                  <h4 style={{margin: '20px'}}>Total: ${total}</h4>
                  <Form cart={cart} total={total} clear={clear} handleId={handleId}/>
                </div>
    </div>
  );
};


export default Cart;