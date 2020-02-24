/****** Mis javascripts para Bootstrap *******/
$(document).ready(function smoothScroll(){
  // Add smooth scrolling to all links
  $("a").not(".noscroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function comprobarClave(){
    clave1 = document.f1.clave1.value
    clave2 = document.f1.clave2.value
    var checkBox = document.getElementById("exampleCheck1");

    if (clave1 != clave2) { 
      alert("Passwords are different")
    }   
    else if (checkBox.checked == true) {
      document.f1.submit(); 
    }
}
