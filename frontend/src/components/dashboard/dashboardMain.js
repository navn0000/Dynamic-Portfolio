import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar/sidebar';
import './dashboardMain.css';

function DashboardMain() {
    const navigate = useNavigate()
    const handleLogout = () =>{
        localStorage.clear("access")
        if(!localStorage.getItem("access")){
            navigate("/admin-login")
        }

    }
    return (
      <Container fluid className='dashboard-outer'>
        <Row>
            <Col md={3}>
              <Sidebar />
            </Col>

            <Col md={9}>
            <Container>
                <Row>
                    <Col md={10}>
                    <h1>Welcome Naveenkumar !</h1>
                    </Col>
                    <Col md={2}>
                    <div className='text-end'>
                <Button className='logout-btn' onClick={handleLogout}>Logout</Button>
                </div>
                    </Col>
                </Row>
                
            </Container>
            </Col>
        </Row>
      </Container>
    );
}

export default DashboardMain;