document.getElementById('generateResume')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    const gradYear = (document.getElementById('grad-year') as HTMLInputElement).value;
    const skills = (document.getElementById('skills-input') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Handle the profile picture
    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
    const profilePicture = profilePictureInput.files?.[0];
    const profilePictureUrl = profilePicture ? URL.createObjectURL(profilePicture) : '';

    const resumeHtml = `
        <div class="resume-container">
            <div class="resume-header">
                ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="Profile Picture" />` : ''}
                <h1 id="editable-name" contenteditable="true">${name}</h1>
            </div>
            <div class="resume-section">
                <h2>Personal Information</h2>
                <p><strong>Email:</strong> <span id="editable-email" contenteditable="true">${email}</span></p>
                <p><strong>Phone:</strong> <span id="editable-phone" contenteditable="true">${phone}</span></p>
            </div>
            <div class="resume-section">
                <h2>Education</h2>
                <p><strong>Degree:</strong> <span id="editable-degree" contenteditable="true">${degree}</span></p>
                <p><strong>University:</strong> <span id="editable-university" contenteditable="true">${university}</span></p>
                <p><strong>Graduation Year:</strong> <span id="editable-gradYear" contenteditable="true">${gradYear}</span></p>
            </div>
            <div class="resume-section">
                <h2>Skills</h2>
                <ul id="editable-skills" contenteditable="true" class="skills-list">
                    ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
            </div>
            <div class="resume-section work-experience">
                <h2>Work Experience</h2>
                <h3 id="editable-jobTitle" contenteditable="true">${jobTitle} at <span id="editable-company" contenteditable="true">${company}</span></h3>
                <p id="editable-experience" contenteditable="true">${experience}</p>
            </div>
        </div>
    `;

    document.getElementById('resumeDisplay')!.innerHTML = resumeHtml;

    // Save changes when the user edits a section
    function saveToLocalStorage(id: string) {
        const element = document.getElementById(id);
        if (element) {
            localStorage.setItem(id, element.innerText);
        }
    }

    const editableFields = ['editable-name', 'editable-email', 'editable-phone', 'editable-degree', 'editable-university', 'editable-gradYear', 'editable-skills', 'editable-jobTitle', 'editable-company', 'editable-experience'];

    editableFields.forEach(id => {
        const element = document.getElementById(id);
        element?.addEventListener('input', () => saveToLocalStorage(id));
    });

    // Load the saved data from local storage when the page loads
    editableFields.forEach(id => {
        const storedValue = localStorage.getItem(id);
        if (storedValue) {
            const element = document.getElementById(id);
            if (element) element.innerText = storedValue;
        }
    });
});
