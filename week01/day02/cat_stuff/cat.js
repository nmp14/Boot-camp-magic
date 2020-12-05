// Onclick actions for growing and shrinking image. #img1
document.getElementById("grow").onclick = function() { growImg() };
document.getElementById("shrink").onclick = function() { shrinkImg() };

document.getElementById("orange").onclick = function() { orangeText() };
document.getElementById("blue").onclick = function() { blueText() };
document.getElementById("green").onclick = function() { greenText() };

//Functions
growImg = () => {
    document.getElementById("img1").style.width = '350px';
}

shrinkImg = () => {
    document.getElementById("img1").style.width = '50px';
}

orangeText = () => {
    document.getElementById("colorText").style.color = "orange";
}

blueText = () => {
    document.getElementById("colorText").style.color = "blue";
}

greenText = () => {
    document.getElementById("colorText").style.color = "green";
}