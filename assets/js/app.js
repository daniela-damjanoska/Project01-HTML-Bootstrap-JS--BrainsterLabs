$(document).ready(function() {
    $('.icon-hamburger').click(function() {
      $('.icon-hamburger').toggleClass('active-hamburger');
    });
  })

$(function() {
  $('#navbarSupportedContent').on("show.bs.collapse", function()  {
    $("body").addClass("blur-body")
    }).on("hide.bs.collapse", function()  {
      $("body").removeClass("blur-body");
    });
  })

document.querySelector('#marketing-cards').addEventListener('change', filterMarketing);
document.querySelector('#programming-cards').addEventListener('change', filterProgramming);
document.querySelector('#design-cards').addEventListener('change', filterDesign);

function filterMarketing() {
  hideAllCards();

  if(document.querySelector('#marketing-cards').checked) {
      changeColorOne();

      let marketingCards = document.querySelectorAll('.marketing')
      marketingCards.forEach(marketingCard => {
        marketingCard.style.display = 'inline-block';
    });

    document.querySelector('#programming-cards').checked = false;
    document.querySelector('#design-cards').checked = false;
    document.querySelector('#filter-programming').style.background = "#302f38";
    document.querySelector('#filter-programming p').style.color = "#fff"; 
    document.querySelector('#filter-design').style.background = "#302f38";
    document.querySelector('#filter-design p').style.color = "#fff";
} else {
    showAllCards();
    changeColorOneReverse();
  }  
}

function filterProgramming() {
  hideAllCards();

  if(document.querySelector('#programming-cards').checked) {
      changeColorTwo();

      let programmingCards = document.querySelectorAll('.programming')
      programmingCards.forEach(programmingCard => {
        programmingCard.style.display = 'block';
    });

    document.querySelector('#marketing-cards').checked = false;
    document.querySelector('#design-cards').checked = false;
    document.querySelector('#filter-marketing').style.background = "#302f38";
    document.querySelector('#filter-marketing p').style.color = "#fff"; 
    document.querySelector('#filter-design').style.background = "#302f38";
    document.querySelector('#filter-design p').style.color = "#fff";
} else {
    showAllCards();
    changeColorTwoReverse();
  }  
}

function filterDesign() {
  hideAllCards();

  if(document.querySelector('#design-cards').checked) {
      changeColorThree();

      let designCards = document.querySelectorAll('.design')
      designCards.forEach(designCard => {
        designCard.style.display = 'inline-block';
    });

    document.querySelector('#marketing-cards').checked = false;
    document.querySelector('#programming-cards').checked = false;
    document.querySelector('#filter-marketing').style.background = "#302f38";
    document.querySelector('#filter-marketing p').style.color = "#fff"; 
    document.querySelector('#filter-programming').style.background = "#302f38";
    document.querySelector('#filter-programming p').style.color = "#fff";
} else {
    showAllCards();
    changeColorThreeReverse();
  }  
}

function hideAllCards() {
  let allCards = document.querySelectorAll('.card');
  allCards.forEach(card => {
    card.style.display = 'none';
});
}

function showAllCards() {
  let allCards = document.querySelectorAll('.card');
  allCards.forEach(card => {
    card.style.display = 'inline-block';
});
}

function changeColorOne() {
  document.querySelector('#filter-marketing').style.background = "#eb3b3b";
  document.querySelector('#filter-marketing p').style.color = "#302f38";
}

function changeColorOneReverse() {
  document.querySelector('#filter-marketing').style.background = "#302f38";
  document.querySelector('#filter-marketing p').style.color = "#fff";
}

function changeColorTwo() {
  document.querySelector('#filter-programming').style.background = "#eb3b3b";
  document.querySelector('#filter-programming p').style.color = "#302f38";  
}

function changeColorTwoReverse() {
  document.querySelector('#filter-programming').style.background = "#302f38";
  document.querySelector('#filter-programming p').style.color = "#fff";  
}

function changeColorThree() {  
  document.querySelector('#filter-design').style.background = "#eb3b3b";
  document.querySelector('#filter-design p').style.color = "#302f38";
}

function changeColorThreeReverse() {  
  document.querySelector('#filter-design').style.background = "#302f38";
  document.querySelector('#filter-design p').style.color = "#fff";
}

$(".card").slice(0, 6).show();
$("#loadMore").on("click", function(){
  $(".card:hidden").slice(0, 6).show();
  if($(".card:hidden").length ==0) {
    $("#loadMore").fadeOut();
  }
})

$("#marketing-cards").on("change", function(){
  $(".card.marketing:hidden").show();
  if($(".card.marketing:hidden").length ==0) {
    $("#loadMore").fadeOut();
  }
})

$("#programming-cards").on("change", function(){
  $(".card.programming:hidden").show();
  if($(".card.programming:hidden").length ==0) {
    $("#loadMore").fadeOut();
  }
})

$("#design-cards").on("change", function(){
  $(".card.design:hidden").show();
  if($(".card.design:hidden").length ==0) {
    $("#loadMore").fadeOut();
  }
})