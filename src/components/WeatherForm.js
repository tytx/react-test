import React from 'react';

function WeatherForm({ city, country, onChange, onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="City"
        name="city"
        value={city}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Country"
        name="country"
        value={country}
        onChange={onChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default WeatherForm;
