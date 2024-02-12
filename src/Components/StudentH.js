import React, { useState ,useEffect} from 'react'
import {Image} from 'react-bootstrap'
import clg from '../assets/kcelogo.webp'
import '../Components/StudentL.css'
import { FaUserCircle } from 'react-icons/fa';
import { Form,Card, Button,Row,Col } from 'react-bootstrap';
//import { FaUserCircle } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import {Link} from 'react-router-dom';
import './StudentL.css';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
function StudentH() {
  const [formData, setFormData] = useState({
    name: '',
    rollNo:'',
    department: '',
    year: '',
    numberOfDays: '',
    outDate: '',
    inDate: '',
    roomNo:'',
    reason: '',
    purpose: '',
    place: ''
  });
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to backend or process it further
    console.log(formData);
  };
  
  
  return (
    <>
      <div style={{backgroundColor:'light-grey' ,height:'100%'}}>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><Image src={clg} alt="Description" fluid className='img' style={{height:'80px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
        <Badge  bg="secondary"> {formatDate(currentDateTime)}, {currentDateTime.toLocaleTimeString()}</Badge>
      </Container>
      </Navbar>
      <Row></Row>
      <Row className='mt-5 mb-5'>
        <Col className='col-4'></Col>
        <Col className='col-4 '>
      <Card style={{width:'550px'}}>
      <Card.Body>
       
        <Form onSubmit={handleSubmit}>
        <Row>
        <Col className='col-12 text-center'>   <FaUserCircle size={50} /> </Col>
      </Row>
          <Row className='mt-4'>
          <Col className='col-1'></Col>
          <Col className='col-8'>
         <Form.Group controlId="formName" className="w-100" style={{display:'flex'}}>
          <Col className='col-5'><Form.Label>Name:</Form.Label></Col>
           <Col className='col-7'>
            <Form.Control type="text" name="name"  value={formData.name} onChange={handleChange} /></Col>
          </Form.Group>
         </Col>
         </Row>
         <Row  className='mt-1'>
          <Col className='col-1'></Col>
          <Col className='col-8'>
         <Form.Group controlId="formName" className="w-100" style={{display:'flex'}}>
          <Col className='col-5'><Form.Label>RollNo:</Form.Label></Col>
           <Col className='col-7'>
            <Form.Control type="text" name="name"  value={formData.rollNo} onChange={handleChange} /></Col>
          </Form.Group>
         </Col>
         </Row>
         {/* <Row className='mt-1'>
         <Col className='col-1'></Col>
         <Col className='col-8'>
          <Form.Group controlId="formDepartment" className="w-100"  style={{display:'flex'}}>
          <Col className='col-5'><Form.Label>Department:</Form.Label></Col>
          <Col className='col-7'> <Form.Control type="text" name="department" value={formData.department} onChange={handleChange} /></Col>
          </Form.Group >
          </Col>
          </Row> */}
            <Row className="mt-1">
            <Col className='col-1'></Col>
            <Col className='col-8'>
            <Form.Group as={Col} style={{display:'flex'}}>
            <Col className='col-5'>  <Form.Label>Year:</Form.Label></Col>
            <Col className='col-7'>
                <Form.Check
                  inline
                  label="1"
                  type="radio"
                  id="1"
                  name="1"
                  value="1"
                  checked={formData.year === "1"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="2"
                  type="radio"
                  id="2"
                  name="2"
                  value="2"
                  checked={formData.year === "2"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="3"
                  type="radio"
                  id="3"
                  name="3"
                  value="3"
                  checked={formData.year === "3"}
                  onChange={handleChange}
                />
                  <Form.Check
                  inline
                  label="4"
                  type="radio"
                  id="4"
                  name="4"
                  value="4"
                  checked={formData.year === "4"}
                  onChange={handleChange}
                />
             </Col>
            </Form.Group>
            </Col>
            </Row>
            <Row className="mt-1" >
            <Col className='col-1'></Col>
            <Col className='col-8'>
            <Form.Group as={Col} controlId="formDepartment"  style={{display:'flex'}}>
            <Col className='col-5'> <Form.Label>Department:</Form.Label></Col>
            <Col className='col-7'> <Form.Control as="select" name="department" value={formData.department} onChange={handleChange}>
                <option value="">Select Department</option>
                <option value="cse">CSE</option>
                <option value="IT">IT</option>
                <option value="EXE">ECE</option>
                {/* Add more options as needed */}
              </Form.Control></Col>
            </Form.Group>
            </Col>
          </Row>
          {/* </Row>
          <Row className='mt-1' >
          <Col className='col-1'></Col>
          <Col className='col-8'>
          <Form.Group controlId="formYear" className=" w-100" style={{display:'flex'}}>
          <Col className='col-5'> <Form.Label>Year:</Form.Label></Col>
          <Col className='col-7'> <Form.Control type="text" name="year" value={formData.year} onChange={handleChange} /></Col>
          </Form.Group>
          </Col>
          </Row> */}
          <Row  className='mt-1'>
          <Col className='col-1'></Col>
          <Col className='col-8'>
          <Form.Group controlId="formNumberOfDays" className="w-100"  style={{display:'flex'}}>
          <Col className='col-5'>  <Form.Label>Number of Days<br/>Leave Required:</Form.Label></Col>
          <Col className='col-7 mt-2'> <Form.Control type="number" name="numberOfDays" value={formData.numberOfDays} onChange={handleChange} /></Col> 
          </Form.Group>
          </Col>
          </Row>
          <Row className='mt-1' >
          <Col className='col-1'></Col>
          <Col className='col-8'>
          <Form.Group controlId="formOutDate" className="w-100" style={{display:'flex'}}>
          <Col className='col-5'> <Form.Label>Out Date:</Form.Label></Col>
          <Col className='col-7 mt-1'><Form.Control type="date" name="outDate" value={formData.outDate} onChange={handleChange} /></Col>
          </Form.Group>
          </Col>
          </Row>
          <Row className='mt-1' >
          <Col className='col-1'></Col>
          <Col className='col-8'>
           <Form.Group controlId="formInDate" className="w-100" style={{display:'flex'}}>
           <Col className='col-5'>  <Form.Label>In Date:</Form.Label></Col>
           <Col className='col-7 mt-1'><Form.Control type="date" name="inDate" value={formData.inDate} onChange={handleChange} /></Col>
          </Form.Group>
          </Col>
          </Row>
          <Row  className='mt-1'>
          <Col className='col-1'></Col>
          <Col className='col-8'>
         <Form.Group controlId="formName" className="w-100" style={{display:'flex'}}>
          <Col className='col-5'><Form.Label>RoomNo:</Form.Label></Col>
           <Col className='col-7'>
            <Form.Control type="text" name="name"  value={formData.roomNo} onChange={handleChange} /></Col>
          </Form.Group>
         </Col>
         </Row>
          <Row  className='mt-1' >
          <Col className='col-1'></Col>
          <Col className='col-8'>
          <Form.Group controlId="formReason" className=" w-100" style={{display:'flex'}}>
          <Col className='col-5'> <Form.Label>Reason:</Form.Label></Col>
          <Col className='col-7 mt-1'> <Form.Control as="textarea" rows={3} name="reason" value={formData.reason} onChange={handleChange} /></Col>
          </Form.Group>
          </Col>
          </Row>
        
          <Row  className='mt-1' >
          <Col className='col-1'></Col>
          <Col className='col-8'>
          <Form.Group controlId="formPlace" className="w-100" style={{display:'flex'}}>
          <Col className='col-5'> <Form.Label>Place:</Form.Label></Col>
          <Col className='col-7 mt-1'>  <Form.Control type="text" name="place" value={formData.place} onChange={handleChange} /></Col>
          </Form.Group>
          </Col>
          </Row>
          <Row className='mt-2'>
          <Col className='col-5'></Col>
          <Col className='col-7  '>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Col>
        
          </Row>
        </Form>
      </Card.Body>
    </Card>
    </Col> 
    </Row>
  

   
     
     
      </div>
    
    </>
  
  )
  }

export default StudentH