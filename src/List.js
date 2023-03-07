import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class List extends React.Component {

  render() {
    console.log(this.props.data);
    return (
      <>
        <ListGroup>
          <ListGroup.Item>{this.props.data.display_name}</ListGroup.Item>
          <ListGroup.Item>{this.props.data.lat}</ListGroup.Item>
          <ListGroup.Item>{this.props.data.lon}</ListGroup.Item>
        </ListGroup>
      </>
    )
  }
}


export default List;