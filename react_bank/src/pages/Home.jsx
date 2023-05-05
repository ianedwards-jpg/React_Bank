import React from 'react'
import './css/Home.css'
// import background from "../assets/images/dark_grey_background_asphalt.jpg";


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'


const Home = () => {
  return (
    <>
      <div className='container-home'>
        <div className='login-home-left col-6'>
          <h1>A demonstration banking application written with MongoDB, Express.js, Node.js, React.js, and more!</h1>
        </div>
          <div className='login-home-right col-6'>
            <div className='login-home-container'>
              <h1>User Login</h1>
              <Form className='login-home-form'>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control placeholder="user@example.com" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
              <Button className="loginButton" variant="primary">Log In</Button>{' '}
            </Form>
            </div>
        </div>
      </div>
    </>
    
  )
}

export default Home