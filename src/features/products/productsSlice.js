import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    favourites: [],
    cartProducts: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProducts: (state, {payload}) => {
            state.products = payload
        },
        addOrRemoveFavourite: (state, {payload}) => {
            if(state.favourites.find(p => p.id === payload )){
                state.favourites = state.favourites.filter(p => p.id !== payload)
                state.products.find(p => p.id === payload).favourite = false
            } else {
                state.favourites.push(state.products.find(p => p.id === payload))
                state.products.find(p => p.id === payload).favourite = true
            }
        },
        addCart: (state, {payload}) => {
            if(!state.cartProducts.find(p => p.id === payload)){
                state.cartProducts.push(
                    state.products.find(p => p.id === payload)
                )
            }
        },
        removeCart: (state, {payload}) => {
            state.cartProducts = state.cartProducts.filter(p => p.id !== payload)
        }
    },

})

export const { getAllProducts, addOrRemoveFavourite, addCart, removeCart } = productsSlice.actions
export default productsSlice.reducer