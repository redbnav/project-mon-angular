const request = require('request');

var getWeather = (lat, lng, callback) => {
request({
  url: `https://api.darksky.net/forecast/f13235c0ba31197a49df5ead788d913b/${lat},${lng}`,
  json: true
}, (error, response, body) => {
    if (error) {
        callback('Unable to connect to Forecast.io server.');
      } else if (response.statusCode === 400) {
        callback('Unable to fetch weather.');
      } else if (response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      }
    });
  };

module.exports = {
    getWeather
}