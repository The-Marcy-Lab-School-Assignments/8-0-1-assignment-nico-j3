const express = require('express');
const app = express();

// STEP 1:  Import the path module to construct the absolute path to the static assets folder
const path = require('path');

// STEP 2: Construct the absolute path to the static assets folder using the `path.join()` method
const pathToDistFolder = path.join(__dirname, '..', 'path', 'to', 'frontend', 'dist');

// STEP 3: Create the middleware function for serving static assets
const serveStatic = express.static(pathToDistFolder);

//CREATE LOG ROUTE 
const logRoutes = (req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next(); // Passes the request to the next middleware/controller
};





// Use the middleware function to serve static assets

app.use(logRoutes);


const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 