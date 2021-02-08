import React from 'react'
import { Button, Container, ButtonGroup, DropdownButton, Dropdown, Form, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <React.Fragment>
      <Container>
        <ButtonGroup>
          <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Jakarta</Dropdown.Item>
            <Dropdown.Item eventKey="2">Balikpapan</Dropdown.Item>
            <Dropdown.Item eventKey="3">Mataram</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>

        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">Email</Form.Label>
            <Col sm="10">
              <Form.Control type="email" placeholder="Email@example.com" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">Password</Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Button type="submit">Done</Button>
        </Form>

      </Container>
    </React.Fragment>
  );
}

export default App;
