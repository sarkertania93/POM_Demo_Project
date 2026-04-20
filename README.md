Playwright Test Automation – SauceDemo (POM Framework)
📌 Project Overview
  This project demonstrates Playwright test automation using the Page Object Model (POM) design pattern.
  We are testing the SauceDemo application with two main scenarios:
  
  Login Test – Sign in with valid credentials (standard_user / secret_sauce).
  
  Cart Test – Select multiple products (first N(3) items) and verify they are added to the cart.
________________________________________________________________________________________________________________________________________________________________________________________________________________________

📂 Project Structure
Code
project-root/
│── tests/
│   ├── login.test.ts        # Login test case
│   └── cart.test.ts         # Cart test case (multiple products)
│── pages/
│   ├── LoginPage.ts         # Page Object for login page
│   ├── ProductsPage.ts      # Page Object for products page
│   └── CartPage.ts          # Page Object for cart page
│── utils/
│   └── testUtils.ts         # Utility file (credentials, configs)
│── playwright.config.ts     # Playwright configuration
│── README.md                # Project documentation
________________________________________________________________________________________________________________________________________________________________________________________________________________________

🔹 Test Scenarios
Login Test
    Navigate to https://www.saucedemo.com/
    Enter username: standard_user
    Enter password: secret_sauce
    Verify successful login by checking product list visibility.

Cart Test (Multiple Products)
    Login with valid credentials.
    Select first N products using a loop (nth(index)).
    Navigate to cart.
    Verify cart contains N items.
________________________________________________________________________________________________________________________________________________________________________________________________________________________

🏗️ Page Object Model (POM) Layers
  Pages Layer → Encapsulates UI elements and actions (LoginPage, ProductsPage, CartPage).
  
  Tests Layer → Contains actual test cases (login.test.ts, cart.test.ts).
  
  Utils Layer → Stores reusable configs like credentials (testUtils.ts).

________________________________________________________________________________________________________________________________________________________________________________________________________________________

✅ Benefits of This Framework
  Clean separation of concerns (Pages vs Tests).
  
  Easy to extend for new test cases.
  
  Scalable for larger projects.
  
  Beginner-friendly for teaching automation concepts.
