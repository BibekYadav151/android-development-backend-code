const mongoose = require("mongoose");
 
mongoose.connect('mongodb://127.0.0.1:27017/travelapp', {
    useNewUrlParser: true,
    useUnifiedTopology : true
}, ()=>{
    console.log('Connected to MongoDB database');
})

