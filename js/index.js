
// -------------heart count---------------

const data = document.getElementsByClassName('heart-card')
let increase = 0;
for (const heart of data) {
    heart.addEventListener('click', function () {
        increase++;
        const display = document.getElementById('nav-heart-btn').innerText = increase;

    })
}



//--------------- call ---------------
function getElement(id) {
    return document.getElementById(id);
    
}


const callButtons = document.getElementsByClassName('call-btn');
console.log(callButtons);


for (let callBtn of callButtons) {
    callBtn.addEventListener('click', function () {

        const cardTitle = callBtn.parentNode.parentNode.children[1].children[0].innerText;
        // console.log(cardTitle);

        const phoneNumber = callBtn.parentNode.parentNode.children[2].children[0].innerText;
        // console.log(phoneNumber);

        const time = new Date();
        const PresentTime = time.toLocaleTimeString();
        const date = time.toLocaleDateString();


        const callHistory = getElement('call-list-container');
        const newCallHistory = document.createElement('div');
        newCallHistory.innerHTML = `
        <div class="rounded-lg flex gap-3 p-2">
                           
                           <div>

                            <h2 class="font-bold">${cardTitle}</h2>
                            <h2 class="font-bold">${phoneNumber}</h2>

                           </div>

                            <div>

                            <p>${PresentTime}</p>
                            <p>${date}</p>
                            
                            </div>
                           
                        </div>

        `;

        callHistory.append(newCallHistory);
    });


}

document.getElementById('clear-btn').addEventListener('click', function(){
    const callHistory = getElement('call-list-container');
    callHistory.innerHTML = "";
});





