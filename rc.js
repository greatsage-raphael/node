const http = require('http');

// Create an object to store the key-value pairs in memory
let storage = {};

const server = http.createServer((request, response) => {
  // Get the URL and query string from the request
  const url = request.url;
  const queryString = url.split('?')[1];

  // Check if the request is for setting a key-value pair
  if (url.startsWith('/set?')) {
    // Split the query string on the '=' character to get the key and value
    const [key, value] = queryString.split('=');

    // Store the key-value pair in memory
    storage[key] = value;

    // Send a response to confirm that the value was stored
    response.end(`Value stored for key: ${key} & value: ${value}`);
  }

  // Check if the request is for getting a value
  if (url.startsWith('/get?')) {
    // Get the key from the query string
    const key = queryString.split('=')[1];

    // Get the value for the given key from memory
    const value = storage[key];

    // Send the value back as the response
    response.end(value);
  }
});

// Start the server on port 4000
server.listen(4000);