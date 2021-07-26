const addBtn = document.querySelector('#addBtn');


addBtn.addEventListener('click', generateP);

async function serverQuery(url) {
    const respond = await fetch(url);
    return respond.text();
}
let counter = 1;
async function generateP() {
    if (counter < 5) {
        const data = await serverQuery(`service${counter}.html`);

        const pEl = document.querySelector('#result');
        pEl.innerHTML = data;
        counter++;

    }


}

// let result = document.getElementById('result');
// let button = document.getElementById('addBtn');

// button.addEventListener('click', function() {
//     let promise = fetch('service.html');

//     promise.then(
//         response => {
//             return response.text();
//         }
//     ).then(
//         text => {
//             result.innerHTML = text;
//         }
//     );
// });