const express = require('express');
const app = express();

// Serves index.html page
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start our server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});  