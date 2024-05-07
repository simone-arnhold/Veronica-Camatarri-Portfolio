const form = document.querySelector("#contact-form")

form.addEventListener("submit", (e) => {
    e.preventDefault(); //prevent from submitting normally
})

// get form data
const formData = new FormData(form)
const data = Object.fromEntries(formData.entries())

// send form data
fetch("/submit-form", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
    .then(response => {
        if (response.ok) {
            alert("Your message has been sent.")
            form.reset()
        } else {
            alert("Sorry, something went wrong. Try resubmitting your message.")
        }
    })
    .catch(error => {
        alert("There was an error.")
    })

    // todo

/*
const nodemailer = require('nodemailer');
const form = document.querySelector('#contact-form');

// configure the nodemailer transport
const transporter = nodemailer.createTransport({
host: 'smtp.example.com',
port: 587,
auth: {
user: 'your_email@example.com',
pass: 'your_email_password'
}
});

form.addEventListener('submit', (e) => {
e.preventDefault(); // prevent the form from submitting normally

// get the form data
const formData = new FormData(form);
const data = Object.fromEntries(formData.entries());

// send the email
const message = `
Name: ${data.name} ${data.surname}
Email: ${data.email}
Message: ${data.message}
`;

const mailOptions = {
from: 'your_email@example.com',
to: 'recipient_email@example.com',
subject: 'New contact form submission',
text: message
};

transporter.sendMail(mailOptions, (error, info) => {
if (error) {
  console.log(error);
  alert('Oops! Something went wrong.');
} else {
  console.log(info);
  alert('Your message has been sent!');
  form.reset();
}
});
});
*/