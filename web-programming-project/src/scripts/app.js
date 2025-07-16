// This file contains the JavaScript code for the web application. 
// It handles the functionality and interactivity of the web pages.

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    if (app) {
        app.innerHTML = '<h1>Welcome to the Web Programming Project</h1>';
    }

    // Additional functionality can be added here
});

document.querySelector('#login-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate login success (replace with real authentication)
    // If login is successful:
    window.location.href = 'dashboard.html';
});