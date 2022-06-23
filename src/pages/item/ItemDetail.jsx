import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ItemDetail() {
  let navigate = useNavigate()

  return (
    <div className="container text-center">
        <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button>
                <p/>
                <button 
                  className="btn btn-danger" 
                  onClick={ () =>{ navigate('/') }}
                >
                  목록
                </button>  
            </div>
        </div>
    </div> 
  )
}
