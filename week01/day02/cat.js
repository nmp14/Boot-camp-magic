document.getElementById("grow").onclick = function () { growImg() };
document.getElementById("shrink").onclick = function () { shrinkImg() };

growImg = () => {
    document.getElementById("img1").style.width = '350px';
}

shrinkImg = () => {
    document.getElementById("img1").style.width = '50px';
}