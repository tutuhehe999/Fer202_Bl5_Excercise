import { Badge, Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Main({
  courses,
  loading,
  search,
  semester,
  semesters,
  onSearchChange,
  onSemesterChange,
  onRefresh,
}) {
  const navigate = useNavigate();

  return (
    <>
      <Row className="g-2 align-items-end mb-3">
        <Col md ={8}>
          <p className="mb-1">Welcome back, Lecturer</p>
          <h1 className="h3 mb-4">My Courses</h1>
        </Col>
        <Col md={3}>
          <Form.Label htmlFor="semester-filter">Semester</Form.Label>
          <Form.Select
            id="semester-filter"
            value={semester}
            onChange={(event) => onSemesterChange(event.target.value)}
          >
            <option value="SPRING2026">SPRING2026</option>
            <option value="FALL2026">FALL2026</option>
            {semesters.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md="auto">
          <Button
            variant="outline-secondary"
            onClick={onRefresh}
            disabled={loading}
          >
            Refresh
          </Button>
        </Col>
      </Row>
      <Row className="g-2 align-items-end mb-3">
        <Col md={3}>
          <Form.Label htmlFor="course-search"></Form.Label>
          <Form.Control
            id="course-search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search coures ..."
          />
        </Col>

        <Col md ={6}></Col>

        <Col md={2}>
          <p className="text-muted">
            {courses.length} course{courses.length === 1 ? "" : "s"} 
          </p>
        </Col>
      </Row>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" role="status" />
        </div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-3">
          {courses.map((course) => (
            <Col key={course.id}>
              <Card className="h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <Badge bg="light" text="dark" className="border">
                      {course.badge || course.code}
                    </Badge>
                    <Badge bg="light" text="dark" className="border">
                      {course.category}
                    </Badge>
                  </div>
                  <Card.Subtitle className="mb-2 text-muted">
                    {course.code}
                  </Card.Subtitle>
                  <Card.Title>{course.nameEn}</Card.Title>
                  <Card.Text>{course.nameVi}</Card.Text>
                  <Button
                    className="mt-auto align-self-start"
                    variant="outline-secondary"
                    onClick={() => navigate(`/detail/${course.id}`)}
                  >
                    Get started
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {!loading && courses.length === 0 && (
        <p className="text-muted">No courses match the selected filter.</p>
      )}
    </>
  );
}

export default Main;
