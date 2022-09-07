import Button from 'react-bootstrap/Button';
import '../../../Styles/navBar.css';



const CartWidget = () => {
    return(
        <Button 
        variant='outline-light'>
              <i className="bi bi-cart-plus fs-5 text-black"></i>
        </Button>
    
    )
}

export default CartWidget;