import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5001/api/admin/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => res.json()).then(data => {
      localStorage.setItem('access', data.accessToken);
      if(data?.accessToken){
        navigate("/dashboard")
      } else {
        navigate("/")
        console.log("failed")
      }
    })

  }
  return (
    <div>
      <Container>
        <div className='d-flex justify-content-center mt-5 p-5'>
        <Card style={{ width: '24rem' }}>
          <Card.Body className='p-5'>
            <Form onSubmit={loginHandler}>
            <Form.Text className="text-muted text-center mb-5">
                  Welcome Naveen! login and use your dashboard
                </Form.Text>
              <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
              
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}  />
               
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
        </div>
      </Container>

    </div>
  )
}

export default Login
