import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function SubjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [subject, setSubject] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:9000/subjects/${id}`).then((res) => {
      setSubject(res.data);
      setFormData(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    if (editing) {
      const dataToSave = {
        ...formData,
        semester: Number(formData.semester),
        credits: Number(formData.credits),
        preRequisites:
          typeof formData.preRequisites === 'string'
            ? formData.preRequisites.split(';').map((s) => s.trim()).filter(Boolean)
            : formData.preRequisites,
      };
      axios.put(`http://localhost:9000/subjects/${id}`, dataToSave).then(() => {
        setSubject(dataToSave);
        setEditing(false);
      });
    } else {
      setEditing(true);
    }
  };

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa môn học này?')) {
      axios.delete(`http://localhost:9000/subjects/${id}`).then(() => {
        navigate('/syllabus');
      });
    }
  };

  if (!subject) return <Container className="mt-4">Loading...</Container>;

  const preReqValue = editing
    ? typeof formData.preRequisites === 'string'
      ? formData.preRequisites
      : formData.preRequisites.join('; ')
    : subject.preRequisites.length > 0
    ? subject.preRequisites.join('; ')
    : '';

  return (
    <>
      <Card bg="dark" text="white" className="rounded-0">
        <Card.Body>
          <Card.Title>Subject Detail Management</Card.Title>
        </Card.Body>
      </Card>

      <Container className="mt-4">
        <Card>
          <Card.Body>
            <h5>Subject Information</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Code</Form.Label>
                <Form.Control
                  className="bg-light"
                  type="text"
                  name="code"
                  value={editing ? formData.code : subject.code}
                  onChange={handleChange}
                  readOnly={!editing}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="bg-light"
                  type="text"
                  name="name"
                  value={editing ? formData.name : subject.name}
                  onChange={handleChange}
                  readOnly={!editing}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Curriculum</Form.Label>
                <Form.Control
                  className="bg-light"
                  type="text"
                  name="curriculum"
                  value={editing ? formData.curriculum : subject.curriculum}
                  onChange={handleChange}
                  readOnly={!editing}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Semester</Form.Label>
                <Form.Control
                  className="bg-light"
                  type="number"
                  name="semester"
                  value={editing ? formData.semester : subject.semester}
                  onChange={handleChange}
                  readOnly={!editing}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Credits</Form.Label>
                <Form.Control
                  className="bg-light"
                  type="number"
                  name="credits"
                  value={editing ? formData.credits : subject.credits}
                  onChange={handleChange}
                  readOnly={!editing}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Pre-requisites (cách nhau bởi dấu phẩy)</Form.Label>
                <Form.Control
                  className="bg-light"
                  type="text"
                  name="preRequisites"
                  value={preReqValue}
                  onChange={handleChange}
                  readOnly={!editing}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  className="bg-light"
                  as="textarea"
                  rows={3}
                  name="description"
                  value={editing ? formData.description : subject.description}
                  onChange={handleChange}
                  readOnly={!editing}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Button variant="primary" onClick={handleEdit}>
                    {editing ? 'Save' : 'Edit'}
                  </Button>
                </Col>
                <Col className="text-end">
                  <Button variant="danger" onClick={handleDelete}>
                    Delete
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default SubjectDetail;
