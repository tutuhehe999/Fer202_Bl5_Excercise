import { useState } from 'react';
import UserPosts from './components/UserPosts';
import CountdownTimer from './components/CountdownTimer';
import WindowSize from './components/WindowSize';
import ValidatedInput from './components/ValidatedInput';

function hasAtLeastThreeCharacters(value) {
  return value.trim().length >= 3;
}

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <main>
      <h1>Exercise 13: useEffect</h1>
      <section>
        <h2>User Posts</h2>
        <label htmlFor="userId">User ID: </label>
        <input
          id="userId"
          type="number"
          min="1"
          max="10"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
        <UserPosts userId={userId} />
      </section>
      <CountdownTimer initialValue={10} />
      <WindowSize />
      <ValidatedInput
        validationFunction={hasAtLeastThreeCharacters}
        errorMessage="Please enter at least 3 characters."
      />
    </main>
  );
}

export default App;
