let input = document.getElementById("input");
let qrcode = document.getElementById("qrcode");
let button = document.getElementById("buttonGenerate");


button.addEventListener('click', function(){
    genQrCode();
    setTimeout(newElement, 1500);
   
});

function genQrCode(){
    let inputValue = input.value;
    if(!inputValue) return alert("Enter a text first");

    qrcode.src = "https://api.qrserver.com/v1/"
    +"create-qr-code/?size=150x150&data="+inputValue;
   
}

function newElement(){
    //creating a new element
    let newP = document.createElement("p");

    //creating the <p> message
    let paragraphMessage = document.createTextNode("Scan with your cellphone");

    //add text to tag <p>
    newP.appendChild(paragraphMessage);

    //adding into the DOM
    let newParagraph = document.getElementById("messageBelowQrcode");
    newParagraph.appendChild(newP);

}