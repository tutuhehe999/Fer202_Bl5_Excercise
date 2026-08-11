import './App.css';
import AboutMe from './components/AboutMe';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import SimpleCard from './components/SimpleCard';
import SimpleWebsite from './components/SimpleWebsite';

const simpleCardItem = {
  title: 'A Title',
  description: 'The description goes here.',
  imageUrl: '',
};

function App() {
  const exercise = new URLSearchParams(window.location.search).get('exercise');

  if (exercise === '1') return <AboutMe />;
  if (exercise === '2') return <HelloWorld />;
  if (exercise === '3') return <Counter />;
  if (exercise === '4') return <SimpleCard item={simpleCardItem} />;
  return <SimpleWebsite />;
}

export default App;
