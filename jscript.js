function myFunctionResize() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$("#myTopnav>div>a").not('.icon').on('click',function(){
  $("#myTopnav").removeClass("responsive");
  $('#myTopnav').addClass('topnav');
});

var nav = document.getElementById('myTopnav');
window.onscroll = function(){
  if(window.pageYOffset > 50){
    nav.style.position = "fixed";
    nav.style.top = 0;
  } else {
    nav.style.position = "initial";
    nav.style.height = 57;
    box.style.position = "absolute";
    box.style.top = 150;
  }
}

//============ACTIVE SCROLLING==========
var homeOffsetTop = $('#home').offset().top;
var projectsOffsetTop = $('#projects').offset().top;
var testimonialsOffsetTop = $('#testimonials').offset().top;
var contactOffsetTop = $('#contact').offset().top;
//====FUNCTION TO ACTIVE SCROLL
$(document).on('scroll', function(){
  var scrollTop = $(document).scrollTop();
  var activeA;
  if (scrollTop < homeOffsetTop) {
    activeA = $('.topnav>a:nth-child(2)');
  } else if (scrollTop < projectsOffsetTop) {
    activeA = $('.topnav>a:nth-child(3)');
  } else if (scrollTop < testimonialsOffsetTop) {
    activeA = $('.topnav>a:nth-child(4)');
  } else if (scrollTop < contactOffsetTop) {
    activeA = $('.topnav>a:nth-child(5)');
  }
  activeA.addClass('active');
  $('.topnav>a').not(activeA).removeClass('active');
});
