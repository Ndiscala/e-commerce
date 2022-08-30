import { productos } from '../../mock/productos'
import { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        const getProducts = new Promise((res, rej) => {
            setTimeout(() => res(productos), 2000)
        });

        getProducts
            .then((productos) => {
                setItems(productos);
            })
            .catch((error) => {
                //console.log(error);
            })

    }, []);

    

    return (
        <div>
            
            <ItemList items={items}  />
            
        </div>
    );
};

    




export default ItemListContainer;

