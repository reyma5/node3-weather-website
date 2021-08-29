// const request = require("request");

// const forecast = (latitude, longitude, callback) => {
//   const url = `http://api.weatherstack.com/current?key=value&access_key=341446ed83e1a71a76c053e1c3a38359&query=${latitude}, + ${longitude}&units=f`;
//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to weather service!!", undefined);
//     } else if (response.body.error) {
//       callback(response.body.error.info, undefined);
//     } else {
//       callback(
//         undefined,
//         response.body.current.weather_descriptions[0] +
//           ". It is currently " +
//           response.body.current.temperature +
//           " degrees out. It feels like " +
//           response.body.current.feelslike +
//           " degrees out."
//       );
//     }
//   });
// };

// module.exports = forecast;

// ---- 40. DESTRUCTURING AND PROPERTY SHORTHAND CHALLENGE ----//

const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?key=value&access_key=341446ed83e1a71a76c053e1c3a38359&query=${latitude}, + ${longitude}&units=f`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!!", undefined);
    } else if (body.error) {
      callback(body.error.info, undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
