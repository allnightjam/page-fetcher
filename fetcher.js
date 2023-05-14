const request = require('request');
const fs = require('fs');

const webName = process.argv[2];
const path = process.argv[3];

request(webName, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(path,body, (err) => {
    if (err) {
      console.log(err);
    }
    const stats = fs.statSync(path);
    const size = stats.size;
    console.log(`Downloaded ${size} byes to file ${path}`);
  })
});




// const fs = require("node:fs");
// const {isBuffer} = require('node:util');

// const fetcher = (url,location) => {
//   request (url, (error,response,body) => {
//     console.log('error: ', error)

//     console.log('statusCode: ', response && response.statusCode);
//     console.log("body: ", body);
//     fs.writeFile(location,body,(err) => { if (err) { console.log(err);
//     }
//     const stats = fs.statSync(location);
//     const size = stats.size;
//     console.log(`Downloaded ${size} bytes to file ${location}`);
//   });
//   });
// };