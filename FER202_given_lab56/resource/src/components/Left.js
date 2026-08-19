import { ListGroup } from 'react-bootstrap';

function Left({ classes, selectedClass, selectedSlot, onSelectClass, onSelectSlot }) {
  return (
    <>
      <h2 className="h5">Classes</h2>
      <ListGroup className="mb-4">
        {classes.map((item) => (
          <ListGroup.Item
            action
            active={selectedClass?.classId === item.classId}
            key={item.classId}
            onClick={() => onSelectClass(item)}
          >
            {item.name} ({item.status})
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h2 className="h5">Slots</h2>
      <ListGroup>
        {selectedClass?.slots?.length ? selectedClass.slots.map((slot) => (
          <ListGroup.Item
            action
            active={selectedSlot?.slotNumber === slot.slotNumber}
            key={slot.slotNumber}
            onClick={() => onSelectSlot(slot)}
          >
            <strong>Slot {slot.slotNumber}</strong><br />
            <small>{slot.date} · {slot.time}</small>
          </ListGroup.Item>
        )) : <ListGroup.Item className="text-muted">No slots available.</ListGroup.Item>}
      </ListGroup>
    </>
  );
}

export default Left;
