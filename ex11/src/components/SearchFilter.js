import { useState } from 'react';

const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grape'];

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <h2>Search Filter</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search an item"
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default SearchFilter;
