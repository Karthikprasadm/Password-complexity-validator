# Password Strength Checker 🔐

A modern web application that evaluates password strength based on various criteria and provides real-time feedback to users. Built with Python (Flask) for the backend and HTML/CSS/JavaScript for the frontend.

![Password Strength Checker Demo](https://i.imgur.com/example.png)

---

## 📋 Table of Contents
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Requirements](#-requirements)
- [Setup Instructions](#-setup-instructions)
- [Running the Application](#-running-the-application)
- [Password Evaluation Criteria](#-password-evaluation-criteria)
- [API Documentation](#-api-documentation)
- [Example Output](#-example-output)
- [FAQ](#-faq)
- [Contributing](#-contributing)
- [License](#-license)
- [Need Help?](#-need-help)

---

## 🚀 Features
- **Real-time password strength evaluation**
- **Visual strength indicator** (color-coded bar)
- **Detailed feedback and suggestions**
- **Score-based assessment** (0-5 points)
- **Password visibility toggle**
- **Modern and responsive UI**
- **API endpoint** for server-side validation
- **Debounced API calls** to prevent excessive requests
- **Cross-Origin Resource Sharing (CORS)** enabled
- **Error handling** for invalid inputs

---

## 🗂️ Project Structure
```
password-complexity-checker/
├── app.py              # Flask backend (API + serves frontend)
├── requirements.txt    # Python dependencies
├── static/
│   ├── style.css      # Styles
│   └── script.js      # Frontend logic
├── templates/
│   └── index.html     # Main page
└── README.md          # Project documentation
```

---

## 🛠️ Requirements
- Python 3.7+
- pip (Python package manager)
- Modern web browser (Chrome, Firefox, Safari, Edge)

---

## ⚡ Setup Instructions

### 1. **Clone the Repository**
```bash
git clone <repository-url>
cd password-complexity-checker
```

### 2. **Create a Virtual Environment (Recommended)**
```bash
# On Windows:
python -m venv venv
venv\Scripts\activate

# On macOS/Linux:
python3 -m venv venv
source venv/bin/activate
```

### 3. **Install Dependencies**
```bash
pip install -r requirements.txt
```

---

## ▶️ Running the Application

### 1. **Start the Flask Backend**
```bash
python app.py
```
- The server will start at `http://127.0.0.1:5000`
- Debug mode is enabled for development

### 2. **Open the Application in Your Browser**
- Go to [http://127.0.0.1:5000](http://127.0.0.1:5000)
- You should see the Password Strength Checker UI

---

## 🔍 Password Evaluation Criteria
The password strength is evaluated based on the following criteria:
- Length (minimum 8 characters)
- Presence of uppercase letters
- Presence of lowercase letters
- Presence of numbers
- Presence of special characters (e.g., !@#$%^&*)

Each criterion contributes 1 point to the total score (maximum 5 points).

**Strength Classification:**
- 0-2: Weak (Red)
- 3-4: Medium (Yellow)
- 5: Strong (Green)

---

## 📡 API Documentation

### Endpoint: `/check-password`
- **Method:** POST
- **Content-Type:** application/json
- **Request Body:**
  ```json
  {
    "password": "YourPassword123"
  }
  ```
- **Response:**
  ```json
  {
    "score": 4,
    "max_score": 5,
    "strength": "Medium",
    "feedback": ["Add special characters"]
  }
  ```

---

## 🧪 Example Output
```
Password: Password123
Score: 4/5
Strength: Medium
Feedback: Try adding a special character to make it stronger.
```

---

## ❓ FAQ

### Q: Why should I use this password checker?
A: This tool helps users create stronger passwords by providing real-time feedback and suggestions for improvement.

### Q: Is my password sent to any external servers?
A: No, all password checking is done locally on your machine through the Flask backend.

### Q: What makes a strong password?
A: A strong password should be at least 8 characters long and include a mix of uppercase letters, lowercase letters, numbers, and special characters.

### Q: Can I use this in my own project?
A: Yes! This project is open-source and can be used as a reference or integrated into other applications.

### Q: How do I report bugs or suggest features?
A: Please open an issue in the repository with a detailed description of the bug or feature request.

---

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

**Development Guidelines:**
- Follow PEP 8 style guide for Python code
- Use meaningful commit messages
- Add comments for complex logic
- Update documentation as needed

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙋‍♂️ Need Help?
- Open an issue in the repository
- Check the [FAQ](#-faq) section
- Review the [API Documentation](#-api-documentation)

---

## 🙏 Acknowledgments
- Flask framework
- Modern CSS features
- JavaScript ES6+
- All contributors and users of this project 