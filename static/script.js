document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('toggle-password');
    const strengthLevel = document.getElementById('strength-level');
    const strengthText = document.getElementById('strength-text');
    const scoreElement = document.getElementById('score');
    const feedbackList = document.getElementById('feedback-list');

    let debounceTimer;

    // Toggle password visibility
    toggleButton.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        toggleButton.textContent = type === 'password' ? 'Show' : 'Hide';
    });

    // Check password strength
    async function checkPassword(password) {
        try {
            const response = await fetch('http://localhost:5000/check-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();
            updateUI(data);
        } catch (error) {
            console.error('Error checking password:', error);
        }
    }

    // Update UI based on password check results
    function updateUI(data) {
        // Update score
        scoreElement.textContent = data.score;

        // Update strength bar
        const percentage = (data.score / data.max_score) * 100;
        strengthLevel.style.width = `${percentage}%`;
        
        // Update strength text and color
        strengthText.textContent = data.strength;
        strengthLevel.className = 'strength-level ' + data.strength.toLowerCase();

        // Update feedback
        feedbackList.innerHTML = '';
        data.feedback.forEach(feedback => {
            const li = document.createElement('li');
            li.textContent = feedback;
            feedbackList.appendChild(li);
        });
    }

    // Debounced password check
    passwordInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const password = passwordInput.value;
            if (password) {
                checkPassword(password);
            } else {
                // Reset UI when password is empty
                strengthLevel.style.width = '0';
                strengthText.textContent = 'Enter a password';
                strengthLevel.className = 'strength-level';
                scoreElement.textContent = '0';
                feedbackList.innerHTML = '';
            }
        }, 300);
    });
}); 