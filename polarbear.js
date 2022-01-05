

function donate(button, text, textToChangebackTo){
    let donateBtn = document.getElementById(button)
    donateBtn.textContent = text;
    setTimeout(function() { document.getElementById(button).textContent = textToChangebackTo;}, 5000);
   

    
}