from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def check_password_strength(password):
    score = 0
    feedback = []
    
    # Check length
    if len(password) >= 8:
        score += 1
    else:
        feedback.append("Password should be at least 8 characters long")
    
    # Check uppercase
    if any(char.isupper() for char in password):
        score += 1
    else:
        feedback.append("Add uppercase letters")
    
    # Check lowercase
    if any(char.islower() for char in password):
        score += 1
    else:
        feedback.append("Add lowercase letters")
    
    # Check numbers
    if any(char.isdigit() for char in password):
        score += 1
    else:
        feedback.append("Add numbers")
    
    # Check special characters
    special_chars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    if any(char in special_chars for char in password):
        score += 1
    else:
        feedback.append("Add special characters")
    
    # Determine strength
    if score <= 2:
        strength = "Weak"
    elif score <= 4:
        strength = "Medium"
    else:
        strength = "Strong"
    
    return {
        "score": score,
        "max_score": 5,
        "strength": strength,
        "feedback": feedback
    }

@app.route('/check-password', methods=['POST'])
def check_password():
    data = request.get_json()
    password = data.get('password', '')
    
    if not password:
        return jsonify({"error": "No password provided"}), 400
    
    result = check_password_strength(password)
    return jsonify(result)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True) 