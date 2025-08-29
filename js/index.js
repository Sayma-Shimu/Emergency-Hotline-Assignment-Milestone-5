
// -------------heart count---------------

const data = document.getElementsByClassName('heart-card')
let increase = 0;
for (const heart of data) {
    heart.addEventListener('click', function () {
        increase++;
        const display = document.getElementById('nav-heart-btn').innerText = increase;

    })
}


// ----------------coin count---------------
let totalCoin = 100;
const coinDisplay = document.getElementById('coin-btn');
coinDisplay.innerText = totalCoin;


//--------------- call ---------------
function getElement(id) {
    return document.getElementById(id);

}


const callButtons = document.getElementsByClassName('call-btn');
// console.log(callButtons);


for (let callBtn of callButtons) {
    callBtn.addEventListener('click', function () {

        const cardTitle = callBtn.parentNode.parentNode.children[1].children[0].innerText;
        // console.log(cardTitle);

        const phoneNumber = callBtn.parentNode.parentNode.children[2].children[0].innerText;
        // console.log(phoneNumber);

        // --------------------coin----------------
        if (totalCoin < 20) {
            return alert('Not enough coin you have')
        };


        alert(`📞 calling ${cardTitle} ${phoneNumber}...`);

        totalCoin -= 20;
        coinDisplay.innerText = totalCoin;




        const time = new Date();
        const PresentTime = time.toLocaleTimeString();


        const callHistory = getElement('call-list-container');
        const newCallHistory = document.createElement('div');
        newCallHistory.innerHTML = `
        <div class="rounded-lg flex gap-3 p-2 bg-[#f5fff6] m-3">
                           
                           <div>

                            <h2 class="font-semibold">${cardTitle}</h2>
                            <h2 class="text-[#5c5c5c]">${phoneNumber}</h2>

                           </div>

                            <div>

                            <p>${PresentTime}</p>
                            
                            </div>
                           
                        </div>

        `;

        callHistory.append(newCallHistory);
    });


}


// -------------clear------------------
document.getElementById('clear-btn').addEventListener('click', function () {
    const callHistory = getElement('call-list-container');
    callHistory.innerHTML = "";
});


// --------------------copy--------------------
const copyButtons = document.getElementsByClassName('copy-btn');
let copyCount = 0;
const copyNavButton = document.getElementById('copy-nav-btn');

for (let button of copyButtons) {
    button.addEventListener('click', (e) => {

        const clickButton = e.target;
        const card = clickButton.parentNode.parentNode;

        const phoneNumber = card.getElementsByClassName('phone-number')[0];
        const serviceNumber = phoneNumber.innerText;


        navigator.clipboard.writeText(serviceNumber)

            .then(function () {
                alert(`number copied ${serviceNumber}`);

                copyCount++;
                copyNavButton.innerHTML = `
                <span>${copyCount}</span> Copy

                `;

            })

            .catch(function (err) {
                alert(`${err}`)

            });

    })
}



