import { useState } from 'react';

function DragAndDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [draggingItem, setDraggingItem] = useState(null);

  function handleDrop(dropIndex) {
    if (draggingItem === null || draggingItem === dropIndex) {
      return;
    }

    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(draggingItem, 1);
    updatedItems.splice(dropIndex, 0, movedItem);
    setItems(updatedItems);
  }

  return (
    <section>
      <h2>Drag and Drop List</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={() => setDraggingItem(index)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => handleDrop(index)}
            onDragEnd={() => setDraggingItem(null)}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DragAndDropList;
