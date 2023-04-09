import Card from 'react-bootstrap/Card';

const CardWrapper = ({label, number, description}) => {
  return (
    <>
      <Card className="text-center card shadow bg-body rounded">
        <Card.Header>{label}</Card.Header>
        <Card.Body>
          <Card.Title className="title">{number}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardWrapper;