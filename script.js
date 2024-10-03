let counterValue =0;

const counterDisplay = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

increaseButton.addEventListener("click", () => {
    counterValue++;
    updateCounter();
});

decreaseButton.addEventListener("click", () =>{
    counterValue++;
    updateCounter();
});

resetButton.addEventListener("click", ()=>{
    counterValue++;
    updateCounter();
});

function updateCounter(){
    counterDisplay.textContent = counterValue;
}