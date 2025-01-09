// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    // Get input values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;

    // Validation
    if (!name || !phone || !date) {
      event.preventDefault(); // Stop form submission
      alert("Please fill out all fields.");
      return;
    }

    // Optional: Check if phone number is valid
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      event.preventDefault();
      alert("Please enter a valid phone number.");
      return;
    }

    alert("Form submitted successfully!");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");

  // Change button color on hover
  button.addEventListener("mouseover", function () {
    button.style.backgroundColor = "#555";
  });

  button.addEventListener("mouseout", function () {
    button.style.backgroundColor = "#333";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/yourformid", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        alert("Your booking has been sent successfully!");
        form.reset(); // Clear the form
      } else {
        alert("There was an issue sending your booking. Please try again.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from submitting normally

    // Show a confirmation message
    const confirmationMessage = document.createElement("p");
    confirmationMessage.textContent = "Thank you! Your booking has been received.";
    confirmationMessage.style.color = "green";

    form.parentNode.insertBefore(confirmationMessage, form.nextSibling);

    // Optionally, clear the form
    form.reset();
  });
});

