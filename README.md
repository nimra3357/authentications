# Login & Signup Form with Validation

This project features a **Login & Signup Form** with client-side validation using JavaScript. The form includes various validation checks for user input fields.

## Features

### **🔹 Login Form**
- Accepts **username** and **password** inputs.
- Checks if both fields are filled before submission.
- Displays an alert if any field is empty.
- Shows a success message if validation passes.

### **🔹 Signup Form**
- Accepts the following inputs:
  - **Full Name**
  - **Email**
  - **Password** & **Confirm Password**
  - **Date of Birth**
  - **Gender Selection (Dropdown)**
  - **Father’s Name**
  - **Privacy Policy Agreement (Checkbox)**
- Ensures **all fields** are filled before submission.
- Validates **email format** using a regular expression.
- Validates **password strength**:
  - At least **8 characters** long.
  - Must contain at least **one number, one uppercase letter, and one special character**.
- Confirms both passwords **match** before submission.
- Requires users to **agree to the Privacy Policy** before signing up.

## 🔹 Screenshots

Here are some validation examples:

### **1️⃣ Empty Fields Error**
![Empty Fields Error](screenshots/empty-fields-error.png)

### **2️⃣ Invalid Email Format**
![Invalid Email](screenshots/invalid-email.png)

### **3️⃣ Weak Password Warning**
![Weak Password](screenshots/weak-password.png)

### **4️⃣ Passwords Do Not Match**
![Password Mismatch](screenshots/password-mismatch.png)

### **5️⃣ Successful Signup**
![Successful Signup](screenshots/successful-signup.png)

## 🔹 Technologies Used
- **HTML** (for structure)
- **CSS** (for styling)
- **JavaScript** (for form validation)

## 🔹 How to Use
1. Open the `index.html` file in a browser.
2. Try entering invalid data to see validation messages.
3. Enter valid details to complete login or signup.

## 🔹 How to Upload to GitHub
### **1️⃣ Upload the README.md File**
1. Open your GitHub repository.
2. Click on **"Add file"** → **"Upload files"**.
3. Select `README.md` from your system.
4. Click **Commit changes**.

### **2️⃣ Upload Screenshots**
1. Inside your repository, click on **"Add file"** → **"Create new file"**.
2. Name the file **`.gitignore`** and add this line:
