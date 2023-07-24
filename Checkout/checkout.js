function getDetailsFromURL() {
	// Get the URL parameters
	let params = new URLSearchParams(window.location.search);
	// Get the details from the URL parameters
	let name = params.get("name");
	let email = params.get("email");
	let totalValue = params.get("total");

	// Get the input elements and the total p element
	let nameInput = document.querySelector("#name");
	let emailInput = document.querySelector("#email");
	let total = document.querySelector(".total");

	// Set the value of the input elements and the total p element
	nameInput.value = name;
	emailInput.value = email;
	total.textContent = "Total: $" + totalValue;
};

// Call the function getDetailsFromURL
getDetailsFromURL();


// Get all the buttons with the class name save-billing-button or save-payment-button
let buttons = document.querySelectorAll(".save-billing-button, .save-payment-button");

// Get the detail-summary div
let detailSummary = document.querySelector(".detail-summary");

// Get the pay-button
let payButton = document.querySelector(".pay-button");


function checkSummary() {
	// If all the summary p tags have text content, enable the button and change the text to "Pay"
	if (nameSummary.textContent && contactSummary.textContent && addressSummary.textContent) {
		payButton.disabled = false;
		payButton.textContent = "Pay";
	} else {
		// If any of the summary p tags is empty, disable the button and change the text to "Fill the details to pay"
		payButton.disabled = true;
		payButton.textContent = "Fill the details to pay";
	}
}

payButton.addEventListener("click", function () {
	// If the button is enabled, show the payment confirmation message and redirect to the home page after 3 seconds
	if (!payButton.disabled) {
		payButton.classList.add("hidden");
		let paymentConfirmation = document.querySelector(".payment-cofirmation");
		paymentConfirmation.classList.remove("hidden");
		setTimeout(function () {
			window.location.href = "../MainPage/MainPage.html";
		}, 3000);
	}
});


// Selects the summary p tags
let nameSummary = document.querySelector(".name-summary");

let contactSummary = document.querySelector(".contact-summary");

let addressSummary = document.querySelector(".address-summary");

let paymentSummary = document.querySelector(".payment-summary")

// Loop through the buttons and add a click event listener to each one
buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		// Get the parent div of the button
		let parentDiv = button.parentElement;
		// Get all the children of the parent div
		let children = parentDiv.children;
		// Initialize a variable to store the validation status
		let valid = true;
		// Loop through the children and validate them if they are not the section-heading
		for (let i = 0; i < children.length; i++) {
			let child = children[i];
			if (child.className !== "section-heading") {
				// Validate the input value if it is an input element
				if (child.tagName === "INPUT") {
					// If any validation fails, set valid to false
					if (!validateInput(child)) {
						valid = false;
					} else {
						// If validation passes, remove the class .invalid from the input and add the class .valid
						child.classList.remove("invalid");
						child.classList.add("valid");
					}
				}
			}
		}
		if (valid) {
			checkSummary();
			for (let i = 0; i < children.length; i++) {
				let child = children[i];
				if (child.className !== "section-heading") {
					// Hide the element by adding the class .hidden
					child.classList.add("hidden");

					if (child.name === "name") {
						nameSummary.textContent = "Name: " + child.value;
						nameSummary.classList.remove("hidden");
					}
					if (child.name === "email") {
						contactSummary.textContent = "Email: " + child.value;
						contactSummary.classList.remove("hidden");
					}
					if (child.name === "address") {
						addressSummary.textContent = "Address: " + child.value;
						addressSummary.classList.remove("hidden");
					}
					if (child.name === "cardnumber") {
						paymentSummary.textContent = "Card Number: " + child.value;
						paymentSummary.classList.remove("hidden");
					}
				}
			}

		}
	});
});


// Select all the input elements
let inputs = document.querySelectorAll("input");

// Loop through the input elements and add an input event listener to each one
inputs.forEach(function (input) {
	input.addEventListener("input", function () {

		validateInput(input);
	});
});

// Select all the section-heading elements
let headings = document.querySelectorAll(".section-heading");

// Loop through the section-heading elements and add a click event listener to each one
headings.forEach(function (heading) {
	heading.addEventListener("click", function () {

		let parentDiv = heading.parentElement;

		let children = parentDiv.children;


		for (let i = 0; i < children.length; i++) {
			let child = children[i];
			child.classList.remove("hidden");
		}
		if (heading.textContent === "Billing Address") {
			addressSummary.textContent = "";
		}
		if (heading.textContent === "Contact Details") {
			contactSummary.textContent = "";
			nameSummary.textContent = "";
		}
		if (heading.textContent === "Payment") {
			paymentSummary.textContent = "";
		}
	});
});

// Function to validate the input
function validateInput(input) {

	// Get the name and value of the input
	let name = input.name;
	let value = input.value;

	// Set the regex for email, card number, cvv and phone number
	let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

	let cardNumberRegex = /^\d{16}$/;

	let cvvRegex = /^\d{3}$/;

	let phoneRegex = /^\d{10}$/;

	let expiryRegex = /^\d{2}\/\d{2}$/;

	// Get the error message element
	let errorMessage = input.parentElement.querySelector(".error-message");

	// If the value is empty, add the class .invalid to the input and remove the class .valid
	if (value === "") {
		input.classList.add("invalid");
		input.classList.remove("valid");
		errorMessage.classList.remove("hidden");
		return false;
	} else {
		input.classList.remove("invalid");
		input.classList.add("valid");
		errorMessage.classList.add("hidden");
	}

	// Validate the email
	if (name === "email") {
		if (!emailRegex.test(value)) {
			input.classList.add("invalid");
			input.classList.remove("valid");
			errorMessage.classList.remove("hidden");
			return false;
		} else {
			input.classList.remove("invalid");
			input.classList.add("valid");
			errorMessage.classList.add("hidden");
		}
	}

	// Validate the card number
	if (name === "cardnumber") {
		if (!cardNumberRegex.test(value)) {
			input.classList.add("invalid");
			input.classList.remove("valid");
			errorMessage.classList.remove("hidden");
			return false;
		} else {
			input.classList.remove("invalid");
			input.classList.add("valid");
			errorMessage.classList.add("hidden");
		}
	}

	// Validate the expiry date
	if (name === "expiry") {
		if (!expiryRegex.test(value)) {
			input.classList.add("invalid");
			input.classList.remove("valid");
			errorMessage.classList.remove("hidden");
			return false;
		} else {
			input.classList.remove("invalid");
			input.classList.add("valid");
			errorMessage.classList.add("hidden");
		}
	}

	// Validate the cvv
	if (name === "cvv") {
		if (!cvvRegex.test(value)) {
			input.classList.add("invalid");
			input.classList.remove("valid");
			errorMessage.classList.remove("hidden");
			return false;
		} else {
			input.classList.remove("invalid");
			input.classList.add("valid");
			errorMessage.classList.add("hidden");
		}
	}

	// Validate the phone number
	if (name === "phone") {
		if (!phoneRegex.test(value)) {
			input.classList.add("invalid");
			input.classList.remove("valid");
			errorMessage.classList.remove("hidden");
			return false;
		} else {
			input.classList.remove("invalid");
			input.classList.add("valid");
			errorMessage.classList.add("hidden");
		}
	}

	// If all the validations pass, return true
	return true;
}