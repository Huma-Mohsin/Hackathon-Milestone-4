var _a;
(_a = document.getElementById('generateResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var gradYear = document.getElementById('grad-year').value;
    var skills = document.getElementById('skills-input').value;
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var experience = document.getElementById('experience').value;
    // Handle the profile picture
    var profilePictureInput = document.getElementById('profile-picture');
    var profilePicture = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureUrl = profilePicture ? URL.createObjectURL(profilePicture) : '';
    var resumeHtml = "\n        <div class=\"resume-container\">\n            <div class=\"resume-header\">\n                ".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\" />") : '', "\n                <h1 id=\"editable-name\" contenteditable=\"true\">").concat(name, "</h1>\n            </div>\n            <div class=\"resume-section\">\n                <h2>Personal Information</h2>\n                <p><strong>Email:</strong> <span id=\"editable-email\" contenteditable=\"true\">").concat(email, "</span></p>\n                <p><strong>Phone:</strong> <span id=\"editable-phone\" contenteditable=\"true\">").concat(phone, "</span></p>\n            </div>\n            <div class=\"resume-section\">\n                <h2>Education</h2>\n                <p><strong>Degree:</strong> <span id=\"editable-degree\" contenteditable=\"true\">").concat(degree, "</span></p>\n                <p><strong>University:</strong> <span id=\"editable-university\" contenteditable=\"true\">").concat(university, "</span></p>\n                <p><strong>Graduation Year:</strong> <span id=\"editable-gradYear\" contenteditable=\"true\">").concat(gradYear, "</span></p>\n            </div>\n            <div class=\"resume-section\">\n                <h2>Skills</h2>\n                <ul id=\"editable-skills\" contenteditable=\"true\" class=\"skills-list\">\n                    ").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n                </ul>\n            </div>\n            <div class=\"resume-section work-experience\">\n                <h2>Work Experience</h2>\n                <h3 id=\"editable-jobTitle\" contenteditable=\"true\">").concat(jobTitle, " at <span id=\"editable-company\" contenteditable=\"true\">").concat(company, "</span></h3>\n                <p id=\"editable-experience\" contenteditable=\"true\">").concat(experience, "</p>\n            </div>\n        </div>\n    ");
    document.getElementById('resumeDisplay').innerHTML = resumeHtml;
    // Save changes when the user edits a section
    function saveToLocalStorage(id) {
        var element = document.getElementById(id);
        if (element) {
            localStorage.setItem(id, element.innerText);
        }
    }
    var editableFields = ['editable-name', 'editable-email', 'editable-phone', 'editable-degree', 'editable-university', 'editable-gradYear', 'editable-skills', 'editable-jobTitle', 'editable-company', 'editable-experience'];
    editableFields.forEach(function (id) {
        var element = document.getElementById(id);
        element === null || element === void 0 ? void 0 : element.addEventListener('input', function () { return saveToLocalStorage(id); });
    });
    // Load the saved data from local storage when the page loads
    editableFields.forEach(function (id) {
        var storedValue = localStorage.getItem(id);
        if (storedValue) {
            var element = document.getElementById(id);
            if (element)
                element.innerText = storedValue;
        }
    });
});
