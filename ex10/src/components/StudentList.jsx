import { Col, Row } from 'react-bootstrap';
import StudentCard from './StudentCard';

export default function StudentList({ students }) {
  return (
    <section id="students" className="students-section">
      <h1>Students Detail</h1>
      <Row className="students-grid g-0">
        {students.map((student) => (
          <Col xs={12} md={6} key={student.id}>
            <StudentCard student={student} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
