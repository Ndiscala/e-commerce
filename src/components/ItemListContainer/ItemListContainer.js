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

        const referencia = categoryName
            ? query(itemCollection, where("category","==", categoryName  ))
            : itemCollection;
        getDocs(referencia)
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

