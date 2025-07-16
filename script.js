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


// Profile Picture Preview
const profilePicInput = document.getElementById('profilePic');
const profilePreview = document.getElementById('profilePreview');
let profilePicDataUrl = '';

profilePicInput.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) {
    profilePreview.style.display = 'none';
    profilePicDataUrl = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    profilePicDataUrl = e.target.result;
    profilePreview.src = profilePicDataUrl;
    profilePreview.style.display = 'block';
  };
  reader.readAsDataURL(file);
});
