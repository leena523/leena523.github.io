function validateForm() {

    // Get values
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirm = document.getElementById("confirm").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let age = document.getElementById("age").value;

    // Reset label colors
    resetLabels();

    let valid = true;

    // Username regex: lowercase letters + numbers, 4–12 chars
    let userRegex = /^[a-z0-9]{4,12}$/;

    if (username === "") {
        markEmpty("userLabel", "Please Enter Username");
        valid = false;
    } else if (!userRegex.test(username)) {
        markWarning("userLabel", "Please Enter a valid username");
        valid = false;
    }

    // Email regex
    let emailRegex = /^[^@]+@[^@]+\.(net|com|org|edu)$/;

    if (email === "") {
        markEmpty("emailLabel", "Please Enter Email");
        valid = false;
    } else if (!emailRegex.test(email)) {
        markWarning("emailLabel", "Please Enter a valid email");
        valid = false;
    }

    // Phone regex: (123)-456-7890
    let phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;

    if (phone === "") {
        markEmpty("phoneLabel", "Please Enter Phone Number");
        valid = false;
    } else if (!phoneRegex.test(phone)) {
        markWarning("phoneLabel", "Please Enter a valid phone number");
        valid = false;
    }

    // Password regex: letters, numbers, underscores, > 8 chars
    let passRegex = /^[A-Za-z0-9_]{9,}$/;

    if (password === "") {
        markEmpty("passLabel", "Please Enter Password");
        valid = false;
    } else if (!passRegex.test(password)) {
        markWarning("passLabel", "Invalid password");
        valid = false;
    }

    // Confirm password
    if (confirm === "") {
        markEmpty("confirmLabel", "Please Confirm Password");
        valid = false;
    } else if (password !== confirm) {
        alert("passwords do not match");
        valid = false;
    }

    // Gender
    if (!gender) {
        markEmpty("genderLabel", "Please Select Gender");
        valid = false;
    }

    // Age
    if (age === "") {
        markEmpty("ageLabel", "Please Select Age Group");
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }
}

function markEmpty(labelId, message) {
    let label = document.getElementById(labelId);
    label.classList.add("error");
    label.innerHTML = message;
}

function markWarning(labelId, message) {
    let label = document.getElementById(labelId);
    label.classList.add("warning");
    label.innerHTML = message;
}

function resetLabels() {
    let labels = document.querySelectorAll("label");
    labels.forEach(label => {
        label.classList.remove("error", "warning");
    });
}

function clearWarnings() {
    resetLabels();
}
