var products = [
    {
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


    var productsContainer = document.querySelector(".products-container");
    var orderItems = document.querySelector(".order-items");
    var total = document.querySelector(".total");
    var checkoutButton = document.querySelector(".order-form button");
    var nameInput = document.querySelector("#name");
    var emailInput = document.querySelector("#email");
    var nameLabel = document.querySelector("label[for='name']");
    var emailLabel = document.querySelector("label[for='email']");


    function displayProducts() {
      for (var i = 0; i < products.length; i++) {
        var productDiv = document.createElement("div");
        productDiv.className = "product";

        var productImg = document.createElement("img");
        productImg.src = products[i].image;
        productImg.alt = "Product Image";

        var productInfo = document.createElement("div");
        productInfo.className = "info";

        var productName = document.createElement("h3");
        productName.textContent = products[i].name;

        var productPrice = document.createElement("p");
        productPrice.className = "price";
        productPrice.textContent = "$" + products[i].price;

        var addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        
        addButton.addEventListener("click", function() {
          addToCart(this);
          showForm();
          validateForm();
        });

        productInfo.appendChild(productName);
        productInfo.appendChild(productPrice);
        productInfo.appendChild(addButton);

        productDiv.appendChild(productImg);
        productDiv.appendChild(productInfo);

        productsContainer.appendChild(productDiv);
      }
    }

    function addToCart(button) {
      var index = button.parentElement.firstChild.textContent;

      for (var i = 0; i < products.length; i++) {
        if (products[i].name == index) {
          products[i].quantity++;

          updateOrderItems();
          updateTotal();
          
          checkoutButton.disabled = false;
          checkoutButton.textContent = "Check Out";
          break;
        }
      }
    }

    function updateOrderItems() {
      orderItems.innerHTML = "";

      for (var i = 0; i < products.length; i++) {
        if (products[i].quantity > 0) {

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

          removeButton.addEventListener("click", function() {
            removeFromCart(this);
            hideForm();

          });

          orderItemDiv.appendChild(orderItemImg);
          orderItemDiv.appendChild(orderItemNameQuantity);
          orderItemDiv.appendChild(orderItemPrice);
          orderItemDiv.appendChild(removeButton);

          orderItems.appendChild(orderItemDiv);
        }
      }
    }


    function removeFromCart(button) {
      var index = button.parentElement.firstChild.nextSibling.textContent.split(
        " x "
      )[0];

      for (var i = 0; i < products.length; i++) {
        if (products[i].name == index) {
          products[i].quantity--;

          updateOrderItems();
          updateTotal();

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

    function updateTotal() {
      var totalAmount = 0;

      for (var i = 0; i < products.length; i++) {
        totalAmount += products[i].price * products[i].quantity;
      }

      total.textContent = "Total: $" + totalAmount;
      document.getElementById("total").value = totalAmount;
    }

    function showForm() {
      if (total.textContent != "Total: $0") {
        nameInput.style.display = "inline-block";
        emailInput.style.display = "inline-block";
        nameLabel.style.display = "inline-block";
        emailLabel.style.display = "inline-block";
      }
    }

    function hideForm() {
      if (total.textContent == "Total: $0") {
        nameInput.style.display = "none";
        emailInput.style.display = "none";
        nameLabel.style.display = "none";
        emailLabel.style.display = "none";
      }
    }

    function validateForm() {
      var nameValue = nameInput.value;
      var emailValue = emailInput.value;

      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (nameValue != "" && emailValue != "" && emailRegex.test(emailValue)) {
        checkoutButton.disabled = false;
        checkoutButton.textContent = "Check Out";
      } else {
        checkoutButton.disabled = true;
        checkoutButton.textContent = "Please enter a valid name and email";
      }
    }

    displayProducts();

    nameInput.addEventListener("input", function() {
      validateForm();
    });


    emailInput.addEventListener("input", function() {
      validateForm();
    });

    