document.getElementById('imput').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        var modal = document.getElementById("alertbox");
        document.getElementById('imput').value = ''
        modal.style.display = "block";
        modal.style.animationName = "start";
    }
});
