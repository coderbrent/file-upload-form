import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Form from 'react-bootstrap/Form'

export default function Form() {
  
  return (
    <Form>
      <Form.Group controlId="formBasicSubmit">
      <Form.Label>Import your DB</Form.Label>
      <ButtonToolbar>
        <Button variant="Primary">Whateversss</Button>
      </ButtonToolbar>
      </Form.Group>
    </Form>
  )
}