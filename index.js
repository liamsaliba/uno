"use strict";

const express = require('express');
const app = express();
const http = require('http').Server(app);

// Route handler, set root as /public
app.use(express.static(__dirname + "/public"));

const io = require('socket.io')(http);

const PORT = 5050;

// Init HTTP server, listen to port activity
http.listen(PORT, function(){
    console.log("Server listening on port " + PORT);
    console.log("You may now connect on localhost:" + PORT);
    init();
})

function init() {
    console.log("Server initialised.");
}