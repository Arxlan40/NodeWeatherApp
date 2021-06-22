const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please Provide Address");
} else {
  geocode(address, (error, geocodeData) => {
    if (error) {
      console.log(error);
    }

    forecast(geocodeData.lat, geocodeData.long, (error, forecastData) => {
      if (error) {
        console.log(error);
      }
      console.log(geocodeData.location);
      console.log("Data", forecastData);
    });

    console.log(error);
  });
}
