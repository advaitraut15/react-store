import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import { ListGroup } from "react-bootstrap"
import classes from './CartItems.module.css'

const CartItems = () => {
    const cartData = useSelector(state => state.cartReducer.cart)

    return (
        <div className={classes.cartItems}>
            <ListGroup>
                {
                    cartData.map(item => {
                        return (
                            <ListGroup.Item>
                                <CartItem item={item} key={item.id} />
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>

    )
}

export default CartItems