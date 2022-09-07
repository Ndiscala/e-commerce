import React from "react";
import Item from "./Item";
import CardGroup from 'react-bootstrap/CardGroup';



const ItemList = ({ items }) => {
    

    return(
        // <div className="container">
        <CardGroup>
            { items.map((item) => <Item 
                    key={item.id}
                    img={item.img} 
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    category={item.category}  
                    /> )}
        </CardGroup>    
        // </div>
    )
}

export default ItemList;