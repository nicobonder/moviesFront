import React from 'react'
import {Form, Button} from 'react-bootstrap';

function ReviewForm({handleSubmit, revText, LabelText, defaultValue}) {
  return (
    <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>{LabelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
        </Form.Group>
        <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default ReviewForm