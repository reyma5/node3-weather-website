// const request = require("request");

// const geocode = (address, callback) => {
//   const url =
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//     encodeURIComponent(address) +
//     ".json?access_token=pk.eyJ1IjoicmV5bWFsaXRkb2c1IiwiYSI6ImNrc3JsM21qazBiNHIycmpzZDdqaDZodTYifQ.FUBuQWQsq8nsXCxp_Q91NA&limit=1";
//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to locaiton services!", undefined);
//     } else if (response.body.features.length === 0) {
//       callback(
//         "Unable to find location. Try again with another search term",
//         undefined
//       );
//     } else {
//       callback(undefined, {
//         latitude: response.body.features[0].center[1],
//         longitude: response.body.features[0].center[0],
//         location: response.body.features[0].place_name,
//       });
//     }
//   });
// };

// module.exports = geocode;

// ---- 40. DESTRUCTURING AND PROPERTY SHORTHAND CHALLENGE ----//

const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoicmV5bWFsaXRkb2c1IiwiYSI6ImNrc3JsM21qazBiNHIycmpzZDdqaDZodTYifQ.FUBuQWQsq8nsXCxp_Q91NA&limit=1";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback(
        "Unable to find location. Try again with another search term",
        undefined
      );
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
