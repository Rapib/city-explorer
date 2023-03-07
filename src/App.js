import React from 'react';
import Forms from './Form';
import List from './List';
import Alert from 'react-bootstrap/Alert'
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
    }
  }

  // handle functions
  handleSubmitCity = async (event) => {
    event.preventDefault();
    try {
      let cityToApi = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

      this.setState({
        cityData: cityToApi.data[0],
        lat: cityToApi.data[0].lat,
        lon: cityToApi.data[0].lon,
        cityDataEmpty: false,
        error: false,
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

  // render
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
          {this.state.error || this.state.cityDataEmpty ?
            <Alert key='danger' variant='danger'>
              {this.state.errorMsg}</Alert>
            :
            <List
              data={this.state.cityData}
            />
          }

          

        </main>
        <footer>by Thomas</footer>
      </>
    );
  }
}

export default App;
