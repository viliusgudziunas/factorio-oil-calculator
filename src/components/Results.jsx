import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Results = ({ heavyOil, lightOil, petroleumGas, lubricant }) => {
  return (
    <Col>
      Results
      <hr />
      <Row>
        <Col>Heavy Oil</Col>
        <Col>{heavyOil}</Col>
      </Row>
      <Row>
        <Col>Light Oil</Col>
        <Col>{lightOil}</Col>
      </Row>
      <Row>
        <Col>Petroleum Gas</Col>
        <Col>{petroleumGas}</Col>
      </Row>
      <Row>
        <Col>Lurbicant</Col>
        <Col>{lubricant}</Col>
      </Row>
    </Col>
  );
};

export default Results;
