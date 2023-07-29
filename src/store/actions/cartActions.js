import * as actionTypes from './actionsType.js'

export const addProductToCart = (ProductData) => {
    return {
        type: actionTypes.ADD_TO_CART,
        ProductData
    }
}

export const removeProductFromCart = (productID) => {
    return{
        type:actionTypes.REMOVE_FROM_CART,
        productID
    }
}