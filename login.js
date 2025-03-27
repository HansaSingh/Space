function submitForm(event) {
  event.preventDefault(); 

  const username = document.getElementById("username").value;


  alert(`Welcome to the Universe!\nUsername: ${username}`);


  console.log(`Username: ${username}`);


  const userInfo = document.getElementById("user-info");
  userInfo.innerHTML = `<h2>Welcome to the Universe!</h2><p>Logged in as: <strong>${username}</strong></p>`;
  userInfo.style.display = "block"; 
}


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("login-form").addEventListener("submit", submitForm);
});
