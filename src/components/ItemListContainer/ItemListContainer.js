import ItemCount from "./ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';


const ItemListContainer = () => {
    function onAdd(){
        console.log('Function onAdd');
      }

    return(

        <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="imagenes/nft.jpg" />
            <Card.Body>
                <Card.Title>Producto X</Card.Title>
                <Card.Text>
                XXXXXXXXXXX
                </Card.Text>
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </Card.Body>
        </Card>
            
        
    );
}

export default ItemListContainer;

