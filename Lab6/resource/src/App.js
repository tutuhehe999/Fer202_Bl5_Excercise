import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import SyllabusList from './SyllabusList';
import SubjectDetail from './SubjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/syllabus" element={<SyllabusList />} />
      <Route path="/subject/:id" element={<SubjectDetail />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
