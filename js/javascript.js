
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
    minDate: "today",
});

flatpickr("#mottime", {
   
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    minTime: "8:30",
    maxTime: "17:00",


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

    // const interestAmount = ((interestValue / 100 * Amount) + Amount);
    const interestAmount = (Amount * Math.pow(1+(interestValue / 100) , monthly));
    const interesttotal = (interestAmount - Amount);
    const monthlyRepayments = (interestAmount / monthly / 12);
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

let searchBtn = document.getElementById("search");

if(searchBtn){
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();        
        let bikeMake = document.getElementById("make").value.toUpperCase();
        let bikeModel = document.getElementById("model").value.toUpperCase();
        let price = document.getElementById("price").value.replace(/-/g, " " );
        let bikePrice = document.getElementsByClassName("bikePrice");
        let bike = document.getElementsByClassName("Bike");
        let usedBackground = document.querySelectorAll(".used-background");

           
        for (let i = 0; i < bike.length; i++){
            if (bike[i].innerHTML.toUpperCase().indexOf(bikeMake) !== -1 || bikeMake == "MAKE" ) {
              usedBackground[i].style.display = "block";
              
            } else {
              usedBackground[i].style.display = "none";
            }
        }

        for(let i = 0; i < bikePrice.length; i++){
            BikePrice = bikePrice[i].innerHTML.replace(/\W/g, "");
            Price = price.split(" ");
            
                if(BikePrice > Price[0] && BikePrice < Price[1]){
                    usedBackground[i].style.display = "block";  

                } else {
                    usedBackground[i].style.display = "none";
    
                }
            }        
    });
}