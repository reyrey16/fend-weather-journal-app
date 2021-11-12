/* Global Variables */
let baseURL  = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=0a19a8d075a2222ed47edc7ea800379b&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', generateEntry);

/* Function called by event listener */
function generateEntry(e) {
  const zip = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;

  //FIRST: Get weather data
  getWeather(baseURL, zip, apiKey).then((data) => {
      //SECOND: Post data to the server
      postData('/', {temp:data.main.temp, zip: zip, feelings: feelings});
  })
}

/* Function to GET Web API Data*/
const getWeather = async (baseURL, zip, apiKey) => {
  //Getting the weather data and saving it
  const response = await fetch(baseURL+zip+apiKey)
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(" GET WEATHER ERROR:", error);
  }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
  console.log("DATA MADE IT HERE:", data);
  //Sending the data to the server side
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("POST ERROR:", error);
  }
}


/* Function to GET Project Data */
