// APPLICATION SCRIPT
function validateAge() {
    let value = document.getElementById("inputAge").value;
    let age = parseInt(value, 10);
    // Check if the input is empty
    if (value.trim() === "") {
        alert("You must enter an age");
        document.getElementById("inputAge").value = "";
        return;
    }
    // Check if age is a valid number type
    if (isNaN(age)) {
        alert("The age must be a number");
        document.getElementById("inputAge").value = "";
        return;
    }
    // Check if age is within the valid range
    if (age < 18 || age > 99) {
        alert("The age must be a number between 18 and 99");
        document.getElementById("inputAge").value = "";
        return;
    } 
    return age;
}
document.getElementById('inputPhoneNumber').placeholder = 'Format 111-222-3333';
function validatePhoneNumber() {

    let value = document.getElementById("inputPhoneNumber").value;
    // Regular expression for validating phone numbers in the format XXX XXX-XXXX
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (!phoneRegex.test(value)) {
        alert("Please enter a valid phone number in the format XXX-XXX-XXXX.");
        document.getElementById("inputPhoneNumber").value = "";
        return false;
    } 
    // If valid, return true
    return true;
}


// Text area script
const textarea = document.getElementById('textArea');
const charCounter = document.getElementById('charCounter');
const maxChars = 30;

textarea.addEventListener('input', function () {
    const currentLength = this.value.length;
    const remainingChars = maxChars - currentLength;
    charCounter.textContent = `${remainingChars} characters remaining`;
    
    // Prevent user from exceeding max character limit
    if (remainingChars < 0) {
        textarea.value = textarea.value.substring(0, 30);
    }
});
charCounter.textContent = `${maxChars} characters remaining`;


function getFormValue(e) {
    e.preventDefault();

    const allInputs = document.querySelectorAll('input, textarea, select');
 
    let formObj = {};
 
    allInputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            // Handle checkbox: collect checked values
            if (!formObj[input.name]) {
                formObj[input.name] = []; // Initialize as an array if it doesn't exist
            }
            if (input.checked) {
                formObj[input.name].push(input.value); // Add checked value
            }
        } else {
            formObj[input.id] = input.value;
        }
    });
    console.log(formObj);
}
// END APPLICATION SCRIPT