 //code for the time webworker
 // Function to handle the message received from the web worker
 function handleMessage(event) {
    const timestamp = event.data;
    document.getElementById("message").textContent = " " + timestamp;
  }

  // Create a new web worker
  const worker = new Worker("worker.js");

  // Handle the message received from the web worker
  worker.onmessage = handleMessage;

  



  // Code to convert text to uppercase using the web worker
  function convertToUppercase() {
    const text = document.getElementById("textInput").value;

    // Create a new web worker
    const worker = new Worker("worker.js");

    // Handle the message received from the web worker
    worker.onmessage = handleMessage;

    // Start the conversion by sending the text to the web worker
    worker.postMessage({ type: "uppercase", text: text });
  }

  // Function to reverse text using the web worker
  function reverseText() {
    const text = document.getElementById("textInput").value;

    // Create a new web worker
    const worker = new Worker("../worker.js");

    // Handle the message received from the web worker
    worker.onmessage = handleMessage;

    // Start the reversal by sending the text to the web worker
    worker.postMessage({ type: "reverse", text: text });
  }