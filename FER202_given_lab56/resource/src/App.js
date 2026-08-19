
import { useEffect, useMemo, useState } from 'react';
import { Alert, Breadcrumb, Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Left from './components/Left';
import Main from './components/Main';
import Right from './components/Right';

const API_URL = 'http://localhost:9000/courses';

const repairText = (value) => {
  if (typeof value !== 'string' || !/(Ã|Â|â|ã|á»)/.test(value)) return value;
  try {
    return new TextDecoder().decode(Uint8Array.from(value, (character) => character.charCodeAt(0)));
  } catch {
    return value;
  }
};

const parseSlotDate = (date) => {
  const [day, month, year] = date.split('/').map(Number);
  return new Date(year, month - 1, day);
};

const isPresentOrFuture = (slot) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return parseSlotDate(slot.date) >= today;
};

function CourseDetail({ courses, loading, error, onCourseChange }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((item) => String(item.id) === id);
  const [selectedClassId, setSelectedClassId] = useState('');
  const [selectedSlotNumber, setSelectedSlotNumber] = useState(null);
  const [actionError, setActionError] = useState('');

  useEffect(() => {
    const firstClass = course?.classes?.[0];
    setSelectedClassId(firstClass?.classId || '');
    setSelectedSlotNumber(firstClass?.slots?.[0]?.slotNumber ?? null);
    setActionError('');
  }, [course]);

  if (loading) return <div className="text-center py-5"><Spinner animation="border" /></div>;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!course) return <Alert variant="warning">Course not found.</Alert>;

  const selectedClass = course.classes?.find((item) => item.classId === selectedClassId) || course.classes?.[0];
  const selectedSlot = selectedClass?.slots?.find((item) => item.slotNumber === selectedSlotNumber) || selectedClass?.slots?.[0];

  const chooseClass = (item) => {
    setSelectedClassId(item.classId);
    setSelectedSlotNumber(item.slots?.[0]?.slotNumber ?? null);
    setActionError('');
  };

  const saveCourse = async (updatedCourse) => {
    const response = await fetch(`${API_URL}/${course.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ classes: updatedCourse.classes }),
    });
    if (!response.ok) throw new Error('Unable to save changes to the API.');
    onCourseChange(await response.json());
  };

  const toggleClassStatus = async () => {
    setActionError('');
    if (!selectedClass) return;
    const closing = selectedClass.status === 'active';
    if (closing && selectedClass.slots?.some(isPresentOrFuture)) {
      setActionError('Cannot close this class because it has slots scheduled today or in the future. Complete all slots first.');
      return;
    }
    try {
      await saveCourse({
        ...course,
        classes: course.classes.map((item) => item.classId === selectedClass.classId
          ? { ...item, status: closing ? 'inactive' : 'active' }
          : item),
      });
    } catch (saveError) {
      setActionError(saveError.message);
    }
  };

  const deleteQuestions = async () => {
    if (!selectedClass || !selectedSlot) return;
    const field = Array.isArray(selectedSlot.questions) ? 'questions' : Array.isArray(selectedSlot.assignments) ? 'assignments' : null;
    if (!field || selectedSlot[field].length === 0) {
      setActionError('The selected slot has no questions or assignments to delete.');
      return;
    }
    if (!window.confirm(`Delete all ${field} in slot ${selectedSlot.slotNumber}?`)) return;
    setActionError('');
    try {
      await saveCourse({
        ...course,
        classes: course.classes.map((item) => item.classId !== selectedClass.classId ? item : {
          ...item,
          slots: item.slots.map((slot) => slot.slotNumber === selectedSlot.slotNumber ? { ...slot, [field]: [] } : slot),
        }),
      });
    } catch (saveError) {
      setActionError(saveError.message);
    }
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate('/courses')} linkAs="button">My Courses</Breadcrumb.Item>
        <Breadcrumb.Item active>{course.nameEn}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="h3">{course.nameEn} - {repairText(course.nameVi)}</h1>
      <p className="text-muted">{course.code} | Selected class: {selectedClass?.name || 'None'}</p>

      <div className="d-flex flex-wrap gap-2 mb-4">
        <Button variant="outline-secondary" onClick={() => navigate('/courses')}>← Back</Button>
        <Button variant="outline-secondary" onClick={deleteQuestions}>Delete questions</Button>
        <Button variant="outline-secondary" onClick={toggleClassStatus} disabled={!selectedClass}>
          {selectedClass?.status === 'active' ? 'Close' : 'Open'}
        </Button>
      </div>
      {actionError && <Alert variant="danger">{actionError}</Alert>}

      <Row className="g-4">
        <Col lg={4}><Left classes={course.classes || []} selectedClass={selectedClass} selectedSlot={selectedSlot} onSelectClass={chooseClass} onSelectSlot={(slot) => setSelectedSlotNumber(slot.slotNumber)} /></Col>
        <Col lg={8}><Right slot={selectedSlot} hasFutureOrPresentSlot={selectedSlot ? isPresentOrFuture(selectedSlot) : false} /></Col>
      </Row>
    </>
  );
}

function CourseList({ courses, loading, error, onRefresh }) {
  const [search, setSearch] = useState('');
  const [semester, setSemester] = useState('');
  const semesters = useMemo(() => [...new Set(courses.map((course) => course.semester).filter(Boolean))], [courses]);
  const filteredCourses = useMemo(() => {
    const term = search.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesSearch = !term || [course.code, course.nameEn, repairText(course.nameVi)].some((value) => value?.toLowerCase().includes(term));
      return matchesSearch && (!semester || course.semester === semester);
    });
  }, [courses, search, semester]);

  if (error) return <Alert variant="danger">{error}</Alert>;
  return <Main courses={filteredCourses} loading={loading} search={search} semester={semester} semesters={semesters} onSearchChange={setSearch} onSemesterChange={setSemester} onRefresh={onRefresh} />;
}

function AppContent() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadCourses = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Could not load courses. Start JSON Server with: json-server --watch database.json --port 9000');
      const data = await response.json();
      setCourses(data.map((course) => ({
        ...course,
        nameVi: repairText(course.nameVi),
        classes: course.classes?.map((classItem) => ({
          ...classItem,
          slots: classItem.slots?.map((slot) => ({
            ...slot,
            questions: slot.questions?.map(repairText),
            assignments: slot.assignments?.map(repairText),
          })),
        })),
      })));
    } catch (loadError) {
      setError(`${loadError.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadCourses(); }, []);
  const updateCourse = (updatedCourse) => setCourses((current) => current.map((course) => course.id === updatedCourse.id ? updatedCourse : course));

  return (
    <>
      <Header />
      <Container className="pb-5">
        <Routes>
          <Route path="/courses" element={<CourseList courses={courses} loading={loading} error={error} onRefresh={loadCourses} />} />
          <Route path="/detail/:id" element={<CourseDetail courses={courses} loading={loading} error={error} onCourseChange={updateCourse} />} />
          <Route path="*" element={<Navigate to="/courses" replace />} />
        </Routes>
      </Container>
    </>
  );
}

function App() {
  return <BrowserRouter><AppContent /></BrowserRouter>;
}

export default App;
