const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Pakistan", (error, data) => {
  console.log(data);

  console.log(error);
});

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
