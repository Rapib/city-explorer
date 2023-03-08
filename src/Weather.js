import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  render() {
    return (
      <>
        <ListGroup horizontal>
          <ListGroup.Item variant="success">Date: {this.props.cityWeather.date}</ListGroup.Item>
          <ListGroup.Item variant="success">Description: {this.props.cityWeather.description}</ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}

export default Weather;