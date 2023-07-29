import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import classes from './Header.module.css'
import { AiFillDelete, AiOutlineShoppingCart } from 'react-icons/ai';
import { Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../store/actions/cartActions'
import * as productsActions from '../store/actions/productsActions'

const Header = () => {
	const numberOfProd = useSelector(state => state.cartReducer.numberOfProducts)
	const cartData = useSelector(state => state.cartReducer.cart)
	const searchQuery = useSelector(state => state.productsReducer.searchQuery)
	const dispatch = useDispatch()

	const removeCartHandler = (item) => {
		dispatch(cartActions.removeProductFromCart(item.id))
		dispatch(productsActions.removeProduct(item.id))
	}

	const searchChangeHandler = (payload) => {
		dispatch(productsActions.changeSearchInput(payload))
	}

	return (
		<div className={classes.headercontainer}>
			<div className={classes.logo}>
				<Link to='/'><h1>EZStore</h1></Link>
			</div>
			<div className={classes.headerright}>
				<input placeholder='looking for something...'
					className={classes.searchnav}
					onChange={(e) => { searchChangeHandler(e.target.value) }}
					value={searchQuery}></input>
				<Dropdown>
					<Dropdown.Toggle id="dropdown-basic">
						<AiOutlineShoppingCart color='white' />
						<Badge>{numberOfProd}</Badge>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{
							cartData.length ? (
								<div>
									{cartData.map(item => {
										return (
											<div className={classes.cartItem}>
												<img
													src={item.image}
													alt={item.name}
													className={classes.cartItemImage}
												/>
												<div className={classes.cartItemDetails}>
													<p>{item.name}</p>
													<p>{item.price}</p>
												</div>
												<AiFillDelete color='black' className={classes.cartItemDel} onClick={() => { removeCartHandler(item) }} />


											</div>
										)
									})}
									<Link to='/cart'>
										<div className={classes.buttonDropdown}>
											<Button variant="primary" className={classes.buttonDrop}>Go to Cart</Button>
										</div>
									</Link>


								</div>
							) : (
								<span>your cart is empty</span>
							)
						}


						{/* <span>your cart is empty</span> */}
						{/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	)
}

export default Header