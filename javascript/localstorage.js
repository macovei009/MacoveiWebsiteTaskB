// Function to save the user's name to Local Storage
function saveName() {
    var name = document.getElementById('nameInput').value;
    localStorage.setItem('name', name);
    alert('Name saved to Local Storage!');
  }

  // Function to retrieve and display the user's name from Local Storage
  function displayName() {
    var storedName = localStorage.getItem('name');
    document.getElementById('output').textContent = storedName;
  }
   // Display the stored name on page load
   window.onload = displayName;