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

$(document).ready(function (){
    $("#myTopnav>div>a").not('.icon').click(function (){
      var toScroll = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(toScroll).offset().top
        }, 1500);
    });
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
// =====TOGGLE CONTACT DESKTOP\MOBILE=====
function checksize(){
  if ($(".topnav>a.hnav.navbar-brand").css("font-size") != "32px"){
    $("#contact>div.mobile").hide();
    $("#contact>div.desktop").show();

  } else if ($(".topnav>a.hnav.navbar-brand").css("font-size") == "32px"){
    $("#contact>div.desktop").hide();
    $("#contact>div.mobile").show();

  }
}

$(document).ready(function(){
  checksize();
  $(window).resize(checksize());

});



// =====CONTACT ONCLICK COLOR CHANGE=====
$(document).ready(function(){
  $('#contact>.mobile>.icon>.media-object>a').on('mouseenter', function(){
    $('svg>.outline', this).attr('fill', 'rgb(0, 0, 0)');
  });
  $('#contact>.mobile>.icon>.media-object>a').on('mouseleave', function(){
    $('svg>.outline', this).attr('fill', 'rgb(222,222,186)');
  });
// =====DESKTOP COLOR ANIMATION ON HOVER=====
  $("#contact>.desktop>.media>.media-object>a>svg").mouseenter(function() {
    var idA = $(this).attr('id');
    var animate = document.createElementNS("http://www.w3.org/2000/svg", 'animate');

    animate.setAttribute("id", "an");
    animate.setAttribute("attributeName", "fill");
    animate.setAttribute("attributeType", "CSS");
    animate.setAttribute("from", "rgb(222,222,186");
    animate.setAttribute("to", "black");
    animate.setAttribute("begin", "0s");
    animate.setAttribute("dur", "3s");
    animate.setAttribute("fill", "freeze");
    var outline = this.getElementsByClassName("outline")[0];
    outline.appendChild(animate);
  });
  $("#contact>.desktop>.media>.media-object>a>svg").mouseleave(function() {
    $("svg>path").empty();
  });

});
