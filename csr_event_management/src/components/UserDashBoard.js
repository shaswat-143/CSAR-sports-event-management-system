import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const AnimatedCard = animated(Card);

const UserDashBoard = () => {
  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <AnimatedCard style={cardAnimation} className="mb-4">
            <Card.Body>
              <Card.Title>Event 1</Card.Title>
              <Card.Text>Description of Event 1.</Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </AnimatedCard>
        </Col>
        <Col md={4}>
          <AnimatedCard style={cardAnimation} className="mb-4">
            <Card.Body>
              <Card.Title>Event 2</Card.Title>
              <Card.Text>Description of Event 2.</Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </AnimatedCard>
        </Col>
        <Col md={4}>
          <AnimatedCard style={cardAnimation} className="mb-4">
            <Card.Body>
              <Card.Title>Event 3</Card.Title>
              <Card.Text>Description of Event 3.</Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </AnimatedCard>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashBoard;
