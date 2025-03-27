function submitForm(event) {
  event.preventDefault(); // Prevent page refresh

  const username = document.getElementById("username").value;

  // Show alert with username only
  alert(`Welcome to the Universe!\nUsername: ${username}`);

  // Log values to the console
  console.log(`Username: ${username}`);

  // Update the username display at the top
  const userInfo = document.getElementById("user-info");
  userInfo.innerHTML = `<h2>Welcome to the Universe!</h2><p>Logged in as: <strong>${username}</strong></p>`;
  userInfo.style.display = "block"; // Make it visible
}

// Add event listener to the form
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("login-form").addEventListener("submit", submitForm);
});
