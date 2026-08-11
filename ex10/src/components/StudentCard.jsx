import { Button, Card, Form } from 'react-bootstrap';

export default function StudentCard({ student }) {
  return (
    <Card className="student-card">
      <Card.Img variant="top" className="student-photo" src={student.image} alt={student.name} />
      <Card.Body className="student-card-body">
        <Card.Text className="student-id">{student.id}</Card.Text>
        <div className="student-meta">
          <div>
            <span>{student.name}</span>
            <Form.Check inline type="radio" name={`attendance-${student.id}`} label="Absent" value="absent" />
          </div>
          <div className="student-location">
            <span>{student.location}</span>
            <Form.Check inline type="radio" name={`attendance-${student.id}`} label="Present" value="present" />
          </div>
        </div>
        <Button className="student-submit" type="button">Submit</Button>
      </Card.Body>
    </Card>
  );
}
