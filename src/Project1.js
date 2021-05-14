import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './Project.css'
function Project1() {
    return (
        <div>
            <div>  
                <h2 className="title1" >Discover Jokester</h2>
                {/* <button className="title1">View All</button> */}
                <button className="title2">View All</button>
            </div>
           {/* </div> */}
       <div>
<Container>
  <Row>
    <Col xs={6} md={2} className="img1">
    <a href="#"> <Image src="Images/12.png" roundedCircle /></a> 
    </Col>
    <Col xs={6} md={2}>
    <a href="#"> <Image src="Images/13.png" roundedCircle /></a>
    </Col>
    <Col xs={6} md={2}>
    <a href="#"><Image src="Images/14.png" roundedCircle /></a>
    </Col>
    <Col xs={6} md={2}>
    <a href="#"> <Image src="Images/15.png" roundedCircle /></a>
    </Col>
    <Col xs={6} md={2}>
    <a href="#"> <Image src="Images/16.png" roundedCircle /></a>
    </Col>
    <Col xs={6} md={2}>
    <a href="#"> <Image src="Images/17.png" roundedCircle /></a>
    </Col>
  </Row>
</Container>
        </div>
        </div>
    )
}

export default Project1
