import { productos } from '../../mock/productos'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList/ItemList";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const { categoryName } = useParams()
    // categoryName --> 

    useEffect(() => {
            const getProducts = () => new Promise((res, rej) => {
                const prodFiltrados = productos.filter((prod) => prod.category === categoryName)
                setTimeout(() => res( categoryName ? prodFiltrados : productos), 500)
            });
    
            getProducts()
                .then((productos) => {
                    setItems(productos);
                })
                .catch((error) => {
                    //console.log(error);
                })
        
    }, [categoryName]);

    

    return (
        <div>
            
            <ItemList items={items}   />
            
        </div>
    );
};

    




export default ItemListContainer;

