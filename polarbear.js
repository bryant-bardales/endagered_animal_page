
//Function that changes button text from "CLICK HERE TO DONATE" to "THANK YOU FOR YOUR DONATION" for 5 seconds then changes back to the original
function donate(button, text, textToChangebackTo){
    let donateBtn = document.getElementById(button)
    donateBtn.textContent = text;
    setTimeout(function() { document.getElementById(button).textContent = textToChangebackTo;}, 5000);
}