import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import WeatherDay from '../src/WeatherDay'
import './Weather.css';
class Weather extends React.Component {
  render() {
    let newList = this.props.cityWeather.map((i) => {
      return <WeatherDay
      date={i.time}
      description={i.forecast}
      />
    })
  return (
      <>
      <h2>Weather forecast:</h2>
        <ListGroup>
          {newList}
        </ListGroup>
      </>
    );
  }
}

export default Weather;