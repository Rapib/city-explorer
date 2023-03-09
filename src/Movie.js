import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Movie.css';

class Movie extends React.Component {
  render() {
    let newList = this.props.movieData.map(
      (i, idx) => {
        return <>
          <Card key={idx}>
            <Card.Img variant="top" src={i.image_url} />
            <Card.Body>
              <Card.Title>{i.title}</Card.Title>
              <Card.Text>
                Overview: {i.overview}
              </Card.Text>
            </Card.Body>
              <ListGroup.Item>Average Votes: {i.average_votes}</ListGroup.Item>
              <ListGroup.Item>Total Votes: {i.total_votes}</ListGroup.Item>
              <ListGroup.Item>Popularity: {i.popularity}</ListGroup.Item>
              <ListGroup.Item>Released on: {i.released_on}</ListGroup.Item>
          </Card>
        </>
      }
    );
    return (
      <>

          {newList}

      </>
    )
  }
}
export default Movie;