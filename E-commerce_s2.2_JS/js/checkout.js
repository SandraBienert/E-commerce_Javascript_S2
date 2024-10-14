(() => {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.from(forms).forEach(form => {
		form.addEventListener('submit', event => {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			}

			form.classList.add('was-validated')
		}, false)
	})
})()

// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	// Clear previous error messages
	errorName.innerText = "";
	errorEmail.innerText = "";

	// Validate Name
	if (fName.value.trim() == "") {
		error++;
		errorName.innerText = "Name is required.";
	}

	// Validate Email
	if (fEmail.value.trim() == "") {
		error++;
		errorEmail.innerText = "Email is required.";
	} else {
		// Basic email validation
		var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(fEmail.value.trim())) {
			error++;
			errorEmail.innerText = "Please enter a valid email address.";
		}
	}

	// Final error check and alert
	if (error > 0) {
		alert("Please fix the errors highlighted on the form.");
	} else {
		alert("OK");
	}
}


