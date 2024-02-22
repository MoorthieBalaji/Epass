import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Badge ,Row,Col} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import clg from '../assets/kcelogo.webp';
import { Image,Table,Button} from 'react-bootstrap';
import { ImCancelCircle } from "react-icons/im";
import { TiTick } from "react-icons/ti";
function TutorH() {
  const [data, setStudentData] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:3002/Students");
            setStudentData(response.data);
        } catch (error) {
            console.error('Error fetching student data:', error);
        }
    }

    fetchData();
}, []);

  return (
    <div>
          <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={clg} alt="Description" fluid className="img" style={{ height: '80px' }} />
                    </Navbar.Brand>
                    <Badge bg="secondary">Date & Time</Badge> {/* Here you might need to replace Date & Time with your dynamic date and time */}
                </Container>
            </Navbar>
     <Row className='mt-3 mb-2'>
        <Col className='col-11 text-center'><h5>STUDENT LIST</h5></Col>
     </Row>
     <Row>
        <Col className='col-3'></Col>
      <Table responsive="sm">
        <thead >
          <tr className='bg-warning'>
            <th className='bg-warning'>S.NO</th>
            <th className='col-1 bg-warning'>NAME</th>
            <th className='bg-warning'>ROLL NO</th>
            <th className='bg-warning'>DEPARTMENT</th>
            <th className='bg-warning'>YEAR</th>
            <th className='bg-warning'>NO OF DAYS</th>
            <th className='bg-warning'>OUT DATE</th>
            <th className='bg-warning'>IN DATE</th>
            <th className='bg-warning'>REASON</th>
            <th className='bg-warning'>PLACE</th>
            <th  className='bg-warning' colSpan={2}>STATUS</th>
          </tr>
        </thead>
        <tbody> 
        {data.map((student,index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.department}</td>
              <td>{student.year}</td>
              <td>{student.numberOfDays}</td>
              <td>{student.outDate}</td>
              <td>{student.inDate}</td>
              <td>{student.roomNo}</td>
              <td>{student.reason}</td>
              <td>{student.place}</td>
              <td><Button className='bg-success'><TiTick /></Button></td>
              <td><Button className='bg-danger'><ImCancelCircle /></Button></td>

            </tr>
          ))}
          
        </tbody>
       </Table>
       </Row>
  
    </div>
  );
}

export default TutorH;

