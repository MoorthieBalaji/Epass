import React from 'react'
import { Image } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import clg from '../assets/kcelogo.webp';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Row,Col,Button} from 'react-bootstrap';
export const Student = () => {

const rollno = localStorage.getItem('rollno');
const password = localStorage.getItem('password');

// Use rollno and password here

    const check = (e)=>{
        e.preventDefault();
        nav("/checkStatus" , {state:{rollno,password}});
     }
  return (
    <>
   
     <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={clg} alt="Description" fluid className="img" style={{ height: '80px' }} />
                    </Navbar.Brand>
                    <Badge bg="secondary">Date & Time</Badge> {/* Here you might need to replace Date & Time with your dynamic date and time */}
                </Container>
            </Navbar>
            <div style={{marginTop:'200px',marginLeft:'300px',}}>
    <Container  >
      <Row className="justify-content-center">
        <Col xs={8} className='text-center'>
          <div style={{ border: '1px solid #ccc',borderTop:'45px solid #ff8830', padding: '50px',width:'500px'}}>
            {/* <h2 className="text-center mb-4">Leave Management</h2> */}
            <Button variant="success" className=" w-50 mb-3">
             <Link to='/StudentH'> Apply for Leave</Link>
            </Button>
            <Button  className="d-block w-50" style={{marginLeft:'100px'}}>
             <Link to='/CheckStatus'> Check Leave Status</Link>
            </Button>
            {/* {leaveStatus && <p className="mt-3">{leaveStatus}</p>} */}
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}
