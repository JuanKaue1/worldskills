function myFunctionb() {
    document.getElementById("myDropdownb").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtnb')) {
        var dropdownsb = document.getElementsByClassName("dropdown-contentb");
        var i;
        for (i = 0; i < dropdownsb.length; i++) {
            var openDropdownb = dropdownsb[i];
            if (openDropdownb.classList.contains('show')) {
                openDropdownb.classList.remove('show');
            }
        }
    }
}