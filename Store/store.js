// Define products array with name, price, image location and quantity
var products = [{
		name: "Basket Ball",
		price: 50,
		image: "basketball.jpg",
		quantity: 0
	},
	{
		name: "Volley Ball",
		price: 40,
		image: "volleyball.jpg",
		quantity: 0
	},
	{
		name: "Football",
		price: 60,
		image: "football.jpg",
		quantity: 0
	},
	{
		name: "Cricket Bat",
		price: 60,
		image: "bat.jpg",
		quantity: 0
	},
	{
		name: "Badminton Racket",
		price: 90,
		image: "badminton.jpg",
		quantity: 0
	},
	{
		name: "Mouse Pad",
		price: 30,
		image: "mousepad.jpg",
		quantity: 0
	}
];

// Get the products container, order items container, total amount and checkout button
var productsContainer = document.querySelector(".products-container");
var orderItems = document.querySelector(".order-items");
var total = document.querySelector(".total");
var checkoutButton = document.querySelector(".order-form button");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var nameLabel = document.querySelector("label[for='name']");
var emailLabel = document.querySelector("label[for='email']");

// Functon to create the products and display them 
function displayProducts() {
	for (var i = 0; i < products.length; i++) {
		// Create the product div
		var productDiv = document.createElement("div");
		productDiv.className = "product";

		// Create the product image
		var productImg = document.createElement("img");
		productImg.src = products[i].image;
		productImg.alt = "Product Image";

		// Create the product info div
		var productInfo = document.createElement("div");
		productInfo.className = "info";

		// Create the product name, price and add to cart button
		var productName = document.createElement("h3");
		productName.textContent = products[i].name;

		var productPrice = document.createElement("p");
		productPrice.className = "price";
		productPrice.textContent = "$" + products[i].price;

		var addButton = document.createElement("button");
		addButton.textContent = "Add to Cart";

		// 
		addButton.addEventListener("click", function() {
			addToCart(this);
			showForm();
			validateForm();
		});

		// Append the product name, price and add to cart button to the product info div
		productInfo.appendChild(productName);
		productInfo.appendChild(productPrice);
		productInfo.appendChild(addButton);

		// Append the product image and product info div to the product div
		productDiv.appendChild(productImg);
		productDiv.appendChild(productInfo);

		// Append the product div to the products container
		productsContainer.appendChild(productDiv);
	}
}

// Function to add the product to the cart
function addToCart(button) {

	// Get the product name from the button's parent element
	var index = button.parentElement.firstChild.textContent;

	for (var i = 0; i < products.length; i++) {

		// If the product name matches the index, increment the quantity
		if (products[i].name == index) {
			products[i].quantity++;

			// Update the order items and total amount
			updateOrderItems();
			updateTotal();

			// Enable the checkout button
			checkoutButton.disabled = false;
			checkoutButton.textContent = "Check Out";
			break;
		}
	}
}

// Function to update the order items
function updateOrderItems() {
	// Remove all the order items by setting the innerHTML to empty
	orderItems.innerHTML = "";

	// Loop through the products array
	for (var i = 0; i < products.length; i++) {
		// If the quantity is greater than 0, create the order item
		if (products[i].quantity > 0) {

			// Create the order item div, image, name and quantity, price and remove button
			var orderItemDiv = document.createElement("div");
			orderItemDiv.className = "order-item";

			var orderItemImg = document.createElement("img");
			orderItemImg.src = products[i].image;
			orderItemImg.alt = "Order Item Image";

			var orderItemNameQuantity = document.createElement("p");
			orderItemNameQuantity.textContent =
				products[i].name + " x " + products[i].quantity;

			var orderItemPrice = document.createElement("p");
			orderItemPrice.textContent = "$" + products[i].price * products[i].quantity;

			var removeButton = document.createElement("button");
			removeButton.textContent = "Remove";

			// Add event listener to the remove button
			removeButton.addEventListener("click", function() {
				removeFromCart(this);
				hideForm();

			});

			// Append the image, name and quantity, price and remove button to the order item div
			orderItemDiv.appendChild(orderItemImg);
			orderItemDiv.appendChild(orderItemNameQuantity);
			orderItemDiv.appendChild(orderItemPrice);
			orderItemDiv.appendChild(removeButton);

			// Append the order item div to the order items container
			orderItems.appendChild(orderItemDiv);
		}
	}
}

// Function to remove the product from the cart
function removeFromCart(button) {

	// Get the product name from the button's parent element
	var index = button.parentElement.firstChild.nextSibling.textContent.split(
		" x "
	)[0];

	// Loop through the products array
	for (var i = 0; i < products.length; i++) {
		// If the product name matches the index, decrement the quantity
		if (products[i].name == index) {
			products[i].quantity--;

			// Update the order items and total amount
			updateOrderItems();
			updateTotal();

			// If the total amount is 0, disable the checkout button and display message
			if (total.textContent == "Total: $0") {
				checkoutButton.disabled = true;
				checkoutButton.textContent = "Order is empty";
				nameInput.value = "";
				emailInput.value = "";
			}

			break;
		}
	}
}

// Function to update the total amount
function updateTotal() {
	// Set the total amount to 0
	var totalAmount = 0;

	// Loop through the products array
	for (var i = 0; i < products.length; i++) {
		totalAmount += products[i].price * products[i].quantity;
	}

	// Update the total amount
	total.textContent = "Total: $" + totalAmount;
	document.getElementById("total").value = totalAmount;
}

// Function to show the form
function showForm() {
	if (total.textContent != "Total: $0") {
		// Set the display property of the form elements to inline-block
		nameInput.style.display = "inline-block";
		emailInput.style.display = "inline-block";
		nameLabel.style.display = "inline-block";
		emailLabel.style.display = "inline-block";
	}
}

function hideForm() {
	if (total.textContent == "Total: $0") {
		// Set the display property of the form elements to none
		nameInput.style.display = "none";
		emailInput.style.display = "none";
		nameLabel.style.display = "none";
		emailLabel.style.display = "none";
	}
}

function validateForm() {
	// Get the name and email value
	var nameValue = nameInput.value;
	var emailValue = emailInput.value;

	// Regular expression for email validation
	var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

	// If the name and email is not empty and email is valid, enable the checkout button
	if (nameValue != "" && emailValue != "" && emailRegex.test(emailValue)) {
		checkoutButton.disabled = false;
		checkoutButton.textContent = "Check Out";
	} else {
		checkoutButton.disabled = true;
		checkoutButton.textContent = "Please enter a valid name and email";
	}
}

// Call the displayProducts function
displayProducts();

// Add event listener to the name and email input
nameInput.addEventListener("input", function() {
	validateForm();
});

// Add event listener to the email input
emailInput.addEventListener("input", function() {
	validateForm();
});