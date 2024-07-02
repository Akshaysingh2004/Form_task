
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const File = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <TaskInput />
        </Col>
        <Col md={6}>
          <TaskList />
        </Col>
      </Row>
    </Container>
  );
};

export default File;
