const spaceEl = document.getElementById('spacing-input');
const blurEl = document.getElementById('blur-input');
const colorEl = document.getElementById('color');
const imageContainerEl = document.querySelector('.image-container');
const rootEl = document.documentElement;
const inputEl = document.querySelectorAll('input')


function handleUpdate() {

    const suffix = this.dataset.sizing;
    console.log("New value: " + this.value + suffix);
    rootEl.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
}

console.log(inputEl);
inputEl.forEach(input => input.addEventListener('change', handleUpdate));
inputEl.forEach(input => input.addEventListener('mousemove', handleUpdate));