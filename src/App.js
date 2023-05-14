import React from 'react';
import Forms from './Form';
import List from './List';
import Alert from 'react-bootstrap/Alert';
import Weather from './Weather';
import Movies from './Movies';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      lat: '',
      lon: '',
      error: false,
      errorMsg: '',
      cityDataEmpty: true,
      cityWeather: {},
      cityWeatherEmpty: true,
      movieData: {},
      submit: false,

    }
  }

  handleSubmitCity = async (event) => {
    event.preventDefault();
    try {
      this.setState({submit:true});
      let cityToApi = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      let movieToServer = await axios.get(`${process.env.REACT_APP_SERVER}/movie?keyword=${this.state.city}`);
      let cityToServer = await axios.get(`${process.env.REACT_APP_SERVER}/weather?search=${this.state.city}&lat=${cityToApi.data[0].lat}&lon=${cityToApi.data[0].lon}`);
      this.setState({
        cityData: cityToApi.data[0],
        lat: cityToApi.data[0].lat,
        lon: cityToApi.data[0].lon,
        cityDataEmpty: false,
        error: false,
        cityWeather: cityToServer.data,
        cityWeatherEmpty: false,
        movieData: movieToServer.data,
        submit: false,
      })
    } catch (error) {

      console.log(error.message);
      this.setState({
        error: true,
        errorMsg: `🚨Status: ${error.message}`,
      })
    }
  }
  handleTextCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  render() {
    return (
      <>
        <header>
          <h1>City Xplorer</h1>
        </header>
        <main>
          <Forms
            handleTextCity={this.handleTextCity}
            handleSubmitCity={this.handleSubmitCity}
            cityData={this.state.cityData}
          />
          {this.state.submit && <h4>Processing request... <br />
        * Please be aware that free API services are being used, so it may take some time to receive all the responses.</h4>}
          {this.state.error || this.state.cityDataEmpty || this.state.cityWeatherEmpty ?
            <></>
            :
            <div>
              <List
                data={this.state.cityData}
              />
              <Weather
                cityWeather={this.state.cityWeather}
              />
              <Movies
                movieData={this.state.movieData}
              />
            </div>
          }
          {
            this.state.error && <Alert key='danger' variant='danger'>
              {this.state.errorMsg}</Alert>
          }
        </main>
        <footer>by Thomas<br /><a href="https://commons.wikimedia.org/wiki/File:The_Amazing_Earth.jpg">V.Cid7413</a>,<a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>, via Wikimedia Commons</footer>
      </>
    );
  }
}

export default App;
