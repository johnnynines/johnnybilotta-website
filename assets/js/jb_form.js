const form = document.getElementById('emailForm');

form.addEventListener('submit',  async(event) => {
    event.preventDefault();

    // Validate form fields
    const nameField = document.getElementById('nameField').value;
    const emailField = document.getElementById('emailField').value;
    const messageField = document.getElementById('messageField').value;

    // // Email validation regex
    // const emailRegex = /^\S+@\S+\.\S+$/;
    // if (!nameField || !emailField || !messageField || !emailRegex.test(emailField)) {
    //     alert('Please fill out all fields and enter a valid email address.');
    //     return;
    // }

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