import Button from 'react-bootstrap/Button';


const CartWidget = () => {
    return(
        <Button 
        variant='outline-light'
        style={{backgroundColor:'#5c7ca8', color:'white' }}
        >

                <i className="bi bi-cart3"/>
                
        </Button>
    )
}

export default CartWidget;