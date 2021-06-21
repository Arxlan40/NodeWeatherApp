const axios = require("axios");
const geocode = require("./utils/geocode");
// const url =
//   "https://api.weatherapi.com/v1/current.json?key=098db240bfab4b7b8c544654212006&q=lahore&aqi=no";
// const url2 =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Lahore.json?access_token=pk.eyJ1IjoiYXJ4bGFuNDAiLCJhIjoiY2twZGg1eGY3MWhjYjJxcW1nc3dyanczaiJ9.xzxmx4bWLT_swUJes1UiGA";
// async function getUser() {
//   try {
//     const response = await axios.get("url2");
//     console.log(response.data.features[0]["place_name"]);

//     const response2 = await axios.get(url);
//   } catch (error) {
//     console.error("error");
//   }
// }

// getUser();

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

geocode("Pakistan", (error, data) => {
  console.log(data);

  console.log(error);
});
