import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from '../../db/data'

export default function Item() {
    let [shoes] = useState(data)

    return (
        <div>
            <Container className="text-center">
                <Row>
                
                {shoes.map((item, idx) => (
                    <Col sm key={item.id}>
                        <img 
                            src={`https://codingapple1.github.io/shop/shoes${ idx+1 }.jpg`}
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
