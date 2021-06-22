const axios = require("axios");

const geocode = async (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiYXJ4bGFuNDAiLCJhIjoiY2twZGg1eGY3MWhjYjJxcW1nc3dyanczaiJ9.xzxmx4bWLT_swUJes1UiGA";

  try {
    const response = await axios.get(url);

    if (response.data.features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        long: response.data.features[0].center[0],
        lat: response.data.features[0].center[1],
        location: response.data.features[0].place_name,
      });
    }
  } catch (error) {
    callback("Unable to connect", undefined);
  }
};

module.exports = geocode;
