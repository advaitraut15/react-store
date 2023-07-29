import SingleProduct from "./SingleProduct"
import classes from './Products.module.css'
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as productActions from '../store/actions/productsActions'

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(state=> state.productsReducer.products)
    const searchQuery = useSelector(state => state.productsReducer.searchQuery)
    const priceFilter = useSelector(state => state.productsReducer.priceFilter)

    useEffect(() => {
        let productsArr = []
        for (let i = 0; i < 10; i++) {
            const product = createRandomProduct()
            productsArr.push(product)
        }
        dispatch(productActions.setProducts(productsArr))
    }, [])


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    function createRandomProduct() {
        return {
            id: faker.database.mongodbObjectId(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.url(),
            rating: getRandomInt(5),
            isInCart: 0
        };
    }

    const displayProducts = () => {
        let productCopy = [...products]
        if(priceFilter){
            productCopy = productCopy.sort((a,b) => priceFilter === 'lowToHigh'? a.price - b.price : b.price - a.price )
        }
        if(searchQuery){
            productCopy = productCopy.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        return productCopy
    }
    
    return (
        <div className={classes.products}>
            {
                displayProducts().map(item => {
                    return <SingleProduct productData={item} />
                })
            }
        </div>
    )
}

export default Products