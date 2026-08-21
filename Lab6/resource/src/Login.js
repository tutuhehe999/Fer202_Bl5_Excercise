import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.get('http://localhost:9000/accounts');
      const account = res.data.find(
        (acc) => acc.email === email && acc.password === password
      );
      if (!account) {
        setError('Email hoặc mật khẩu không đúng');
        return;
      }
      if (account.status === 'Inactive') {
        setError('Tài khoản đã bị khóa');
        return;
      }
      localStorage.setItem('user', JSON.stringify(account));
      navigate('/syllabus');
    } catch (err) {
      setError('Lỗi kết nối server');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={5}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Sign In</Card.Title>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="email of student or lecture"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
