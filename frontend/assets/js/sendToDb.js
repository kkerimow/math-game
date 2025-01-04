async function handleSignUp(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const userData = { username: name, email, password };
    const BACKEND_URL = window.__env__?.BACKEND_URL || 'http://localhost:5000';

    try {
        const response = await fetch(`${BACKEND_URL}/api/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            alert('Sign Up successful!');
            openModal(true);
        } else {
            const error = await response.json();
            alert(`Sign Up failed: ${error.error}`);
        }
    } catch (error) {
        console.error('Error during sign up:', error);
        alert('An error occurred. Please try again.');
    }
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('signupBtn')) {
        const form = document.getElementById('register-form');
        form.addEventListener('submit', handleSignUp);
    }
});

async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const BACKEND_URL = window.__env__?.BACKEND_URL || 'http://localhost:5000';

    try {
        console.log('Sending login request...');
        const response = await fetch(`${BACKEND_URL}/api/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        console.log('Response received:', response);
        const data = await response.json();

        if (response.ok) {
            alert('Login successful!');
            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                window.location.href = `index2.html?username=${data.username}`;
                console.log(data.username);
            } else {
                alert('No token received. Please try again.');
            }
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (error) {
        console.error('An error occurred during login:', error);
        alert('An error occurred. Please try again.');
    }
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('loginBtn')) {
        const form = document.getElementById('login-form');
        if (form) {
            form.addEventListener('submit', handleLogin);
        }
    }
});
