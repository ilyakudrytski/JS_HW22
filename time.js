const timeEl = document.querySelector('#current-time')

let currentTime = new Date();

function renderTime() {

    timeEl.innerHTML = currentTime;

}

renderTime()