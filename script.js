// Toggle Dropdown Function
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close Modal Function
function closeModal() {
    var modal = document.getElementById('id01');
    modal.style.display = "none";
}

// Automatic Slideshow Function
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
}

// Close dropdown when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
