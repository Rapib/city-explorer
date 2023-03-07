import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class Forms extends React.Component{

  render(){
    return(
      <>
      <Form onSubmit={this.props.handleSubmitCity}>
        <Form.Group>
          <Form.Label>Enter a city</Form.Label>
          <Form.Control type="text" placeholder="eg. Seattle" name="cityInput" onChange={this.props.handleTextCity} required/>
          <Button type="submit">Explore!</Button>
        </Form.Group>
      </Form>

      </>
    );
  }
}

export default Forms;