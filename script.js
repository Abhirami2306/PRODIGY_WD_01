// Change navigation menu background color on scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("scroll-active", window.scrollY > 0);
});

// JavaScript to handle opening detailed page on "Explore More" button click
document.addEventListener("DOMContentLoaded", function () {
  var products = [
    {
      name: "Acoustic Guitar",
      url: "https://yamahamusicstore.in/musical-instruments/guitars/acoustic-guitars.html",
    },
    {
      name: "Drum Kit",
      url: "https://yamahamusicstore.in/musical-instruments/drums/drum-kits.html",
    },
    {
      name: "Keyboard",
      url: "https://yamahamusicstore.in/musical-instruments/keyboards/digital-pianos.html",
    },
    // Add more products as needed
  ];

  var productItems = document.querySelectorAll(".product-item");

  productItems.forEach(function (item, index) {
    var exploreButton = item.querySelector(".explore-button");

    exploreButton.addEventListener("click", function () {
      var url = products[index].url;
      window.open(url, "_blank");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("loginModal");
  var loginLink = document.getElementById("loginLink");
  var modalTitle = document.getElementById("modalTitle");
  var loginForm = document.getElementById("loginForm");
  var registerForm = document.getElementById("registerForm");
  var showLoginFormButton = document.getElementById("showLoginForm");
  var showRegisterFormButton = document.getElementById("showRegisterForm");

  // Show login form and hide registration form
  showLoginFormButton.addEventListener("click", function () {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    modalTitle.textContent = "Sign In";
  });

  // Show registration form and hide login form
  showRegisterFormButton.addEventListener("click", function () {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    modalTitle.textContent = "Sign Up";
  });

  // Open modal on login link click
  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "block";
  });

  // Close modal on close button click
  var closeButtons = document.querySelectorAll(".close");
  closeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  });

  // Handle login form submission
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("Login form submitted with:", username, password);
    // Perform login logic (e.g., AJAX request)
    // Simulate successful login
    modal.style.display = "none";
    loginLink.textContent = "Logout";
  });

  // Handle register form submission
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Register form submitted with:", newUsername, newPassword);
    // Perform registration logic (e.g., AJAX request)
    // Simulate successful registration
    modal.style.display = "none";
    loginLink.textContent = "Logout";
  });
});
