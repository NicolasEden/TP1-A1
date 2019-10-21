var modal = document.getElementById("alertbox");

var btn = document.getElementById("imput2");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    modal.style.animationName = "start";
}
span.onclick = function() {
    modal.style.display = "none";
}
