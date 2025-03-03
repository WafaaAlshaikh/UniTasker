document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const isStudentCheckbox = document.getElementById('is-student');
    const universityIdGroup = document.querySelector('.university-id-group');
    const universityIdInput = document.getElementById('university-id');
    
    // Handle showing/hiding University ID field based on checkbox
    isStudentCheckbox.addEventListener('change', function() {
        if (this.checked) {
            universityIdGroup.classList.remove('hidden');
            universityIdGroup.classList.add('visible');
            universityIdInput.setAttribute('required', 'required');
        } else {
            universityIdGroup.classList.remove('visible');
            universityIdGroup.classList.add('hidden');
            universityIdInput.removeAttribute('required');
        }
    });
    
    // Handle form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const isStudent = isStudentCheckbox.checked;
        const universityId = isStudent ? universityIdInput.value : null;
        
        console.log('Sign up attempt:');
        console.log('Username:', username);
        console.log('Is student:', isStudent);
        
        if (isStudent) {
            console.log('University ID:', universityId);
        }
        
        // This is where you would typically send the data to a server
        // For demonstration purposes, we're just showing a success message
        alert('Sign up successful!');
    });
    
    // Initialize the form state based on default checkbox value
    if (isStudentCheckbox.checked) {
        universityIdGroup.classList.remove('hidden');
        universityIdGroup.classList.add('visible');
        universityIdInput.setAttribute('required', 'required');
    }
});