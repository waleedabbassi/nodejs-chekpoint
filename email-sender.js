// Import the nodemailer package
const nodemailer = require('nodemailer');

// Create a transporter object with your email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'name@gmail.com',
    pass: 'password',
  },
});

// Define the email options
const mailOptions = {
  from: 'name@gmail.com',
  to: 'name@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from name',
};

// Send the email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
