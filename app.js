const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { rootMargin: '0px 0px -300px 0px' });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

let milliseconds = 0;
const timerElement = document.getElementById('timer');

setInterval(() => {
    milliseconds += 10;
    let totalSeconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let ms = Math.floor(milliseconds % 1000 / 10);

    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
}, 10);

// Assuming you have an element with id 'about-me' to display the text
const aboutMeElement = document.getElementById('about-me');

// Assuming each logo has a class 'logo'
const logos = document.querySelectorAll('.logo');

logos.forEach((logo) => {
    logo.addEventListener('click', () => {
        aboutMeElement.textContent = `About Me: ${timerElement.textContent}`;
        console.log("hi")
    });
});