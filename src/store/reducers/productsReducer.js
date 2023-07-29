import * as actionTypes from '../actions/actionsType'

const initialState = {
    products: [],
    priceFilter: '',
    ratingFilter: 0,
    searchQuery: ''
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_PRODUCT:
            const updatedProducts = state.products.map(item => {
                if (item.id !== action.product.id) {
                    return item
                } else {
                    return {
                        ...item,
                        isInCart: item.isInCart + 1
                    }
                }
            })
            return {
                ...state,
                products: updatedProducts
            }
        case actionTypes.REMOVE_PRODUCT:
            const updatedRemProducts = state.products.map(item => {
                if (item.id !== action.id) {
                    return item
                } else {
                    return {
                        ...item,
                        isInCart: item.isInCart - 1
                    }
                }
            })
            return {
                ...state,
                products: updatedRemProducts
            }
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: [
                    ...action.products
                ]
            }
        case actionTypes.CHANGE_PRICE_FILTER:
            return {
                ...state,
                priceFilter: action.priceFilter
            }
        case actionTypes.CHANGE_SEARCH_RESULT:
            return {
                ...state,
                searchQuery: action.payload
            }
        case actionTypes.CLEAR_ALL_FILTER:
            return{
                ...state,
                priceFilter:'',
                ratingFilter:0,
                searchQuery: ''
            }
        default:
            return state
    }
}

export default productsReducer