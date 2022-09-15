import React, { createContext, useState } from 'react'


export const CartContext = createContext()



const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            addItem(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    //PRECIO TOTAL DEL CARRITO
    const totalPrice = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad * prod.price;
        });
        return acumulador;
    };
    
    const addItem = (item, cantidad) => {
        const carritoActualizado = cart.map((prod) => {
            if (prod.id === item.id) {
                const productoActualizado = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return productoActualizado;
            } else {
                return prod;
            }
        });
        setCart(carritoActualizado);
    };

    console.log(cart);

    // Eliminar producto

    const removeItem = (id) => {
        console.log(`eliminé producto ${id}`);
        //setCart(cart.filter((prod) => prod.id !== id));
        const carritoFiltrado = cart.filter((prod) => prod.id !== id);
        setCart(carritoFiltrado);
    };

    // Eliminando 1 solo producto a travez del ID - PENDIENTE

    //LIMPPIAR TODO EL CARRITO
    const clear = () => {
        setCart([]);
    };


  return (
    <CartContext.Provider value={{ cart, addToCart, clear, removeItem, totalPrice }}>
                {children}
    </CartContext.Provider>
  )
}



export default CartProvider;
