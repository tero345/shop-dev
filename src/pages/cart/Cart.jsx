import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { changeName } from '../../store/userSlice';
import { plusCount, minusCount } from '../../store/cartSlice'

export default function Cart() {
    // Redux store 가져오는 함수
    let goods = useSelector((state)=>{
        return state.cart
    })


    // let state = useSelector((state)=>{
    //     return state
    // })

    //console.log(state.cart[0].count)

    // 간단한 경우는 props 사용하는게 나을수도 있음

    // store.js로 요청보내주는 함수
    let dispatch = useDispatch()

  return (
    <div>
        {}
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>수량변경</th>
                </tr>
            </thead>
            <tbody>
                {
                    goods.map((val, idx)=>(
                        <tr key={ val.id }>
                            <td>{ idx }</td>
                            <td>{ val.name }</td>
                            <td>{ val.count }</td>
                            <td>
                                <div className="mb-2">
                                    {/* <Button 
                                        variant="primary" 
                                        onClick={()=>{
                                            dispatch(changeName())
                                        }}
                                    >
                                        이름변경
                                    </Button> */}
                                    <Button 
                                        variant="primary"
                                        size="sm" 
                                        onClick={()=>{
                                            dispatch(plusCount({
                                                id: val.id,
                                                params : 1
                                            }))
                                        }}
                                    >
                                        +
                                    </Button>
                                    {' '}
                                    <Button 
                                        variant="secondary"
                                        size="sm" 
                                        onClick={()=>{
                                            dispatch(minusCount({
                                                id: val.id,
                                                params : 1
                                            }))
                                        }}
                                    >
                                        -
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table> 
    </div>
  )
}
