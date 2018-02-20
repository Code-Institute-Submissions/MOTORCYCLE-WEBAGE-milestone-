
// google maps
function initMap() {

    var uluru = { lat: 50.8599851, lng: -0.9675234000000046 };
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

// MOT booker
flatpickr("#motdate", {
  dateFormat: "Y-m-d H:i",
  minDate: "today"
});

flatpickr("#mottime", {
   
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    minDate: "8:30",
    maxDate: "17:00",


});

// MOT booking form

let cardBody = document.querySelector(".mot-backing");
let motProcess = document.querySelector("#mot-show");
let motClose = document.querySelector(".close");

function motActive(e){
    cardBody.classList.add("mot-backing-open");
}
function motclose(e){
    cardBody.classList.remove("mot-backing-open");
}
if(motProcess){
    motProcess.addEventListener('click', motActive);
}
if(motClose){
    motClose.addEventListener('click', motclose);
}



// new suzuki animation

const triggers = document.querySelectorAll(".tiles-background > span");
const infoBox = document.querySelector('.bike-description');
const background = document.querySelector(".tiles-background");
  
function bikeAppear(e){
   this.classList.add('trigger-enter');
   setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
   background.classList.add('open');
};

function bikeDisappear(e){
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');

};

triggers.forEach(trigger => trigger.addEventListener('mouseenter', bikeAppear));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', bikeDisappear));

// Finance calculator

const financeResults = document.getElementById("Finance");

function financeNumbers(e) {
    e.preventDefault();
    const price = document.getElementById('price');
    const deposit = document.getElementById('deposit');
    const interest = document.getElementById('interest');
    const months = document.getElementById('months');

    const repayments = document.getElementById('repayment');
    const interestTotal  = document.getElementById("interestTotal");
    const totalAmount = document.getElementById('monthly');
    
    // calculations for finance
    const Amount = (price.value) - (deposit.value);
    const monthly = (months.value);
    const interestValue = (interest.value);

    const interestAmount = ((interestValue / 100 * Amount) + Amount);
    const interesttotal = ( interestAmount - Amount);
    const monthlyRepayments = (interestAmount / monthly);
    // const TotalAmount = ((Amount - Deposit) / months + interestAmount);
    
    totalAmount.value =  monthlyRepayments.toFixed(2);
    interestTotal.value = interesttotal.toFixed(2);
    repayments.value = interestAmount.toFixed(2);
    // totalAmount.value = TotalAmount;
    
}
if(financeResults){
    financeResults.addEventListener('click', financeNumbers);
}




// bike filter


// const searchBtn = document.getElementById("search");

//     function bikeSearch(e) {
//     e.preventDefault();        
    
//         // search fields
//         let bikeMake = document.getElementById("make");
//         let bikeModel = document.getElementById("model");
//         let price = document.getElementById("price");
        
//         let bike = document.querySelectorAll(".Bike");
//         let bikePrice = document.querySelectorAll('.bikePrice');
//         let usedBackground = document.querySelectorAll(".used-background");
        
            
//         for  (let i = 0; i < bike.length; i++){
//             console.log(bike);

//             if(bike[i] == bikeMake.value){
//             }
        
//             else{
                
//             }    
//         }

//     };

// if(searchBtn){
// searchBtn.addEventListener('click', bikeSearch);
// }