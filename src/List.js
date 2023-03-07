import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

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
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.data.lat},${this.props.data.lon}&zoom=12&size=500x500&format=png&maptype=street&markers=icon:small-yellow-cutout`} alt="map"></img>


      </>
    )
  }
}

// https://maps.locationiq.com/v3/staticmap?key=pk.37b0cfa6f503c84d669026a94bbca44b&center=47.6038321,-122.330062&zoom=12
//https://maps.locationiq.com/v3/staticmap?key=pk.37b0cfa6f503c84d669026a94bbca44b&center=47.6038321,-122.330062&zoom=12&size=300x300&format=png&maptype=street&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>
//<img src='https://maps.locationiq.com/v3/staticmap?key=<YOUR_ACCESS_TOKEN>&center=<latitude>,<longitude>&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>'>

export default List;