import React from "react";
import { useState, useEffect } from "react";
import { productos } from "../../mock/productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
  
    const { idProducto }= useParams ();

    

   useEffect(() => {
      const getProducts = () => 
        new Promise((res, rej) => {
          const productoUnico = productos.find((prod => prod.id === Number(idProducto)));
          setTimeout(() => {
            res(productoUnico)
          }, 500)
    });

    getProducts()
        .then((data) => {
            setItem(data);
        })
        .catch((error) => {
            console.log(error);
        })
}, []);
  return (
    <div>
            <ItemDetail item={item} />
            
    </div>
  )
}

export default ItemDetailContainer;