const express = require("express");// Import the Express module
const path = require("path");// Import the Path module

const app = express();// Create an instance of the Express application
const server = require("http").createServer(app);// Create a server using the http module

const io = require("socket.io")(server); // Initialize Socket.IO by passing the server instance

app.use(express.static(path.join(__dirname+"/public")));// Configure Express to serve static files from the "public" directory

io.on("connection", function(socket){
	// Event handler for when a new user connects
	socket.on("newuser",function(username){
		socket.broadcast.emit("update", username + " joined the conversation");// Broadcast an "update" event to all connected clients, indicating that a new user has joined
	});


	 // Event handler for when a user exits
	socket.on("exituser",function(username){
		socket.broadcast.emit("update", username + " left the conversation");// Broadcast an "update" event to all connected clients, indicating that a user has left
	});


	  // Event handler for chat messages
	socket.on("chat",function(message){
		socket.broadcast.emit("chat", message);// Broadcast the chat message to all connected clients
	});
});

server.listen(5000);// Start the server and make it listen on port 5000