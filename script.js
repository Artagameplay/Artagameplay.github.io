// انیمیشن وقتی کاربر اسکرول می‌کنه و بخش‌ها دیده میشن
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
