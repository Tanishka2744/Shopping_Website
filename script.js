// navbar section

const hamburger = document.querySelector('.hamburger i');
const navList = document.querySelector('.navlist');

hamburger.parentElement.addEventListener('click', (e) => {
    e.preventDefault();

    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-xmark');

    navList.classList.toggle('navlist-active')
});

//  cart section

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            let quantity = prompt("How many pieces do you want?", "1");

            if (quantity === null || quantity.trim() === "" || isNaN(quantity) || quantity <= 0) {
                alert("Please enter a valid quantity!");
                return;
            };

            let productElement = button.closest('.card');
            let name = productElement.querySelector('.title').innerText;
            let price = productElement.querySelector('.amount').innerText;

            cart.push({ name, price, quantity: parseInt(quantity) });

            alert(`${name} added to cart (${quantity} pcs).`);
        });
    });

    const cartIcon = document.querySelector('.fa-shopping-cart');
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            if (cart.length === 0) {
                alert("Your cart is empty.");
                return;
            };

            let cartText = "Your Cart:\n\n";
            cart.forEach(item => {
                cartText += `${item.name} - ${item.price} * ${item.quantity}\n`
            });
            alert(cartText);
        });
    }
});

// user section

document.addEventListener("DOMContentLoaded", () => {
    const userIcon = document.querySelector('.fa-user');
    if (userIcon) {
        userIcon.addEventListener('click', () => {
            if (document.querySelector('.login-modal'))
                return;

            const modal = document.createElement('div');
            modal.classList.add('login-modal');
            modal.style.cssText = `
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(0,0,0,0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                font-family: Arial, sans-serif;
            `;

            modal.innerHTML = `
                <div style="
                    background: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    width: 300px;
                    box-shadow: 0 0 15px rgba(0,0,0,0.3);
                    text-align: center;
                    position: relative;
                ">
                    <!-- Close Cross -->
                    <span class="close-modal" style="
                        position: absolute;
                        top: 10px;
                        right: 15px;
                        font-size: 20px;
                        font-weight: bold;
                        color: #555;
                        cursor: pointer;
                    ">&times;</span>

                    <h2 id="form-title">Login</h2>
                    <div id="login-form">
                        <input type="text" placeholder="Username" style="width: 90%; padding: 8px; margin: 5px 0;"><br>
                        <input type="password" placeholder="Password" style="width: 90%; padding: 8px; margin: 5px 0;"><br>
                        <button id="login-btn" style="padding: 8px 15px; background: #4CAF50; color: white; border: none; border-radius: 5px;">Login</button>
                        <p style="margin-top: 10px;">Not registered? <a href="#" id="show-signup">Sign Up</a></p>
                    </div>

                    <div id="signup-form" style="display: none;">
                        <input type="text" placeholder="Full Name" style="width: 90%; padding: 8px; margin: 5px 0;"><br>
                        <input type="email" placeholder="Email" style="width: 90%; padding: 8px; margin: 5px 0;"><br>
                        <input type="password" placeholder="Password" style="width: 90%; padding: 8px; margin: 5px 0;"><br>
                        <button id="signup-btn" style="padding: 8px 15px; background: #2196F3; color: white; border: none; border-radius: 5px;">Sign Up</button>
                        <p style="margin-top: 10px;">Already have an account? <a href="#" id="show-login">Login</a></p>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

            //Sign Up
            modal.querySelector('#show-signup').addEventListener('click', (e) => {
                e.preventDefault();
                modal.querySelector('#login-form').style.display = 'none';
                modal.querySelector('#signup-form').style.display = 'block';
                modal.querySelector('#form-title').textContent = 'Sign Up';
            });

            // Login
            modal.querySelector('#show-login').addEventListener('click', (e) => {
                e.preventDefault();
                modal.querySelector('#signup-form').style.display = 'none';
                modal.querySelector('#login-form').style.display = 'block';
                modal.querySelector('#form-title').textContent = 'Login';
            });

            // Close button
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.remove();
            });

            //click to close
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });

            modal.querySelector('#login-btn').addEventListener('click', () => {
                alert("Login Successful!");
                modal.remove();
            });

            modal.querySelector('#signup-btn').addEventListener('click', () => {
                alert("Sign Up Successful!");
                modal.remove();
            });
        });
    }
});

