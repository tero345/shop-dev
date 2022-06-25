import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'
import { addCart } from '../../store/cartSlice'
import { useDispatch } from 'react-redux';

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
  let [tabContentNum, setTabContentNum] = useState(0)
  let dispatch = useDispatch()
  

  //hook(갈고리) mount, update 시 코드 실행
  useEffect(() => {
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
  const index = shoes.findIndex(a => a.id === Number(id) )

  if(shoes[index] === undefined){
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
                <h4 className="pt-5">{ shoes[index].title }</h4>
                <p>{ shoes[index].content }</p>
                <p>{ shoes[index].price }원</p>
                <button 
                  className="btn btn-danger"
                  style={{ marginRight:"10px" }}
                  onClick={()=> {
                    dispatch(addCart({
                      id: shoes[index].id,
                      name : shoes[index].title,
                      count : 1
                    }))
                    navigate('/cart')
                  }}
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
        <p/>
        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link 
              eventKey="link0"
              onClick={()=>{setTabContentNum(0)}}
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              eventKey="link1" 
                onClick={()=>{setTabContentNum(1)}}
              >
                버튼1
              </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              eventKey="link2" 
              onClick={()=>{setTabContentNum(2)}}
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tabContentNum={tabContentNum}/>
    </div>
  )
}

function TabContent({tabContentNum}) {
  let [fade, setFade] = useState('')
  // 변경시 class명 추가
  // automatc batching 기능때문에 딜레이를 줘야함
  useEffect(()=>{
    let a = setTimeout(() => {
      setFade('end')
    }, 300);
    
    return ()=>{
      setFade('')
    }
  },[tabContentNum])
  return (
    <div className={`start ${fade}`}>
    {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tabContentNum]}
    </div>
  )
}
