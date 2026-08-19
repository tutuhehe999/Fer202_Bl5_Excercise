import { Alert, Badge, Card, ListGroup } from 'react-bootstrap';

function Right({ slot, hasFutureOrPresentSlot }) {
  if (!slot) {
    return <Alert variant="light" className="border">Select a slot to view its session details.</Alert>;
  }

  const items = slot.questions || slot.assignments || [];
  const label = slot.questions ? 'Questions' : slot.assignments ? 'Assignments' : 'Questions / Assignments';

  return (
    <>
      <h2 className="h5">Class sessions</h2>
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between gap-3 mb-2">
            <Card.Title className="h6">Slot {slot.slotNumber}: {slot.title}</Card.Title>
            <Badge bg="light" text="dark" className="border">{hasFutureOrPresentSlot ? 'Scheduled slot' : 'Slot has expired'}</Badge>
          </div>
          <Card.Text className="mb-0">{slot.date} · {slot.time}</Card.Text>
        </Card.Body>
      </Card>

      <h3 className="h6">{label}</h3>
      {items.length ? (
        <ListGroup>
          {items.map((item, index) => <ListGroup.Item key={`${item}-${index}`}>{item}</ListGroup.Item>)}
        </ListGroup>
      ) : <p className="text-muted">No questions or assignments in this slot.</p>}
    </>
  );
}

export default Right;
