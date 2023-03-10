import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import WeatherDay from '../src/WeatherDay'
class Weather extends React.Component {
  render() {


    let newList = this.props.cityWeather.map((i) => {
      return <WeatherDay
        date={i.date}
        description={i.description}
      />
    })

  //  return <>

  // // listgroup 2 lines go in weather day.
  // <ListGroup.Item variant="success" key={idx}>Date: {i.date}</ListGroup.Item>
  //  <ListGroup.Item>Description: {i.description}</ListGroup.Item>
  // </>

    // return <WeatherDay 
    // date = {element.date}
    // description = {element.description}
    // />

    // });
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