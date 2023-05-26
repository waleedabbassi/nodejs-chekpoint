// Import the generate function from the generate-password package
const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
  // Generate the password using the generate function
  const password = generatePassword.generate({
    length: 10,  // Length of the password
    numbers: true,  // Include numbers
    symbols: true,  // Include symbols
    uppercase: true,  // Include uppercase letters
    lowercase: true,  // Include lowercase letters
  });

  return password;
}

// Generate a random password and log it
const password = generateRandomPassword();
console.log('Generated Password:', password);
