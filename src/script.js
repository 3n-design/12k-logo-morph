const logoContainer = document.getElementById('logo');
const classes = ['label', 'mastering'];
let current = 0;

setInterval(() => {
    current = (current + 1) % classes.length;
    logoContainer.classList.remove('label', 'mastering');
    logoContainer.classList.add(classes[current]);
}, 5000);

logoContainer.classList.add(classes[current]);