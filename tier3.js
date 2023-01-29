const express = require('express');
const fs = require('fs');
const app = express();


// Enable CORS
const cors = require('cors');
const { request } = require('http');
app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003'],
    credentials: false, 
}));


if (request.method === 'POST') {
  // Handle POST request
  console.log('POST request received');
  // Get the data from the request
  const data = request.body;
  // Write the data to a file
  fs.writeFile('data.json', JSON.stringify(data), (err) => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });
  
// ignore GET requests for now
// } else {
//   // Handle GET request
//   console.log('GET request received');
//   // Read the data from the file
//   fs.readFile('data.json', 'utf8', (err, data) => {
//     if (err) {
//       console.log('Error reading file from disk:', err);
//     } else {
//       // Send the data to the client
//       response.send(data);
//     }
//   });
}

// Start our server
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});  