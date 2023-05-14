import React from "react";
import Movie from'.//Movie';
import './Movie.css';

class Movies extends React.Component {
  render() {
    let newList = this.props.movieData.map(
      (i) => {
        return <Movie
        image_url={i.image_url}
        title={i.title}
        overview={i.overview}
        average_votes={i.average_votes}
        total_votes={i.total_votes}
        popularity={i.popularity}
        released_on={i.released_on}
        />;
      }
    );
    return (
      <>
        <h2>Movies related to the city:</h2>
          {newList}

      </>
    )
  }
}
export default Movies;