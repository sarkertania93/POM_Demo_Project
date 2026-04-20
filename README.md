# Playwright Test Automation – SauceDemo (POM Framework)

## 📌 Project Overview
This project demonstrates **Playwright test automation** using the **Page Object Model (POM)** design pattern.  
We are testing the [SauceDemo](https://www.saucedemo.com/) application with two main scenarios:

- **Login Test** – Sign in with valid credentials (`standard_user` / `secret_sauce`).  
- **Cart Test** – Select multiple products (first N = 3 items) and verify they are added to the cart.  

---

## 🔹 Test Scenarios

### Login Test
1. Navigate to [https://www.saucedemo.com/](https://www.saucedemo.com/)  
2. Enter username: `standard_user`  
3. Enter password: `secret_sauce`  
4. Verify successful login by checking product list visibility.  

### Cart Test (Multiple Products)
1. Login with valid credentials.  
2. Select first **N products** using a loop (`nth(index)`).  
3. Navigate to cart.  
4. Verify cart contains **N items**.  

---

## 🏗️ Page Object Model (POM) Layers
- **Pages Layer** → Encapsulates UI elements and actions (`LoginPage`, `ProductsPage`, `CartPage`).  
- **Tests Layer** → Contains actual test cases (`login.test.ts`, `cart.test.ts`).  
- **Utils Layer** → Stores reusable configs like credentials (`testUtils.ts`).  

---

## ✅ Benefits of This Framework
- Clean separation of concerns (Pages vs Tests).  
- Easy to extend for new test cases.  
- Scalable for larger projects.  
- Beginner-friendly for teaching automation concepts.  
```
