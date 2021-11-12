// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server = app.listen(port, () => {
  console.log("Server is alive!! Port " + port);
});

// Initialize all route with a callback function
app.get('/all', (request, response) => {
  console.log("GET requested");
  response.send(projectData);
});

//app.post('/', postEntry);

function postEntry (request, response) {
  let newData = request.body;
  let newEntry = {
    temperature : newData.temperature,
    date : newData.date,
    response : newData.response
  }
  console.log("POST REQUEST DONE");
  response.send('POST received');
  projectData.push(newEntry);
}
