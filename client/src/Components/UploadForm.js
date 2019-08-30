import React, { useState } from 'react';
import { Container, Row, Button, Form, Col } from 'react-bootstrap'

function UploadForm() {
  const [file, setFile] = useState('')
  
  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <Form>
            <Form.Row>
            <Form.Group controlId="formBasicSubmit">
              <Form.Label>Import your DB</Form.Label>
              <Form.Control type="textarea" />
                <Form.Control type="file" variant="outline-primary" accept=".csv"/>
                <Button variant="outline-secondary">Import</Button>
            </Form.Group>
            </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UploadForm;