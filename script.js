document.addEventListener('DOMContentLoaded', () => {
    console.log("SehatPal Loaded Successfully");
    // Animation logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    });
    document.querySelectorAll('.feature-card, .panel').forEach(el => {
        el.style.opacity = 0;
        el.style.transition = "all 0.6s";
        el.style.transform = "translateY(20px)";
        observer.observe(el);
    });
});
