import React from "react";
import Item from "./Item";
import CardGroup from 'react-bootstrap/CardGroup';



const ItemList = ({ items }) => {
    

    return(
        
        <CardGroup>
            { items.map((item) => {
                return <Item key={item.id} item={item}/>;
            })}
        </CardGroup>    
        
    )
}

export default ItemList;