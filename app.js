if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const connection = require('./config/db');
const path = require("path");

//routes
const BookRoutes = require('./routes/BookRoutes')
const AuthorRoutes = require('./routes/AuthorRoutes')
const signupRoutes = require('./routes/signupRoutes')

//middleware to handel json data and url encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());


app.use('/authors', AuthorRoutes);
app.use('/books', BookRoutes);
app.use('/', signupRoutes);

app.set('view engine', 'ejs');

connection();
app.listen(8080, () => {
    console.log("server is running on port 8080")
});