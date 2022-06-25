import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';

export default function Cart() {
    // Redux store 가져오는 함수
    let goods = useSelector((state)=>{
        return state.cart
    })

    // 간단한 경우는 props 사용하는게 나을수도 있음

  return (
    <div>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {goods.map((val, idx)=>(
                    <tr key={val.id}>
                        <td>{ idx }</td>
                        <td>{ val.name }</td>
                        <td>{ val.count }</td>
                        <td>
                            <Button variant="primary">수정</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table> 
    </div>
  )
}
