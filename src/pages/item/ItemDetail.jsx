import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ItemDetail({shoes}) {
  let navigate = useNavigate()
  const { id } = useParams("id")

  if(shoes[id] === undefined){
    return <div>없는 페이지 입니다.</div>
  }

  return (
    <div className="container text-center">
        <div className="row">
            <div className="col-md-6">
                <img src={`https://codingapple1.github.io/shop/shoes${ Number(id)+1 }.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{ shoes[id].title }</h4>
                <p>{ shoes[id].content }</p>
                <p>{ shoes[id].price }원</p>
                <button 
                  className="btn btn-danger"
                  style={{ marginRight:"10px" }}
                >
                  주문하기
                </button>
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
