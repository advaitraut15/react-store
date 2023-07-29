import { useSelector } from 'react-redux'
import classes from './Bill.module.css'
import { Button } from 'react-bootstrap'

const Bill = () => {

    const totalCount = useSelector(state => state.cartReducer.numberOfProducts)
    const cart = useSelector(state => state.cartReducer.cart)

    const totalPrice = cart.reduce((acc, curr)=> {
        return(acc + +curr.price)
    }, 0)
    return (
        <div className={classes.bill}>
            <h2>Subtotal ({totalCount}) items</h2>
            <h4>Total: Rs {totalPrice}</h4>
            <Button variant="primary" className={classes.buttonBill}>Proceed to checkout</Button>
        </div>
    )
}

export default Bill