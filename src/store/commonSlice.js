import { createSlice } from '@reduxjs/toolkit'

let common = createSlice({
    name: 'common',
    initialState : [
        { isShow : false }
    ],
    reducers : {
        modalShow(state, action){
            const { isShow } = action.payload
            state[0].show = isShow
        }
    }
})

export let { modalShow } = common.actions

export default common