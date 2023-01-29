// tier3 API endpoint (currently this is current directory  )
const tier3endpoint = '__dirname';
// tier3endpoint.append('foo', '42'); // add query parameters if needed

const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// Enable CORS
// const cors = require('cors');
// app.use(cors({
//     origin: [],
//     credentials: true, // enable set cookie
//   }));

// Enable file upload limits
app.use(
    fileUpload({
        limits: {
            fileSize: 10000000,
        },
        abortOnLimit: true,
    })
);

// Serves index.html page
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Upload route
app.post('/upload', (req, res) => {
    // Get the file that was set to our field named "image"
    const { image } = req.files;

    // If no image submitted, exit
    if (!image) return res.sendStatus(400);

    // Change the file extension to .myjpeg
    image.name = image.name.substr(0, image.name.lastIndexOf(".")) + ".myjpeg";
    
    // Move the uploaded image to upload folder
    // This is where the API call to the tier3 service will be made
    
    image.mv(tier3endpoint + '/upload/' + image.name);

    // log it
    console.log(req.files);

    // All good
    res.sendStatus(200);
});

// Start our server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});  