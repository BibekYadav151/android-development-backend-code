const express = require("express");
var morgan = require('morgan');

const app = express();
app.use(express.static(__dirname+'/images'));

const cors = require('cors');
app.use(cors());
app.use(morgan('combined'));


app.use(express.json());
app.use(express.urlencoded({extended : true}));

require("./database/db");

const customerRoute = require("./routes/customerRoute");
app.use(customerRoute);

const productRoute = require("./routes/productRoute");
app.use(productRoute);

const contactRoute = require("./routes/contactRoute");
app.use(contactRoute);

const bookingRoute = require("./routes/bookingRoute");
app.use(bookingRoute);

const destinationRoute = require("./routes/destinationRoute");
app.use(destinationRoute);

const blogRoute = require("./routes/travelblogRoute");
app.use(blogRoute);

const profileRoute = require("./routes/profileRoute");
app.use(profileRoute);


app.listen("3000", ()=>{
    console.log('we are listening to your requests at port:3000');
});