document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMessage').textContent = '';

  let valid = true;

  // Validate name
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    valid = false;
  }

  // Validate email with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required';
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email format';
    valid = false;
  }

  // Validate message
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required';
    valid = false;
  }

  // If all valid
  if (valid) {
    document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    document.getElementById('contactForm').reset(); // Optional: reset the form
  }
});
