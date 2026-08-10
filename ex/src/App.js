import './App.css';
import ClassesExercise from './components/ClassesExercise';
import CompaniesExercise from './components/CompaniesExercise';
import CourseList from './components/CourseList';
import ExerciseNavbar from './components/ExerciseNavbar';
import HelloReact from './components/HelloReact';
import JsxText from './components/JsxText';
import PeopleExercise from './components/PeopleExercise';
import ProductExercise from './components/ProductExercise';
import PromiseExercise from './components/PromiseExercise';
import ReactIntroduction from './components/ReactIntroduction';
import ReduceExercise from './components/ReduceExercise';

function App() {
  return (
    <div className="app-shell" id="top">
      <header className="page-header">
        <h1>Exercise 4: JSX &amp; ES6</h1>
      </header>

      <main>
        <HelloReact />
        <ReactIntroduction />
        <ExerciseNavbar />
        <JsxText />
        <CourseList />
        <PeopleExercise />
        <ReduceExercise />
        <CompaniesExercise />
        <ClassesExercise />
        <PromiseExercise />
        <ProductExercise />
      </main>

    </div>
  );
}

export default App;
