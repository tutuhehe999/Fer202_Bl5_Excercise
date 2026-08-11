import { courses } from '../data/exerciseData';
import ExerciseSection from './ExerciseSection';

function CourseList() {
  return (
    <ExerciseSection
      number="05"
      title="Course list"
      description="Array values rendered as a list with map()."
      id="courses"
    >
      <div className="course-preview">
        <h3>Course names</h3>
        <ul>
          {courses.map((course) => <li key={course}>{course}</li>)}
        </ul>
      </div>
    </ExerciseSection>
  );
}

export default CourseList;
