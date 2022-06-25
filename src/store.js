import { configureStore, createSlice } from '@reduxjs/toolkit'

// ? useState() 와 비슷
let user = createSlice({
    name : 'name',
    initialState : 'kim'
})

let goods = createSlice({
    name : 'goods',
    initialState : [10, 11, 12]
})

let myCart = createSlice({
    name: 'myCart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ]
})


export default configureStore({
  reducer: {
    // 선언을 해줘야 스토에서 사용 가능
    user : user.reducer,
    goods : goods.reducer,
    cart : myCart.reducer

   }
}) 