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

// Add Experience Fields
let expCount = 0;
function addExperience() {
  expCount++;
  const container = document.getElementById('experienceSection');
  const div = document.createElement('div');
  div.classList.add('input-group');
  div.innerHTML = `
    <label>Job Title</label>
    <input type="text" id="jobTitle${expCount}" />
    <label>Company</label>
    <input type="text" id="company${expCount}" />
    <label>Duration</label>
    <input type="text" id="duration${expCount}" />
    <label>Responsibilities (one per line)</label>
    <textarea id="responsibilities${expCount}"></textarea>
  `;
  container.appendChild(div);
}

document.getElementById('addExperienceBtn').addEventListener('click', addExperience);

// Add Education Fields
let eduCount = 0;
function addEducation() {
  eduCount++;
  const container = document.getElementById('educationSection');
  const div = document.createElement('div');
  div.classList.add('input-group');
  div.innerHTML = `
    <label>Institution</label>
    <input type="text" id="institution${eduCount}" />
    <label>Degree</label>
    <input type="text" id="degree${eduCount}" />
    <label>Years Attended</label>
    <input type="text" id="years${eduCount}" />
  `;
  container.appendChild(div);
}

document.getElementById('addEducationBtn').addEventListener('click', addEducation);

