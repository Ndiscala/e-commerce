// import { productos } from '../../mock/productos'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList/ItemList";
import BounceLoader from "react-spinners/BounceLoader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { categoryName } = useParams()
    // categoryName --> 

    useEffect(() => {
        const itemCollection = collection(db, "productos");
        const q = query(itemCollection, where("category","==", "NFT"  ))
        getDocs(itemCollection)
        .then((resp) =>{
            const products = resp.docs.map((prod) => {
                return {
                    id: prod.id,
                    ...prod.data()
                };
            });
            setItems(products);
        }) 
        .catch(() => {

        })
        .finally(() => {
            setIsLoading(false);
        })

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

// const getProducts = () => 
            // new Promise((res, rej) => {
            //     const prodFiltrados = productos.filter(
            //         (prod) => prod.category === categoryName);
            //     setTimeout(() => {
            //         res( categoryName ? prodFiltrados : productos)}
            //         , 1000);
            // });
    
            // getProducts()
            //     .then((data) => {
            //         setItems(data);
            //         setIsLoading(false);
            //     })
            //     .catch((error) => {
            //         //console.log(error);
            //     })
                
            //     return () => {
            //         setIsLoading(true);
            //     };