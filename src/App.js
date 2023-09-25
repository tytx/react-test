import React, { Component } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import SearchHistory from './components/SearchHistory';
import './App.css'; // Import the CSS file

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      weatherData: null,
      history: [],
      errorMessage: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSearch = () => {
    const { city, country } = this.state;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=253682c0bd759acfb4255d4aa08c3dd7`
      )
      .then((response) => {
        const { data } = response;
        const { history } = this.state;
        history.push(`${city}, ${country}`);
        this.setState({ weatherData: data, history, errorMessage: '' });
      })
      .catch((error) => {
        this.setState({ errorMessage: 'Invalid city or country' });
      });
  };

  handleDelete = (index) => {
    const { history } = this.state;
    history.splice(index, 1);
    this.setState({ history });
  };

  render() {
    const { city, country, weatherData, history, errorMessage } = this.state;

    return (
      <div className="container">
        <h1>Weather Information App</h1>
        <WeatherForm
          city={city}
          country={country}
          onChange={this.handleInputChange}
          onSearch={this.handleSearch}
        />
        {errorMessage && <p>{errorMessage}</p>}
        {weatherData && <WeatherInfo data={weatherData} />}
        <SearchHistory history={history} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
