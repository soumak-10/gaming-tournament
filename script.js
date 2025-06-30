document.addEventListener("DOMContentLoaded", function() {
  const registerButton = document.getElementById('register-btn');
  const form = document.getElementById('reg-form');

  // Open registration form
  registerButton.addEventListener('click', function() {
    window.scrollTo({ top: document.getElementById('registration').offsetTop, behavior: 'smooth' });
  });

  // Form Submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Grab input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gameChoice = document.getElementById('game-choice').value;

    // Basic Validation
    if (name === '' || email === '' || gameChoice === '') {
      alert('Please fill all fields.');
      return;
    }

    // Process form (for now just logging)
    alert(`Welcome, ${name}! You have registered for ${gameChoice}.`);
    form.reset();
  });
});
