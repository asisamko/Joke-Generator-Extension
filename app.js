document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("joke-btn").addEventListener("click", function() {
    fetchJoke();
  });
});

function fetchJoke() {
  fetch("https://icanhazdadjoke.com/", { // Random API I found. You can replace and configurate this to a different API.
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("output-p").textContent = data.joke;
      console.log("Success! Yey")
      document.getElementById("joke-btn").textContent = "Generate again"
    })
    .catch(error => {
      console.error("Error fetching data:", error); // Check the console for errors
      document.getElementById("output-p").textContent = "Error fetching data.";
    });
}