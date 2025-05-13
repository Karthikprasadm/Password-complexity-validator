# How to Run the Password Strength Checker 🚀

This guide will walk you through the process of setting up and running the Password Strength Checker application.

## Prerequisites

Before you begin, make sure you have the following installed:
- Python 3.7 or higher
- pip (Python package manager)
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Git (optional, for cloning the repository)

## Step-by-Step Guide

### 1. Clone or Download the Repository

**Option 1: Using Git**
```bash
git clone <repository-url>
cd password-complexity-checker
```

**Option 2: Manual Download**
- Download the ZIP file from the repository
- Extract it to your desired location
- Open a terminal/command prompt in the extracted folder

### 2. Set Up Python Virtual Environment

**Windows:**
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
venv\Scripts\activate
```

**macOS/Linux:**
```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate
```

You should see `(venv)` at the beginning of your command prompt, indicating that the virtual environment is active.

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

Expected output:
```
Collecting flask>=2.2.5
Collecting flask-cors>=3.0.10
Installing collected packages: flask, flask-cors
Successfully installed flask-2.2.5 flask-cors-3.0.10
```

### 4. Run the Application

1. **Start the Flask Server**
```bash
python app.py
```

Expected output:
```
* Running on http://127.0.0.1:5000
* Debug mode: on
```

2. **Access the Application**
- Open your web browser
- Go to [http://127.0.0.1:5000](http://127.0.0.1:5000)
- You should see the Password Strength Checker interface

### 5. Using the Application

1. Type a password in the input field
2. The strength meter will update in real-time
3. View the score and feedback below the input field
4. Use the "Show/Hide" button to toggle password visibility

## Troubleshooting

### Common Issues and Solutions

1. **Port 5000 is already in use**
```bash
# On Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# On macOS/Linux
lsof -i :5000
kill -9 <PID>
```

2. **ModuleNotFoundError: No module named 'flask'**
```bash
# Make sure your virtual environment is activated
# Then reinstall dependencies
pip install -r requirements.txt
```

3. **CORS Error in Browser Console**
- Make sure the Flask server is running
- Check that you're accessing the application through `http://127.0.0.1:5000`
- Verify that `flask-cors` is installed correctly

4. **Application Not Loading**
- Clear your browser cache
- Try a different browser
- Check if the Flask server is running without errors

### Verifying Installation

To verify that everything is installed correctly, run:
```bash
python -c "import flask; import flask_cors; print('Flask version:', flask.__version__)"
```

Expected output:
```
Flask version: 2.2.5
```

## Development Mode

The application runs in debug mode by default, which means:
- Code changes will automatically reload the server
- Detailed error messages will be shown
- Debugger PIN is available in the console

To disable debug mode, modify `app.py`:
```python
if __name__ == '__main__':
    app.run(debug=False)
```

## Stopping the Application

1. Press `Ctrl+C` in the terminal where the Flask server is running
2. Deactivate the virtual environment:
```bash
deactivate
```

## Next Steps

- Try different passwords to test the strength checker
- Review the [README.md](README.md) for more information about the project
- Check the [API Documentation](README.md#-api-documentation) if you want to integrate the password checker into other applications

## Need Help?

If you encounter any issues not covered in this guide:
1. Check the [FAQ section](README.md#-faq) in the README
2. Open an issue in the repository
3. Review the error messages in your terminal and browser console 