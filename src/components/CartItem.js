import { Col, Image, Row } from 'react-bootstrap'
import classes from './CartItem.module.css'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import * as cartActions from '../store/actions/cartActions'
import * as productsActions from '../store/actions/productsActions'

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    
    const removeCartHandler = () => {
        dispatch(cartActions.removeProductFromCart(item.id))
        dispatch(productsActions.removeProduct(item.id))
    }

    return (
        <div className={classes.cartItem}>
            <div className={classes.cartItemDetails}>
                <Image src={item.image} rounded className={classes.cartItemImage} />
                <div>{item.name}</div>
                <div>Rs {item.price}</div>
            </div>

            <AiFillDelete color='black' className={classes.cartItemIcon} onClick={removeCartHandler} />
        </div>
    )
}

export default CartItem