import { createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name: 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        // state, 파라미터
        plusCount(state, action){
            const { id, params } = action.payload
            const index = state.findIndex(a => a.id === id )
            
            //console.log(state[index].id);

            state[index].count += params
        },
        minusCount(state, action){
            const { id, params } = action.payload
            const index = state.findIndex(a => a.id === id )
            state[index].count -= params
        },
        addCart(state, action){
            state.push(action.payload)
        }
    }
})

export let { plusCount, minusCount, addCart } = cart.actions

export default cart
