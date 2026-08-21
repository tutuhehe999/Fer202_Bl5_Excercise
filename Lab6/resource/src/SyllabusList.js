import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Row, Col, Form, Table } from 'react-bootstrap';
import axios from 'axios';

function SyllabusList() {
  const [subjects, setSubjects] = useState([]);
  const [searchBy, setSearchBy] = useState('code');
  const [keyword, setKeyword] = useState('');
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    axios.get('http://localhost:9000/subjects').then((res) => {
      setSubjects(res.data);
      setFilteredSubjects(res.data);
    });
  }, []);

  const handleSearch = () => {
    if (!keyword.trim()) {
      setFilteredSubjects(subjects);
      return;
    }
    const result = subjects.filter((s) =>
      s[searchBy].toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredSubjects(result);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>FPT Education Learning Materials Portal</Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <Navbar.Text className="me-3">
              Hello, {user.fullName} ({user.role})
            </Navbar.Text>
            <Button variant="outline-light" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h4>Syllabus Management</h4>

        <Row className="mb-3 align-items-end">
          <Col md={2}>
            <Form.Label>Search by:</Form.Label>
            <Form.Select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
              <option value="code">Code</option>
              <option value="name">Name</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Label>&nbsp;</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter keywords"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Form.Label>&nbsp;</Form.Label>
            <div>
              <Button variant="primary" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </Col>
        </Row>

        <h5>Subject List</h5>
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Curriculum</th>
              <th>Semester</th>
              <th>Credits</th>
              <th>Pre-requisites</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubjects.map((s) => (
              <tr key={s.id}>
                <td>
                  <span
                    style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                    onClick={() => navigate(`/subject/${s.id}`)}
                  >
                    {s.code}
                  </span>
                </td>
                <td>{s.name}</td>
                <td>{s.curriculum}</td>
                <td>{s.semester}</td>
                <td>{s.credits}</td>
                <td>{s.preRequisites.length > 0 ? s.preRequisites.join('; ') : 'None'}</td>
                <td>{s.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default SyllabusList;
