const axios = require("axios");

const forecast = async (lat, long, callback) => {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=098db240bfab4b7b8c544654212006&q=" +
    lat +
    "," +
    long +
    "&aqi=no";

  try {
    const response = await axios.get(url);

    if (response.error) {
      await callback("Unable to find weather. Try another search", undefined);
    } else {
      await callback(
        undefined,
        " It is currently " +
          response.data.current.temp_c +
          " degress out. There is a " +
          response.data.current.precip_mm +
          "% chance of rain."
      );
    }
  } catch (error) {
    console.log(error);
    callback("Unable to connect", undefined);
  }
};

module.exports = forecast;
