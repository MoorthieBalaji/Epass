import React, { useState ,useEffect} from 'react';
import {Image,Col,Row} from 'react-bootstrap';
import clg from '../assets/kcelogo.webp';
import { FaUserCircle } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './StudentL.css';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios'; // Import axios for making HTTP requests

function TutorL() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [staffid, setStaffId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleChangeStaffId = (e) => {
    setStaffId(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Staff ID:", staffid);
    console.log("Password:", password);

    try {
        const response = await axios.post('http://localhost:3002/TutorLogin', {
            staffId: staffid, // Change to staffId
            password: password
        });
        console.log(response.data);

        // Clear the input fields after successful submission
        setStaffId('');
        setPassword('');
    } catch (err) {
        console.log('Error in posting Tutor details', err);
        // Handle error, show error message to the user, etc.
    }
};


  return (
    <>
      <div style={{backgroundColor:'light-grey', height:'100vh'}}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home"><Image src={clg} alt="Description" fluid className='img' style={{height:'80px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Badge bg="secondary">{formatDate(currentDateTime)}, {currentDateTime.toLocaleTimeString()}</Badge>
          </Container>
        </Navbar>
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
          <div className="border p-4" style={{ maxWidth: '400px', width: '100%'}}>
            <Row>
              <Col className='col-12 text-center'><FaUserCircle size={50} /></Col>
            </Row>
            <form onSubmit={handleSubmit} className="">
              <Row className='mt-3'>
                <Col className='col-5 text-end'> <label>Staff ID:</label></Col>
                <Col className='col-6 text-start'> <input
                    type="text"
                    value={staffid}
                    onChange={handleChangeStaffId}
                    required
                  /></Col>
              </Row>
              <Row className='mt-3'>
                <Col className='col-5 text-end'> <label>Password:</label></Col>
                <Col className='col-6 text-start'> <input
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                    required
                  /></Col>
              </Row>
              <Row className='mt-3'>
                <Col className='col-12 text-center '> <button type="submit">Login</button></Col>
              </Row>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}

export default TutorL;