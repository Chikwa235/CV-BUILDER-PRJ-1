// Utility: Validate Email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Utility: Validate Phone
function isValidPhone(phone) {
  const phoneRegex = /^\+?[0-9]{7,15}$/;
  return phoneRegex.test(phone);
}

// Theme Switching
const themeSelector = document.getElementById('themeSelector');
themeSelector.addEventListener('change', function (e) {
  document.body.className = e.target.value;
});
