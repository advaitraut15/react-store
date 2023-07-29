import * as actionTypes from '../actions/actionsType'

const initalState = {
    cart: [],
    numberOfProducts: 0
}

const cartReducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.ProductData],
                numberOfProducts: state.numberOfProducts + 1
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.productID),
                numberOfProducts: state.numberOfProducts - 1
            }
        default: return state
    }

}

export default cartReducer