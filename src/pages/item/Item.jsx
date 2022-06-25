import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';

export default function Item({shoes}) {
    let navigate = useNavigate()
    let [lists, setList] = useState(shoes) 
    let [dataNum, setDataNum] = useState(2)

    return (
        <div>
            <Container className="text-center">
                <Row>
                
                {lists.map((item,) => (
                    <Col sm 
                        key={item.id} 
                        onClick={()=>{
                            navigate(`/detail/${item.id}`) 
                        }}
                    >
                        <img 
                            src={`https://codingapple1.github.io/shop/shoes${ Number(item.id)+1 }.jpg`}
                            width={"80%"}
                        />
                        <h4>{ item.title }</h4>
                        <p>{ item.price } 원</p>
                    </Col>
                ))}
                </Row>
            </Container>
            {
                dataNum < 4 &&
                <button onClick={()=>{
                    axios.get(`https://codingapple1.github.io/shop/data${dataNum}.json`)
                    .then(res => {
                        console.log(res.data);
                        // 배열을 합칠때 ... 은 [] 를 벗기는 용도? 사용
                        let newData = [...lists, ...res.data];
                        setList(newData)
                        setDataNum(dataNum + 1)
                    })
                    .catch(error => console.log(error))
                }}>가져오기</button>
            }

        </div>
    )
}
