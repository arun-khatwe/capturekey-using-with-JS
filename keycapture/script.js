// Get the output div element
const outputDiv = document.getElementById('output');

// Listen for keypress events on the whole document
document.addEventListener('keypress', function(event) {
  // Capture the key pressed (event.key) and display it
  const key = event.key;
  outputDiv.innerText += key; // Append the key to the output div
});
