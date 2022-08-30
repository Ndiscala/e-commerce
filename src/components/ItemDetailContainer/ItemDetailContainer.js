import React from "react";
import { useState, useEffect } from "react";
import { productos } from "../../mock/productos";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [products, setProducts] = useState({});

  //  const unicoProd = productos.find((producto) => producto.id === 2);

   useEffect(() => {

    const getProducts = new Promise((res, rej) => {
        setTimeout(() => res(productos), 2000)
    });

    getProducts
        .then((productos) => {
            setProducts(productos);
        })
        .catch((error) => {
            //console.log(error);
        })

}, []);

   
    

  return (
    <div>
            <ItemDetail />
            
    </div>
  )
}

export default ItemDetailContainer;