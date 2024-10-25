document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.');
    this.reset(); // Reset the form after submission
});
