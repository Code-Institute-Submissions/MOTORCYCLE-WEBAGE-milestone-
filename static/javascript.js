// google maps

function initMap() {
  var uluru = { lat: 51.0577, lng: -1.3081 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

// <------------------ MOT booking form ----------------->

let cardBody = document.querySelector(".mot-backing"),
  motProcess = document.querySelector("#mot-show"),
  motClose = document.querySelector(".close");

function motActive(e) {
  cardBody.classList.add("mot-backing-open");
}
function motclose(e) {
  cardBody.classList.remove("mot-backing-open");
}
if (motProcess) {
  motProcess.addEventListener("click", motActive);
}
if (motClose) {
  motClose.addEventListener("click", motclose);
}

//<------------------  mot booking form ----------------->

flatpickr(".flatpickr", {
  enableTime: true,
  minTime: "08:30",
  maxTime: "17:00",
  minDate: "today",
  disable: [
    function(date) {
      // return true to disable
      return date.getDay() === 1 || date.getDay() === 0;
    }
  ],
  locale: {
    firstDayOfWeek: 1 // start week on Monday
  }
});

let motBook = document.querySelector(".flatpickr"),
  motBikeReg = document.querySelector(".bikeReg"),
  motName = document.querySelector(".name"),
  motBtn = document.querySelector(".motBtn");

function bookMOT(e) {
  if (motBook.value != "" && motBikeReg.value != "" && motName.value != "") {
    
    var booking = `NAME: ${motName.value} BIKE: ${motBikeReg.value} DATE: ${motBook.value}`;
  
    let bookings;

    if (localStorage.getItem("bookings") === null) {
      bookings = [];
    } 
    else {
      bookings = JSON.parse(localStorage.getItem("bookings", booking));
    }

    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Your MOT is all booked!");

    document.getElementById("motForm").submit();
  }
}

// < --------------  new suzuki animation --------------->

const triggers = document.querySelectorAll(".tiles-background > span");
const infoBox = document.querySelector(".bike-description");
const background = document.querySelector(".tiles-background");

function bikeAppear(e) {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  background.classList.add("open");
}

function bikeDisappear(e) {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach(trigger => trigger.addEventListener("mouseenter", bikeAppear));
triggers.forEach(trigger =>
  trigger.addEventListener("mouseleave", bikeDisappear)
);

// <---------------- Finance calculator -------------------->

const financeResults = document.getElementById("Finance");

function financeNumbers(e) {
  e.preventDefault();
  const price = document.getElementById("price");
  const deposit = document.getElementById("deposit");
  const interest = document.getElementById("interest");
  const months = document.getElementById("months");

  const repayments = document.getElementById("repayment");
  const interestTotal = document.getElementById("interestTotal");
  const totalAmount = document.getElementById("monthly");

  // calculations for finance
  const Amount = price.value - deposit.value;
  const monthly = months.value;
  const interestValue = interest.value;

  const interestAmount = Amount * Math.pow(1 + interestValue / 100, monthly);
  const interesttotal = interestAmount - Amount;
  const monthlyRepayments = interestAmount / monthly / 12;

  totalAmount.value = monthlyRepayments.toFixed(2);
  interestTotal.value = interesttotal.toFixed(2);
  repayments.value = interestAmount.toFixed(2);
}
if (financeResults) {
  financeResults.addEventListener("click", financeNumbers);
}

// <---------------------- bike filter ---------------------->

let searchBtn = document.getElementById("search");
let bikeMake = document.getElementById("make");
let bike = document.getElementsByClassName("Bike");
let bikePrice = document.getElementsByClassName("bikePrice");
let price = document.getElementById("price");
let usedBackground = document.querySelectorAll(".used-background");

function bikeFilter(e) {
  e.preventDefault();
  val_bikeMake = bikeMake.value.toUpperCase();
  val_Price = price.value.split("-");

  for (let i = 0; i < bike.length; i++) {
    BikePrice = parseInt(bikePrice[i].innerHTML.replace(/\W/g, ""));

    if (
      (val_bikeMake === "MAKE" ||
        bike[i].innerHTML.toUpperCase().indexOf(val_bikeMake) !== -1) &&
      (val_Price[0] === "price" ||
        (BikePrice > val_Price[0] && BikePrice < val_Price[1]))
    ) {
      usedBackground[i].style.display = "block";
    } else {
      usedBackground[i].style.display = "none";
    }
  }
}

if (searchBtn) {
  searchBtn.addEventListener("click", bikeFilter);
}

//<------------------ Show Finance calculator ----------------------->

let financeCalc = document.querySelector(".finance");
let slideIn = document.querySelector(".slideIn");
let cancel = document.querySelector(".cancel-backing");

function financeShow(e) {
  slideIn.classList.toggle("showSlide"), cancel.classList.toggle("timesShow");
}

function closeFinance(e) {
  cancel.classList.remove("timesShow"), slideIn.classList.remove("showSlide");
}

if (financeCalc) {
  financeCalc.addEventListener("click", financeShow);
}
if (cancel) {
  cancel.addEventListener("click", closeFinance);
}

//<------------------ Used bike filter appear -------------------->

let usedBacking = document.querySelector(".used-Slide-backing");
let usedSlideIn = document.querySelector(".used-SlideIn");
let usedCancel = document.querySelector(".usedCancelBacking");
let usedButton = document.querySelector(".usedFilter");

function usedShow(e) {
  usedSlideIn.classList.toggle("usedSlideOpen");
  usedCancel.classList.toggle("usedCancelOpen");
}

function closeUsedBike(e) {
  usedSlideIn.classList.remove("usedSlideOpen");
  usedCancel.classList.remove("usedCancelOpen");
}

if (usedButton) {
  usedButton.addEventListener("click", usedShow);
}
if (usedButton) {
  usedCancel.addEventListener("click", closeUsedBike);
}

let contactBtn = document.querySelector(".contact-btn");

if (contactBtn) {
  contactBtn.addEventListener("click", function(e) {
    alert(" On form submit, an email would be send to the dealership");
  });
}
