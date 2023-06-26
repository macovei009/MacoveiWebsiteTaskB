(function(){
// Select the app container and initialize the socket connection
	const app = document.querySelector(".app");
	const socket = io();

	let uname;//Variable to store the username


	// Event listener for joining the chat
	app.querySelector(".join-screen #join-user").addEventListener("click",function(){
		let username = app.querySelector(".join-screen #username").value;
		if(username.length == 0){
			return;//If no username is entered, exit the function
		}
		socket.emit("newuser",username); // Emit a "newuser" event with the username to the server
		uname = username; // Store the username in the variable
		app.querySelector(".join-screen").classList.remove("active");// Hide the join screen
		app.querySelector(".chat-screen").classList.add("active");// Show the chat screen
	});


	// Event listener for sending messages
	app.querySelector(".chat-screen #send-message").addEventListener("click",function(){
		let message = app.querySelector(".chat-screen #message-input").value;
		if(message.length  == 0){
			return;
		}
		renderMessage("my",{
			username:uname,
			text:message
		}); // Render the message locally as "my" type
		socket.emit("chat",{
			username:uname,
			text:message
		});// Emit a "chat" event with the username and message to the server
		app.querySelector(".chat-screen #message-input").value = ""; // Clear the message input field
	});

	
	// Event listener for exiting the chat
	app.querySelector(".chat-screen #exit-chat").addEventListener("click",function(){
		socket.emit("exituser",uname);
		window.location.href = window.location.href;
	});

	socket.on("update",function(update){
		renderMessage("update",update);
	});
	
	socket.on("chat",function(message){
		renderMessage("other",message);
	});


	// Function to render messages in the chat screen
	function renderMessage(type,message){
		let messageContainer = app.querySelector(".chat-screen .messages");
		if(type == "my"){
			let el = document.createElement("div");
			el.setAttribute("class","message my-message");
			el.innerHTML = `
				<div>
					<div class="name">You</div>
					<div class="text">${message.text}</div>
				</div>
			`;
			messageContainer.appendChild(el);
		} else if(type == "other"){
			let el = document.createElement("div");
			el.setAttribute("class","message other-message");
			el.innerHTML = `
				<div>
					<div class="name">${message.username}</div>
					<div class="text">${message.text}</div>
				</div>
			`;
			messageContainer.appendChild(el);
		} else if(type == "update"){
			let el = document.createElement("div");
			el.setAttribute("class","update");
			el.innerText = message;
			messageContainer.appendChild(el);
		}
		// scroll chat to end
		messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
	}

})();

//code for the client-side chat application.