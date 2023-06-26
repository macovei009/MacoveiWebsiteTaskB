// Web worker time code

// Function to send a message with the current timestamp to the main thread
function sendMessage() {
    const timestamp = new Date().toLocaleTimeString();
    self.postMessage(timestamp);
  }
  
  // Send a message every 2 seconds
  setInterval(sendMessage, 2000);
  

  // Web worker convert to upper case code

// Function to convert text to uppercase
function convertToUppercase(text) {
    return text.toUpperCase();
  }
  
  // Function to reverse text
  function reverseText(text) {
    return text.split("").reverse().join("");
  }
  
  // Handle messages received from the main thread
  self.onmessage = function(event) {
    const { type, text } = event.data;
    let result;
  
    if (type === "uppercase") {
      result = convertToUppercase(text);
    } else if (type === "reverse") {
      result = reverseText(text);
    }
  
    self.postMessage(result);
  };
  