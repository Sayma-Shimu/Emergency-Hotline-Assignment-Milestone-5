
// -------------heart count---------------

const data = document.getElementsByClassName('heart-card')
let count = 0;
for (const heart of data) {
    heart.addEventListener('click', function () {
        count++;
        const display = document.getElementById('nav-heart-btn').innerText = count;

    })
}





