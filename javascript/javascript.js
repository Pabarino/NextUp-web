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

/* Este script hace que la pagina web no haga scroll cuando se use el carousel*/
$(".navbar-nav li a").click(function NoHagaScroll(event) {
  var toggle = $(".navbar-collapse").hasClass("show");
  if (toggle) {
    $(".navbar-toggler").click();
  }
});

/*Este script hace que se comparen las contraseñas antes de submitir los valores introducidos en el formulario*/
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

/*CODIGO PARA BUSCAR DENTRO DE LA WEB PALABRAS EN EL BUSCADOR*/
/*
$(document).ready(function(){
  $('#search').keyup(function(){
  
   // Search text
   var text = $(this).val();
  
   // Hide all content class element
   $('.card').hide();
   $('.carousel').hide();
   $('.jumbotron').hide();
  
 
   // Search 
   $('.card .card-title:contains("'+text+'")').closest('.card').show();
  
  });
 });
 
 $.expr[":"].contains = $.expr.createPseudo(function(arg) {
   return function( elem ) {
    return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
   };
 });
 */