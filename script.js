const formContainer = document.querySelector(".form_container"),
      signupBtn = document.querySelector("#signup"),
      loginBtn = document.querySelector("#login"),
      loginForm = document.getElementById("loginForm"),
      signupForm = document.getElementById("signupForm");

// Toggle between Login and Signup forms
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

// Login Form Validation
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (!username || !password) {
        alert("Username and password are required.");
        return;
    }

    alert("Login successful!");
});

// Signup Form Validation
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmP = document.getElementById("confirmPassword").value;
    const dob = document.getElementById("signupDob").value;
    const gender = document.getElementById("signupGender").value;
    const fname = document.getElementById("fathername").value;
    const terms = document.getElementById("agreeTerms").checked;

    // Validation Checks
    if (!name || !email || !password || !confirmP || !dob || !gender || !fname) {
        alert("All fields are required.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validatePassword(password)) {
        alert("Passwords must be 8 or more digits and contain at least one special character and number. Password should also contain capital letters.");
        return;
    }

    if (password !== confirmP) {
        alert("Both passwords do not match.");
        return;
    }

    if (!terms) {
        alert("Please agree to Terms and Conditions.");
        return;
    }

    alert("You have successfully signed up!");
});

// Helper Functions
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    return regex.test(password);
}
