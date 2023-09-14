document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validation logic
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const requirements = document.getElementById("requirements").value;

        if (!name || !email || !phone || !requirements) {
            alert("Please fill in all the required fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // If all validations pass, you can submit the form here or perform other actions.
        alert("Form submitted successfully!");
        contactForm.reset();
    });

    // Email validation function (basic validation)
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }

    // Phone number validation function (basic validation)
    function validatePhone(phone) {
        const regex = /^[0-9]{10}$/; // 10-digit numeric format
        return regex.test(phone);
    }
});
