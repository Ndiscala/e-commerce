import { productos } from '../../mock/productos'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList/ItemList";
import BounceLoader from "react-spinners/BounceLoader";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { categoryName } = useParams()
    // categoryName --> 

    useEffect(() => {
            const getProducts = () => 
            new Promise((res, rej) => {
                const prodFiltrados = productos.filter(
                    (prod) => prod.category === categoryName);
                setTimeout(() => {
                    res( categoryName ? prodFiltrados : productos)}
                    , 1000);
            });
    
            getProducts()
                .then((data) => {
                    setItems(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    //console.log(error);
                })
                
                return () => {
                    setIsLoading(true);
                };
        
    }, [categoryName]);


    return (
        <div>
            { isLoading ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                        <BounceLoader color="silver"  size={80} />
                </div>

            ) : (
                <>
                    <ItemList items={items}   />
                </>
            )}
        </div>
    );
};

    




export default ItemListContainer;

