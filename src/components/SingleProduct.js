import Card from 'react-bootstrap/Card';
import classes from './SingleProduct.module.css'
import { AiFillHeart, AiOutlineHeart, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Badge, Button, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../store/actions/cartActions.js'
import * as productsActions from '../store/actions/productsActions'
import RatingComp from './RatingComp';


const SingleProduct = ({ productData }) => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.productsReducer.products)
    const currentProduct = products.find(item => item.id === productData.id)
    const isInCart = currentProduct ? currentProduct.isInCart : 0

    const addTocartHandler = () => {
        const updatedProductData = {
            ...productData,
            isInCart: true
        }
        dispatch(cartActions.addProductToCart(updatedProductData))
        dispatch(productsActions.editProduct(productData))
    }

    const removeFromCartHandler = () => {
        dispatch(cartActions.removeProductFromCart(productData.id))
        dispatch(productsActions.removeProduct(productData.id))
    }

    return (
        <Card className={classes.card}>
            <Card.Img variant="top" src={productData.image} />
            <Card.Body className={classes.cardBody}>
                <div className={classes.nameAndWish}>
                    <Card.Title>{productData.name}</Card.Title>
                    <AiOutlineHeart />
                </div>

                <div className={classes.priceAndButton}>
                    <div>
                        <Card.Text className={classes.cardText}>
                            Rs {productData.price}
                        </Card.Text>
                        {/* <RatingComp rate={productData.rating}/> */}
                        <div>
                            {
                                [...Array(5)].map((_, j) => {
                                    return (j < productData.rating ? <AiFillStar color='#FFC300' /> : <AiOutlineStar color='#FFC300' />)
                                })
                            }
                        </div>

                    </div>
                    <div className={classes.addRemoveButtons}>
                        {isInCart > 0 && <h5><Badge bg="primary">{isInCart}</Badge></h5>}
                        <div>
                            {isInCart > 0 && <Button variant="primary" size="sm" className={classes.quantityButton} onClick={removeFromCartHandler}>Remove</Button>}
                            <Button variant="primary" size="sm" className={classes.quantityButton} onClick={addTocartHandler} >Add</Button>
                        </div>
                    </div>
                </div>


            </Card.Body>
        </Card>
    )
}

export default SingleProduct