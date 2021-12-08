const mongoose = require("mongoose");
const http = require('http');
const app = require("./app");
const server = http.createServer(app);

const MONGO_CONNECTION_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true };

mongoose.connect("mongodb://root:example@127.0.0.1:27017/sampleDB?authSource=admin", MONGO_CONNECTION_OPTIONS)
        .then(() => server.listen(8000)).catch(err => console.log(err));