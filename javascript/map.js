//code for the geolocation map in the skills page
    
        function getLocation() {
          // Check if geolocation is supported by the browser
          if (navigator.geolocation) {
             // Request the current position of the user
            navigator.geolocation.getCurrentPosition(showPosition, showError);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
        }
    
        function showPosition(position) {
            // Retrieve latitude and longitude from the position object
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
    
            // Create a Leaflet map and set its view to the user's location
          const map = L.map("map").setView([latitude, longitude], 13);
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          }).addTo(map);
          L.marker([latitude, longitude]).addTo(map);
    
          // Display the latitude and longitude in the result element
          const resultElement = document.getElementById("result");
          resultElement.textContent = "Latitude: " + latitude + ", Longitude: " + longitude;
        }
    
        function showError(error) {
          let message;
           // Handle different error codes and provide corresponding error messages
          switch (error.code) {
            case error.PERMISSION_DENIED:
              message = "User denied the request for Geolocation.";
              break;
            case error.POSITION_UNAVAILABLE:
              message = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              message = "The request to get user location timed out.";
              break;
            case error.UNKNOWN_ERROR:
              message = "An unknown error occurred.";
              break;
          }
    
          const resultElement = document.getElementById("result");
          resultElement.textContent = "Error: " + message;
        }
  