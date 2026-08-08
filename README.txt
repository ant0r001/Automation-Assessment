 UI Automation Assessment

 Technology

- JavaScript
- Node.js
- Selenium WebDriver
- Google Chrome

 Website

https://www.saucedemo.com/

 Test Cases

 Q1 - Locked Out User Login

- Open SauceDemo website.
- Login with `locked_out_user`.
- Verify the locked-out error message.
- Close the browser.

Run:
node Q1.js

Q2 - Purchase Flow

- Login with standard_user.
- Open the hamburger menu.
- Reset the App State.
- Add any three products to the cart.
- Navigate to the checkout page.
- Verify the product names and total price.
- Finish the purchase.
- Verify the successful order message.
- Reset the App State again.
- Logout.

Run:
node Q2.js

Q3 - Filter and Purchase Flow

- Login with performance_glitch_user.
- Reset the App State.
- Filter products by Name from Z to A.
- Add the first product to the cart.
- Navigate to the checkout page.
- Verify the product name and total price.
- Finish the purchase.
- Verify the successful order message.
- Reset the App State again.
- Logout.

Run:

node Q3.js
