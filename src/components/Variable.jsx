import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Variable = ({ name, value, increase, decrease }) => {
  return (
    <Row>
      <Col>{name}: </Col>
      <Col>{value}</Col>
      <Col sm="2">
        <Button variant="outline-secondary" onClick={() => increase(name)}>
          +
        </Button>
      </Col>
      <Col sm="2">
        <Button variant="outline-secondary" onClick={() => decrease(name)}>
          -
        </Button>
      </Col>
    </Row>
  );
};

export default Variable;
