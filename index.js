const divCircular = document.querySelector(".circular");
const divInner = document.querySelector(".inner");
const targetValue = 90;

let index = 0;

const circularFunction = () => {
    if (index === targetValue) { clearInterval(set) };
    divCircular.style.backgroundImage = `conic-gradient(red ${(index / 100) * 360}deg, transparent 0deg)`;
    divInner.textContent = `${index}%`;
    index++;
};

const set = setInterval(circularFunction, 10);