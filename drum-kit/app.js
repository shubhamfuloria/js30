function addLinstener(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`)
    key.classList.add('active');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName != 'transform') return;

    this.classList.remove('active');

}

const keys = document.querySelectorAll('.button');

keys.forEach(function (key) {
    key.addEventListener('transitionend', removeTransition);
})

keys.forEach(function(key) {
    key.addEventListener('click', function() {
        console.log(key);
        const audio = document.querySelector(`audio[data-key="${key.getAttribute('data-key')}"]`);
        key.classList.add('active');
        audio.currentTime = 0;
        audio.play();
        console.log(audio);
    })
})

window.addEventListener('keydown', addLinstener)
