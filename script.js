<script>
var i = 0;
function dFunction() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("bar");
        var width = 1;
        var id = setInterval(frame, 100);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                alert("DONE!");
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
</script>
