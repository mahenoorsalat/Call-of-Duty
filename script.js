const PopUp = document.querySelector('.btn');
const trailer = document.querySelector('.trailer-container');
const Close = document.querySelector('.close-icon');
const video = document.querySelector('video');

PopUp.addEventListener("click", () => {
    trailer.classList.remove('active');
    video.play();
});


Close.addEventListener("click", () => {
    trailer.classList.add('active');
    video.pause()
    video.currentTime = 0;
});




document.addEventListener('DOMContentLoaded', () => {
    const numberOfTrails = 40; 
    const trails = [];

    
    for (let i = 0; i < numberOfTrails; i++) {
        const trail = document.createElement('div');
        trail.className = 'fire-trail';
        document.body.appendChild(trail);
        trails.push(trail);
    }

    let currentTrail = 0;

    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        
        trails[currentTrail].style.left = `${x}px`;
        trails[currentTrail].style.top = `${y}px`;

        
        currentTrail = (currentTrail + 1) % numberOfTrails;
    });
});

