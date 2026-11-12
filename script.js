/* Sign Up Form Validation */
function validateSignup() {

    // Get user input values
    var name = document.getElementById("fullname").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    // Check if name field is empty
    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    // Check if phone number contains 10 digits
    if (phone.length !== 10) {
        alert("Phone number must be 10 digits");
        return false;
    }

    // Check password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    // Display success message
    alert("Sign up successful");
    return true;
}

/* Login Form Validation */
function validateLogin() {

    // Get login form values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if required fields are empty
    if (email === "" || password === "") {

        alert("Please fill all fields");
        return false;
    }

    // Display success message
    alert("Login successful");
    return true;
}

/* Dynamic Welcome Message */
function displayWelcome() {

    // Find welcome message element
    var message = document.getElementById("welcomeMessage");

    // Display message if element exists
    if (message) {
        message.innerHTML ="Where Every Blood Donation can Save Lives!";
        message.style.color = "#c1121f";
        message.style.fontSize = "22px";
        message.style.fontWeight = "bold";
    }
}

/* Change Image Border Style */
function changeImageBorder() {
    var img =
    document.getElementById("donationImage");
    img.style.border =
    "5px solid #e63946";
    img.style.width =
    "450px";
}

/* Change About Title Color */
function changeTitleColor() {

    document.getElementById("aboutTitle").style.color =
    "#e63946";
}
// Blood Donation Message
function showMessage() {

    alert(
    "Thank you for helping save lives through blood donation!");
}

/* Donor Counter Function */
function donorCounter() {

    // Initialize counter value
    var total = 0;

    // Calculate total using a loop
    for (var i = 1; i <= 5; i++) {

        total = total + i;
    }

    // Display result
    alert("Total donor score: " + total);
}

// Search Donor Function
function searchDonor() {
    var bloodType =
    document.getElementById("search-blood").value;
    var result =
    document.getElementById("searchResult");
    if (bloodType === "O+") {
        result.innerHTML =
        "Donor Found: Ahmed Al-Ghamdi | Phone: 0501234567 | City: Jeddah";
        result.style.color = "green";
    }
    else if (bloodType === "A-") {
        result.innerHTML =
        "Donor Found: Sara Al-Harbi | Phone: 0559876543 | City: Makkah";
        result.style.color = "green";
    }
    else if (bloodType === "B+") {
        result.innerHTML =
        "Donor Found: Omar Al-Otaibi | Phone: 0541122334 | City: Riyadh";
        result.style.color = "green";
    }
    else {
        alert("No donor available for this blood type.");
        result.innerHTML =
        "No donor available.";
        result.style.color = "red";
    }
    return false;
}
/* Run Welcome Message When Page Loads */
window.onload = displayWelcome;