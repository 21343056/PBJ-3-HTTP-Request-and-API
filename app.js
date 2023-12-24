const request = require("postman-request");
const url =
  "http://api.weatherstack.com/current?access_key=0f8b84714aa3f8233f495ec9c263bc14&query=-0.9907800840624111,%20100.35666969795624";
request({ url: url }, (error, response) => {
  //   console.log(response);
  const data = JSON.parse(response.body);
  //   console.log(data);
  //   console.log(data.current);
  console.log(data.current.temperature);
});
