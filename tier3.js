const express = require('express');
const app = express();

// Enable CORS
const cors = require('cors');
app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003'],
    credentials: false, 
}));


// Start our server
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});  