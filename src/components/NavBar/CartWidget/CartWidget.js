import '../../../Styles/navBar.css';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const { totalQuantityWidget } = useContext(CartContext);

    return (
        <>
            <Button variant=''>
                <i className="bi bi-cart-plus fs-5 text-black"> </i>
            </Button>
            
                <span style={{color: 'black'}}>
                    { totalQuantityWidget () === 0 ? '' : totalQuantityWidget() }
                </span>
                
                
        </>
    )
}

export default CartWidget;