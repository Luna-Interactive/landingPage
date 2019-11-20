const express = require('express');


// connect app
const app = express();

// middleware ... 


// DB init ...



// main route
app.get('/', (req, res) => res.send('Hello World'));



// connect port 
const port = process.env.PORT || 8000;
app.listen(port, () => console.log('Server Running...', port));