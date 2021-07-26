const btnTime = document.querySelector('#add-time');

btnTime.addEventListener('click', generateTime);



async function serverQuery() {
    const respond = await fetch('service.html');
    return respond.text();
}

async function generateTime() {
    // renderTime()
    const data = await serverQuery();
    console.log(data)
    const timeUl = document.querySelector('#time-query');
    const liEl = document.createElement('li')
    liEl.innerHTML = data
    timeUl.appendChild(liEl);

}