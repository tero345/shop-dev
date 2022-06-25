import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice'
import cart from './cartSlice'

let goods = createSlice({
    name : 'goods',
    initialState : [10, 11, 12]
})


export default configureStore({
  reducer: {
    // 선언을 해줘야 스토에서 사용 가능
    user : user.reducer,
    goods : goods.reducer,
    cart : cart.reducer

   }
}) 