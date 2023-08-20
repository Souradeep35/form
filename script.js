document.getElementById("submitBtn").addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const image = document.getElementById("image").value;

  const gender = document.querySelector('input[name="gender"]:checked');
  const skills = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.value);

  const outputDiv = document.getElementById("output");
  let outputContent = "";

  if (!name || !email || !website || !image || !gender || skills.length === 0) {
    outputContent = "<p class='error-message'>Please enter valid data for all fields.</p>";
  } else if (!email.includes("@")) {
    outputContent = "<p class='error-message'>Please enter a valid email address.</p>";
  } else {
    outputContent = `
      <div class="output-content">
        <div class="output-image">
          <img src="${image}" alt="User Image" class="output-image">
        </div>
        <div class="output-details">
          <h3>Registration Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>
          <p><strong>Gender:</strong> ${gender.value}</p>
          <p><strong>Skills:</strong> ${skills.join(', ')}</p>
        </div>
      </div>
    `;
  }

  outputDiv.innerHTML = outputContent;
  outputDiv.style.display = "block"; // Show the output div
});

// Clear Form Button
document.getElementById("clearFormBtn").addEventListener("click", function() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("website").value = "";
  document.getElementById("image").value = "";
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
  document.getElementById("other").checked = false;
  document.getElementById("java").checked = false;
  document.getElementById("html").checked = false;
  document.getElementById("css").checked = false;
  document.getElementById("output").style.display = "none";
});
