const http = require('http');
const fs = require('fs');
const port = 7007

// Create a file to store the key-value pairs
fs.openSync('storage.txt', 'w');

const server = http.createServer((request, response) => {
  // Get the URL and query string from the request
  const url = request.url;
  const queryString = url.split('?')[1];

  //When the server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory
  if (url.startsWith('/set?')) {
    // Split the query string on the '=' character to get the key and value
    const [key, value] = queryString.split('=');

    // Append the key-value pair to the file
    fs.appendFileSync('storage.txt', `${key}=${value}\n`);

    // Send a response to confirm that the value was stored
    response.end(`Value stored for key: ${key} & value: ${value}`);
  }



   // When the server receives a request on http://localhost:7007/get?key=somekey it should return the value stored at key in memory.
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


  // When the server receives a request on http://localhost:4000/del?key=somekey it should delete the value stored at somekey
  if (url.startsWith('/del?')) {
    // Get the key from the query string
    const key = queryString.split('=')[1];

    // Read the file and search for the key-value pair
    const data = fs.readFileSync('storage.txt', 'utf8');
    const lines = data.split('\n');
    let newData = "";
    let deleted = false;
    lines.forEach(line => {
        if(line.startsWith(key+"=")){
            deleted = true;
        }else{
            newData += line + "\n";
        }
    });

    //overwrite the file 
    fs.writeFileSync('storage.txt', newData);
    if(deleted)
    // Send the value back as the response
    response.end(`Key ${key} and its value is deleted`);
    else
    // Send the value back as the response
    response.end(`Key ${key} not found`);
  }

  // When the server receives a request on http://localhost:4000/inc?key=somekey it should increment the value stored at somekey by one
  if (url.startsWith('/inc?')) {
    // Get the key from the query string
    const key = queryString.split('=')[1];

    // Read the file and search for the key-value pair
    const data = fs.readFileSync('storage.txt', 'utf8');
    const lines = data.split('\n');
    let newData = "";
    let incremented = false;
    lines.forEach(line => {
        if(line.startsWith(key+"=")){
            const [k, v] = line.split('=');
            if(Number.isInteger(parseInt(v))){
                newData += k+'='+(parseInt(v)+1)+'\n';
                incremented = true;
            }else{
                response.end(`Value stored at key ${key} is not an integer`);
                return;
            }
        }else{
            newData += line + "\n";
        }
    });

    //overwrite the file 
    fs.writeFileSync('storage.txt', newData);
    if(incremented)
    // Send the value back as the response
    response.end(`Key ${key} and its value is incremented by 1`);
    else
    // Send the value back as the response
    response.end(`Key ${key} not found`);
  }

  // When the server receives a request on http://localhost:4000/dec?key=somekey it should decrement the value stored at somekey by one
  if (url.startsWith('/dec?')) {
    // Get the key from the query string
    const key = queryString.split('=')[1];

    // Read the file and search for the key-value pair
    const data = fs.readFileSync('storage.txt', 'utf8');
    const lines = data.split('\n');
    let newData = "";
    let decremented = false;
    lines.forEach(line => {
        if(line.startsWith(key+"=")){
            const [k, v] = line.split('=');
            if(Number.isInteger(parseInt(v))){
                newData += k+'='+(parseInt(v)-1)+'\n';
                decremented = true;
            }else{
                response.end(`Value stored at key ${key} is not an integer`);
                return;
            }
        }else{
            newData += line + "\n";
        }
    });

    //overwrite the file 
    fs.writeFileSync('storage.txt', newData);
    if(decremented)
    // Send the value back as the response
    response.end(`Key ${key} and its value is decremented by 1`);
    else
    // Send the value back as the response
    response.end(`Key ${key} not found`);
  }

  // When the server receives a request on http://localhost:4000/ it should return a json response showing all keys and values in memory
  if (url === '/') {
    // Read the file and retrieve all key-value pairs
    const data = fs.readFileSync('storage.txt', 'utf8');
    const lines = data.split('\n');
    let allKV = {};
    lines.forEach(line => {
        if(line.trim().length>0){
            const [k, v] = line.split('=');
            allKV[k] = v;
        }
    });

    // Send all key-value pairs as a JSON response
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(allKV));
  }




});

// Start the server on port 
server.listen(port, () => console.log(`Example app listening on port ${port}!`));
