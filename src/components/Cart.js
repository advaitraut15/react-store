import Bill from "./Bill"
import CartItems from "./CartItems"
import classes from './Cart.module.css'

const Cart = () => {
    
    return (
        <div className={classes.CartHome}>
            <CartItems />
            <Bill/>
        </div>
    )
}

export default Cart