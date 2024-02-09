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

let timerInterval = setInterval(() => {
    milliseconds += 10;
    let totalSeconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let ms = Math.floor(milliseconds % 1000 / 10);

    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
}, 10);

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        const position = element.offsetTop;
        window.scrollTo({
            top: position,
            behavior: "smooth"
        });
    });
});

const aboutMeElement = document.getElementById('about-me');
const projectsElement = document.getElementById('projects');
const skillsElement = document.getElementById('skills');

const logo1 = document.getElementById('logo1');
const logo2 = document.getElementById('logo2');
const logo3 = document.getElementById('logo3');

let clickCount = 0;

function handleClick(logo, element, name) {
    element.textContent = `${name}: ${timerElement.textContent}`;
    console.log(`${logo.id} clicked`);

    logo.classList.add('animate');
    logo.addEventListener('animationend', () => {
        logo.classList.add('collected');
    });

    let audio = new Audio(sound);
    audio.volume = 0.1;
    audio.play();

    logo.removeEventListener('click', logo.clickEvent); // remove the event listener after the logo is clicked
    clickCount++;
    if (clickCount === 3) { // if all logos have been clicked
        clearInterval(timerInterval); // stop the timer
    }
}


let sound = 'sources/sm64_red_coin_jp.wav';

logo1.clickEvent = () => handleClick(logo1, aboutMeElement, 'About Me');
logo2.clickEvent = () => handleClick(logo2, projectsElement, 'Projects');
logo3.clickEvent = () => handleClick(logo3, skillsElement, 'Skills/Contact');

logo1.addEventListener('click', logo1.clickEvent);
logo2.addEventListener('click', logo2.clickEvent);
logo3.addEventListener('click', logo3.clickEvent);