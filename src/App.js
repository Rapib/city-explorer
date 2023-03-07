import React from 'react';
import Forms from './Form';
import List from './List';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      lat:'',
      lon:''
    }
  }

  // handle functions
  handleSubmitCity = async (event) => {
    event.preventDefault();
    console.log ('handleSubmitCity works');
    let cityToApi = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

    this.setState({
      cityData: cityToApi.data[0],
      lat: cityToApi.data[0].lat,
      lon: cityToApi.data[0].lon
    })

  }

  handleTextCity = (e) => {

    this.setState({
      city: e.target.value
    })


  }

  // render
  render() {
    return (
      <>
        <main>
          <Forms 
          handleTextCity = {this.handleTextCity}
          handleSubmitCity = {this.handleSubmitCity}
          cityData ={this.state.cityData}
          />
          <List
          data ={this.state.cityData}
          />
        </main>

      </>
    );
  }
}

export default App;
