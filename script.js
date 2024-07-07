document.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.backgroundPositionY = `${scrollPos * 0.5}px`;
    });
});
