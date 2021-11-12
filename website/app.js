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

  console.log("ZIP: " + zip);
  console.log("Feelings: " + feelings);

  getWeather(baseURL, zip, apiKey).then( (data) => {
      console.log(data.main.temp);
  })
}

/* Function to GET Web API Data*/
const getWeather = async (baseURL, zip, apiKey) => {
  //Getting the weather data and saving it
  const response = await fetch(baseURL+zip+apiKey)
  try {
    const data = await response.json();
    //console.log(data.main.temp);
    return data;
  } catch (error) {
    console.log("ERROR:", error);
  }
}

/* Function to POST data */



/* Function to GET Project Data */
