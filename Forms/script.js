document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin-form');
    
    signinForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const staySignedIn = document.getElementById('stay-signed').checked;
        
        console.log('Sign in attempt:');
        console.log('Username:', username);
        console.log('Stay signed in:', staySignedIn);
        
        // This is where you would typically send the data to a server
        // For demonstration purposes, we're just showing a success message
        alert('Sign in successful!');
    });
});