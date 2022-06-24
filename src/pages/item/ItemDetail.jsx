import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

// styled-components 적용
// 단점 : html의 구조가 길어지면 구분이 모호애짐,
// 스타일 재사용시 import 가능한데 css파일 쓰는거랑 차이점이 없음
let YellowBtn = styled.button`
  background : ${ props => props.bg};
  color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
  padding: 10px;
`

let BlackBox = styled.div`
  background : gray;
  color : black;
  padding: 10px;
` 

export default function ItemDetail({shoes}) {
  let [count, setCount] = useState(0)
  let [show, setShow] = useState(false)


  //hook(갈고리) mount, update 시 코드 실행
  useEffect(() => {
    console.log('실행')

    // 2초 후 해당 부분 숨기기
    setTimeout(() => {
      setShow(true)
    }, 2000);


    // useEffect 전에 실행됨 
    // return () => {
        //기존타이머 제거 코드
    // }

  }, [])

  let navigate = useNavigate()
  const { id } = useParams("id")

  if(shoes[id] === undefined){
    return <div>없는 페이지 입니다.</div>
  }

  return (
    <div className="container text-center">
        {count}
        {!show &&
          <BlackBox id="styledBox">
            <YellowBtn bg="orange" onClick={()=> {setCount(count + 1)}}>버튼</YellowBtn>
            <YellowBtn bg="blue">버튼</YellowBtn>
          </BlackBox>
        }
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
