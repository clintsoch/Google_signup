document.getElementById("create").innerText = "Build a Google Sign Up!";
document.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = 'red';
});


function changeColor() {
    btn.style.backgroundColor = "pink";
}

const myBox = document.getElementById("box");
myBox.style.backgroundColor = "blue";
myBox.style.borderRadius = "50%";
myBox.style.marginLeft = "50px";


const newElement = document.createElement("h3");
newElement.innerText = "I am a new paragraph created by Javascript code!";
document.body.appendChild(newElement);


function writeText() {
    document.write("Sochima Ekwughe is a Gig, He writes Javascript, with so much skills");
}