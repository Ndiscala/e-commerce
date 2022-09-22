import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDoc, doc, collection } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
  
    const { idProducto }= useParams ();

    

   useEffect(() => {
      const itemCollection = collection(db, "productos")
      const ref = doc(itemCollection, idProducto)
      getDoc(ref).then((res) => {
        setItem({
          id: res.id,
          ...res.data()
        })
      })
}, [idProducto]);
  return (
    <div>
            <ItemDetail item={item} />
            
    </div>
  )
}

export default ItemDetailContainer;