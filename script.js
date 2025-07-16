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
// Generate CV Preview
function generateCV() {
  const get = id => document.getElementById(id).value.trim();
  const required = ['name', 'location', 'phone', 'email', 'summary', 'skills', 'experience', 'education'];
  const missing = required.filter(id => !get(id));

  if (missing.length > 0) {
    missing.forEach(id => {
      const el = document.getElementById(id);
      el.style.border = '2px solid red';
      setTimeout(() => el.style.border = '', 2000);
    });
    alert('Please fill in all required fields.');
    return;
  }

  if (!isValidEmail(get('email'))) {
    alert('Invalid email format');
    return;
  }

  if (!isValidPhone(get('phone'))) {
    alert('Invalid phone number');
    return;
  }

  const skills = get('skills').split(',').map(s => '- ' + s.trim()).join('\n');
  const certs = get('certifications')
    ? get('certifications').split('\n').map(c => '- ' + c.trim()).join('\n')
    : 'N/A';

  let contactLinks = '';
  if (get('linkedin')) contactLinks += `LinkedIn: ${get('linkedin')}\n`;
  if (get('github')) contactLinks += `GitHub: ${get('github')}\n`;
  if (get('portfolio')) contactLinks += `Portfolio: ${get('portfolio')}\n`;

  const cvText = `
${get('name')}
${get('location')}
Phone: ${get('phone')}     Email: ${get('email')}
${contactLinks}

==============================
Professional Summary
==============================
${get('summary')}

==============================
Technical Skills
==============================
${skills}

==============================
Experience
==============================
${get('experience')}

==============================
Education
==============================
${get('education')}

==============================
Certifications
==============================
${certs}

==============================
Additional Info
==============================
${get('additional')}

${profilePicDataUrl ? '[Profile Picture included below]' : ''}

References available upon request.
  `;

  document.getElementById('output').textContent = cvText;

}
