import { Button, Form } from 'react-bootstrap'
import classes from './Options.module.css'
import Ratings from './Ratings'
import { useDispatch, useSelector } from 'react-redux'
import * as productActions from '../store/actions/productsActions'

const Options = () => {
    const dispatch = useDispatch()
    const sortby = useSelector(state => state.productsReducer.priceFilter)
    const ratingFilter = useSelector(state => state.productsReducer.ratingFilter)
    const searchQuery = useSelector(state => state.productsReducer.searchQuery)


    const clearRatingHandler = () => {
        dispatch(productActions.clearAllFilters())
    }

    return (
        <div className={classes.options}>
            <h2>Filtering Options</h2>
            <Form.Check
                type='radio'
                id={`default-radio1`}
                label='Price Low to High'
                name="group1"
                onChange={() => {
                    dispatch(productActions.changePriceFilter('lowToHigh'))
                }}
                checked={sortby === 'lowToHigh' ? true : false}
            />
            <Form.Check
                type='radio'
                id={`default-radio2`}
                label='Price High to Low'
                name="group1"
                onChange={() => {
                    dispatch(productActions.changePriceFilter('highToLow'))
                }}
                checked={sortby === 'highToLow' ? true : false}
            />

            <Ratings />

            {(sortby || ratingFilter || searchQuery) && <Button variant="warning" onClick={() => { clearRatingHandler() }}>Clear Filters</Button>}


        </div>
    )
}

export default Options