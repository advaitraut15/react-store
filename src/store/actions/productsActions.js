import * as actionTypes from './actionsType'

export const setProducts = (products) => {
    return {
        type:actionTypes.SET_PRODUCTS,
        products
    }
}

export const editProduct = (product) => {
    return{
        type:actionTypes.EDIT_PRODUCT,
        product
    }
}

export const removeProduct = (id) => {
    return {
        type: actionTypes.REMOVE_PRODUCT,
        id
    }
}

export const changePriceFilter = (order) => {
    return{
        type: actionTypes.CHANGE_PRICE_FILTER,
        priceFilter: order
    }
}

export const changeSearchInput = (payload) => {
    return{
        type:actionTypes.CHANGE_SEARCH_RESULT,
        payload
    }
}

export const clearAllFilters = () => {
    return {
        type:actionTypes.CLEAR_ALL_FILTER
    }
}