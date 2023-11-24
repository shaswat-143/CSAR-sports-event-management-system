import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
      
            const response = await fetch("http://localhost:8079/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {

                const data = await response.json();
                console.log("Login successful!", data);

                window.location.href = "/user/dashboard";
            } else {

                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("An error occurred during login.");
        }
    };

    return (
        <Container className="mt-5" style={{ marginBottom: "286px" }}>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2 className="text-center mb-4">Login</h2>
                    {error && <p className="text-danger">{error}</p>}
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
