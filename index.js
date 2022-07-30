const cards = document.querySelectorAll(".card");
const container = document.querySelector(".container");

cards.forEach((card) => card.addEventListener("click", flip))
const indicatorImage = document.getElementById("indicator-image");
const statusImage = document.getElementById("status-image");
const audio = document.getElementsByTagName("audio")[0];
const count = document.getElementById("count");

indicatorImage.classList.add("hide");

//Variables
var isFlipped = false;
var firstCard;
var secondCard;
var counter = 0;
var mouseClickCount = 1;
function flip() {
    this.classList.add("flip");
    count.innerHTML = mouseClickCount++;

    console.log(isFlipped)
    if(!isFlipped) {
        isFlipped = true;
        firstCard = this;
        console.log(isFlipped)
    }
    else {
        secondCard = this;
        isFlipped = false;
        checkIt();
    }
}

function checkIt() {
    if(firstCard.dataset.image === secondCard.dataset.image){
        success();
    }
    else {
        fail();
    }
}
function success() {
    // console.log("Success");
    statusImage.src = "images/right.png";
    indicatorImage.classList.remove("hide");
    indicatorImage.classList.add("fade-in");

    setTimeout(() => {
        indicatorImage.classList.remove("fade-in");
        indicatorImage.classList.add("fade-out");
        indicatorImage.classList.add("hide");
        indicatorImage.classList.remove("fade-out");
    },1000)

    counter +=1;
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);

    if(counter === 8) {
        audio.play();
        // container.innerHTML = `<marquee direction="down"><h1 class="win-text text-center">Awesome!</h1></marquee>`;

    }
    reset();
}

function fail() {
    // console.log("Fail");
    statusImage.src = "images/incorrect.png";
    indicatorImage.classList.remove("hide");
    indicatorImage.classList.add("fade-in");

    setTimeout(() => {
        indicatorImage.classList.remove("fade-in");
        indicatorImage.classList.add("fade-out");
        indicatorImage.classList.add("hide");
        indicatorImage.classList.remove("fade-out");
    },1000)


    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
    }, 500)
}

function reset(){
    isFlipped = false;
    firstCard = null;
    secondCard
}

(function shuffle() {
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16);
        card.style.order = index;
    })
    setTimeout(() => {
        cards.forEach((card) => {
            card.classList.remove("flip");
        })
    }, 2000)
})();

window.onload

