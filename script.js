document.addEventListener("DOMContentLoaded", () => {
    // Navigation functionality
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("main section");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute("data-section");

            sections.forEach(section => {
                section.classList.remove("active");
            });

            document.getElementById(sectionId).classList.add("active");
        });
    });

    // Blog data simulation
    const blogList = document.getElementById("blog-list");
    const blogs = [
        { title: "Top 10 Indian Spices You Need in Your Kitchen", content: "Learn about essential spices for authentic Indian cooking." },
        { title: "Healthy Indian Snacks for Your Family", content: "Explore healthy and delicious snack options available in our store." },
        { title: "How to Store Your Groceries for Freshness", content: "Tips and tricks for keeping your groceries fresh for longer." }
    ];

    blogs.forEach(blog => {
        const blogPost = document.createElement("div");
        blogPost.classList.add("blog-post");
        blogPost.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
        blogList.appendChild(blogPost);
    });

    // Contact form functionality
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We'll get back to you soon.");
        contactForm.reset();
    });
});
