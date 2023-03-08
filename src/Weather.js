import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  render() {


    let newList = this.props.cityWeather.map((i,idx) => {
      return <>
        <ListGroup.Item variant="success" key='idx'>Date: {i.date}</ListGroup.Item>
        <ListGroup.Item >Description: {i.description}</ListGroup.Item>
      </>

    });
    return (
      <>
        <ListGroup>
          {newList}
        </ListGroup>
      </>
    );
  }
}

export default Weather;