document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('surveyForm');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    const closeBtn = document.getElementById('closeBtn');

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function () {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const maleCheckbox = document.getElementsByName('gender')[0].checked;
        const femaleCheckbox = document.getElementsByName('gender')[1].checked;
        const gender = (maleCheckbox && femaleCheckbox) ? 'Male, Female' : (maleCheckbox ? 'Male' : (femaleCheckbox ? 'Female' : ''));
        const profession = document.getElementById('profession').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        // Form validation logic 
        if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
            alert('Please fill out all fields.');
            return;
        }

        // Display popup with form data
        popupContent.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;
        popup.style.display = 'flex';
    });

    // Reset form on clicking the Reset button
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', function () {
        form.reset();
    });

    // Close popup and reset form on clicking Close button in popup
    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
        form.reset();
    });
});
