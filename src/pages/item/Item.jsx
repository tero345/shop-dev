import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom'

export default function Item({shoes}) {
    let navigate = useNavigate()

    return (
        <div>
            <Container className="text-center">
                <Row>
                
                {shoes.map((item) => (
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
        </div>
    )
}
