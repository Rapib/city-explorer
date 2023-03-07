import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './List.css'




class List extends React.Component {

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item>City: {this.props.data.display_name}</ListGroup.Item>
          <ListGroup.Item>Latitude: {this.props.data.lat}</ListGroup.Item>
          <ListGroup.Item>Longitude: {this.props.data.lon}</ListGroup.Item>
        </ListGroup>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.data.lat},${this.props.data.lon}&zoom=12&size=500x500&format=png&maptype=street&markers=icon:small-yellow-cutout`} alt="map" className='mapImg'></img>


      </>
    )
  }
}




export default List;