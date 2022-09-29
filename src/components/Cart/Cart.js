import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';



const Cart = () => {

  const [idCompra, setIdCompra] = useState('');
  const {cart, clear, removeItem, totalPrice } = useContext(CartContext);

  const total = totalPrice();

  const handleId = (id) => {
    setIdCompra(id);
  }

  if(idCompra){
    return <div style={{display: 'flex',
                        marginTop: '30 px'}}>
                <h2 style={{
                display: 'flex',
                justifyContent: 'center',
                }}> 
                    Gracias por tu compra! tu id es: {idCompra}</h2>
            </div>
  }

  if(cart.length === 0) {
    return <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '70px'
                  }}>
              <h2 style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '50px'
              }}> Aún no tienes productos en el carrito.</h2>
              <Link to="/" style={{display: 'flex',
                                  justifyContent: 'center'}}>
                                  <Button type="button" className="btn button" >Ir al Inicio</Button></Link>
          
            </div>
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