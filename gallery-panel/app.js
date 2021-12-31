const panels = document.querySelectorAll('.panel');


function toggleOpen() {
    removeAllActive.call(this);
    this.classList.toggle('open')
}

function toggleOpenActive() {
    this.classList.toggle('open-active');
}

function removeAllActive() {
    panels.forEach(panel => {if(panel != this) 
        panel.classList.remove('open')});
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive))