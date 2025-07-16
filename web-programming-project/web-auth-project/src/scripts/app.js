// This file initializes the application and handles common functionalities shared between login and signup.

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
});

function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Perform validation and send login request to the server
    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Handle successful login (e.g., redirect to dashboard)
            window.location.href = '/dashboard';
        } else {
            // Handle login error (e.g., display error message)
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function handleSignup(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Perform validation and send signup request to the server
    fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Handle successful signup (e.g., redirect to login)
            window.location.href = '/login';
        } else {
            // Handle signup error (e.g., display error message)
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}