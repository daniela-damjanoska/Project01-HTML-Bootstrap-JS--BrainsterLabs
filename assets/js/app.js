// active hamburger
$(document).ready(function() {
    $('.icon-hamburger').click(function() {
      $('.icon-hamburger').toggleClass('active-hamburger');
    });
  })


// blur the background when navbar is open on tablet
$(function() {
  $('#navbarSupportedContent').on("show.bs.collapse", function()  {
    $("body").addClass("blur-body")
    }).on("hide.bs.collapse", function()  {
      $("body").removeClass("blur-body");
   });
})


// pagination on mobile and hide the load-more button
$(".card").slice(0, 6).show();
$("#loadMore").on("click", function(){
  $(".card:hidden").slice(0, 6).show();
  if($(".card:hidden").length ==0) {
    $("#loadMore").fadeOut();
  }
})


// hide the load-more button when the marketing cards are open/filtered
$("#marketing-cards").on("change", function(){
  $(".card.marketing:hidden").show();
  if($(".card.marketing:hidden").length ==0) {
    $("#loadMore").fadeOut();
  }
})


// hide the load-more button when the programming cards are open/filtered
$("#programming-cards").on("change", function(){
  $(".card.programming:hidden").show();
  if($(".card.programming:hidden").length ==0) {
    $("#loadMore").fadeOut();
  }
})


// hide the load-more button when the design cards are open/filtered
$("#design-cards").on("change", function(){
  $(".card.design:hidden").show();
  if($(".card.design:hidden").length ==0) {
    $("#loadMore").fadeOut();
  }
})