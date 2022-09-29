import React, { createContext, useState, useEffect, useRef } from 'react';

export const CartContext = createContext()


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [unidades, setUnidades] = useState(0);
    const [total, setTotal] = useState(0)

    const countRendersRef = useRef(0)

 
 
    useEffect(() => {
        
        if(countRendersRef.current > 0 ) {
            let unidades = 0;
            let total = 0
            cart.forEach(prod => {
                unidades += prod.quantity
                total += prod.quantity * prod.price
            });
    
            setUnidades(unidades)
            setTotal(total)
        } else {
            console.log('primer render')
        }
        countRendersRef.current++
    }, [cart])


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

    //CANTIDAD DE PROD
    const totalQuantity = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad;
        });
        setUnidades(acumulador);
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

    

    // Eliminar producto

    const removeItem = (id) => {
        const carritoFiltrado = cart.filter((prod) => prod.id !== id);
        setCart(carritoFiltrado);
    };

    // Eliminando 1 solo producto a travez del ID - PENDIENTE

    //LIMPPIAR TODO EL CARRITO
    const clear = () => {
        setCart([]);
    };

    

    const totalQuantityWidget = () => {
        let acumulador = 0;
        cart.forEach((product) =>{
            acumulador += product.cantidad;
        });
        return acumulador;
    }

   

  return (
    <CartContext.Provider value={{ cart, addToCart, clear, removeItem, totalPrice, totalQuantityWidget }}>
                {children}
    </CartContext.Provider>
  )
}



export default CartProvider;
