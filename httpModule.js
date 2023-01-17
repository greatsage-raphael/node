//The http module in Node.js is a built-in module that provides an easy way for creating HTTP servers and clients. It allows developers to create HTTP servers that can handle multiple requests and responses, and it also provides an API for creating HTTP clients that can send requests to servers.

//Here are some of the main features of the http module:

//Creating HTTP servers: The http module provides the createServer() method, which can be used to create an HTTP server that listens for incoming requests. This method takes a callback function as an argument, which is executed every time a request is received.

//Handling requests and responses: The http module provides the Server class, which has methods such as listen() and close() that can be used to start and stop a server. The Server class also has a request event, which is emitted every time a request is received.

//Creating HTTP clients: The http module also provides the request() method, which can be used to create an HTTP client that can send requests to servers. This method returns an instance of the ClientRequest class, which has methods such as write() and end() that can be used to send data to the server.

//Handling responses: The ClientRequest class also has a response event, which is emitted when the server sends a response. The response event returns an instance of the IncomingMessage class, which has methods such as on() and read() that can be used to handle the response data.

//HTTPS support: The http module also provides support for HTTPS via the https module, which is built on top of the http module, it uses the same API but it uses secure sockets layer (SSL) and transport layer security (TLS) to encrypt the data.

//By using the http module in Node.js, developers can easily create HTTP servers and clients and handle incoming requests and responses. This allows them to create dynamic, interactive web applications and services using JavaScript.


const http = require('http');
const fs = require('fs');

// Create a file to store the key-value pairs
fs.openSync('storage.txt', 'w');

const server = http.createServer((request, response) => {
  // Get the URL and query string from the request
  const url = request.url;
  const queryString = url.split('?')[1];

  // Check if the request is for setting a key-value pair
  if (url.startsWith('/set?')) {
    // Split the query string on the '=' character to get the key and value
    const [key, value] = queryString.split('=');

    // Append the key-value pair to the file
    fs.appendFileSync('storage.txt', `${key}=${value}\n`);

    // Send a response to confirm that the value was stored
    response.end(`Value stored for key: ${key} & value: ${value}`);
  }

  // Check if the request is for getting a value
  if (url.startsWith('/get?')) {
    // Get the key from the query string
    const key = queryString.split('=')[1];

    // Read the file and search for the value
    const data = fs.readFileSync('storage.txt', 'utf8');
    const lines = data.split('\n');
    let value;
    lines.forEach(line => {
        if(line.startsWith(key)){
            value = line.split('=')[1];
        }
    });

    // Send the value back as the response
    response.end(value);
  }
});

// Start the server on port 4000
server.listen(4000);
