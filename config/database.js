//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://root:root123@ds135255.mlab.com:35255/react-app';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;
