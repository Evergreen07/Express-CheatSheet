const express = require('express');
const path = require('path');
const logger = require('./Middleware/logger');

const app = express();

//MiddleWare
//app.use(logger); //For multiple middleware, be specific for the order. ('/' & '/users')

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Using Routes
app.use(require('./Routes/APIs/memb'));

//Static Folder : We can make a specific folder as the static server instead of adding all routes.
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

const PORT =  process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT} !!!`));