// اسکرول نرم برای دکمه‌های ناوبری
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e){
        if(this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// انیمیشن هنگام اسکرول بخش‌ها
const sections = document.querySelectorAll('.glass-section');

function checkSections() {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkSections);
window.addEventListener('load', checkSections);
