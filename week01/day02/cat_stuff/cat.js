// Onclick actions for growing and shrinking image. #img1
document.getElementById("grow").onclick = function () { growImg() };
document.getElementById("shrink").onclick = function () { shrinkImg() };

//Functions
growImg = () => {
    document.getElementById("img1").style.width = '350px';
}

shrinkImg = () => {
    document.getElementById("img1").style.width = '50px';
}
