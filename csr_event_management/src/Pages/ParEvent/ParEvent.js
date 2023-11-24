
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ParEvent = () => {
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [selectedCommonEvent, setSelectedCommonEvent] = useState('');
  const [interestedEvent, setInterestedEvent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setSubmitted(true);
  };

  return (
    <Container className="mt-5" style={{marginBottom:"146px"}}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center mb-4">Participate in Event</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formRegistrationNumber">
              <Form.Label>Registration Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your registration number"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCommonEvent">
              <Form.Label>Select a Common Event</Form.Label>
              <Form.Control
                as="select"
                value={selectedCommonEvent}
                onChange={(e) => setSelectedCommonEvent(e.target.value)}
                required
              >
                <option value="">Choose...</option>
                <option value="event1">Event 1</option>
                <option value="event2">Event 2</option>
                <option value="event3">Event 3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formInterestedEvent">
              <Form.Label>Are you interested in any specific event?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the event name"
                value={interestedEvent}
                onChange={(e) => setInterestedEvent(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Submit
            </Button>

            {submitted && <p className="mt-3 text-success">Form submitted successfully!</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ParEvent;
