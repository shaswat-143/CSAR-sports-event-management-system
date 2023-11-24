import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import add from "./pngtree-vector-add-icon-png-image_1011209.jpg"
import update from "./update.jpg"
const AdminDashboard = () => {
  return (
    <Container className="mt-5" style={{marginBottom:"69px"}}>
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <Row>
        <Col md={6} lg={3}>
          <Card>
            <Card.Img variant="top" src={add} />
            <Card.Body>
              <Card.Title>Add Event</Card.Title>
              <Button variant="primary">Go to Add Event</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card>
            <Card.Img variant="top" src={update} />
            <Card.Body>
              <Card.Title>Update Event</Card.Title>
              <Button variant="primary">Go to Update Event</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwS0Q6g14Xd5POMRvS1WYTqA8EhtJUrT9r_w&usqp=CAU" />
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Button variant="primary">Go to Contact</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card>
            <Card.Img variant="top" src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-view-icon-png-image_855048.jpg" />
            <Card.Body>
              <Card.Title>View Event</Card.Title>
              <Button variant="primary">Go to View Event</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
