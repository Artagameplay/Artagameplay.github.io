// یه انیمیشن ساده روی پروژه‌ها وقتی روشون میریم
const projects = document.querySelectorAll('.projects ul li');

projects.forEach((proj) => {
    proj.addEventListener('mouseenter', () => {
        proj.style.transform = 'scale(1.05)';
        proj.style.transition = '0.3s';
    });
    proj.addEventListener('mouseleave', () => {
        proj.style.transform = 'scale(1)';
    });
});
