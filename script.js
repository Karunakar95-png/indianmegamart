function showAlert() {
    alert("Welcome to Sunnyvale Indian Grocery Store! Shop our fresh products now.");
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});
