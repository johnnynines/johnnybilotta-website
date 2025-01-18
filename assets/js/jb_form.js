// Description: This file contains the JavaScript code for the contact form on the website.

const form = document.getElementById('emailForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit',  async(event) => {
    event.preventDefault();

    // Validate form fields
    const nameField = document.getElementById('nameField').value;
    const emailField = document.getElementById('emailField').value;
    const messageField = document.getElementById('messageField').value;

    // Simple validation
    if (!nameField || !emailField || !messageField) {
        alert('All fields are required.');
        return;
    }
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField)) {
        alert('Please enter a valid email address.');
        return;
    }

    const formData = {
        name: nameField,
        email: emailField,
        message: messageField
    }
    submitForm(formData);
    console.log('Form data:', formData);
});
    
async function submitForm(formData) {
    await fetch('https://6dtkpguoi5.execute-api.us-east-1.amazonaws.com/default/jb-contact-form', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://johnnybilotta.com/',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            console.log('Response:', response);
            alert('Email sent successfully!');
            form.reset();
            successMessage.classList.remove('hidden');
            

        } else {
            console.log('Response:', response);
            alert('Failed to send email.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the email.');
    });
}