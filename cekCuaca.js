const request = require("postman-request");
const urlCuaca =
  "http://api.weatherstack.com/current?access_key=0f8b84714aa3f8233f495ec9c263bc14&query=-0.9907800840624111,%20100.35666969795624&units=m";
request({ url: urlCuaca, json: true }, (error, response) => {
  console.log(
    "Saat ini suhu diluar mencapai " +
      response.body.current.temperature +
      " derajat celcius. Kemungkinan terjadinya hujan adalah " +
      response.body.current.precip +
      "%"
  );
});
