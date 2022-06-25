import { createSlice } from '@reduxjs/toolkit'

// ? useState() 와 비슷
let user = createSlice({
    name : 'name',
    initialState : {name : 'kim', age : 20},
    
    // state 수정해주는 함수 만들기
    reducers : {
        changeName(state){
            console.log(state);
            // immer.js 기능
            state.name = 'park'
        }
    }
})

// export 하는법 
export let { changeName } = user.actions

export default user