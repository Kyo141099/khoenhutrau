$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  margin:10,
  focusOnSelect: true
});
$(".banner-slider").slick( {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  dots: true,
  arrows:false
});
$('.vennor-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
$(window).on("scroll", () => {
  if (window.scrollY > 5) {
    $(".navbar-header").addClass("fixed-top");
  } else {
    $(".navbar-header").removeClass("fixed-top");
  }
});

var gotop = $(".back-to-top");
$(window).on("scroll", () => {
  if ($(this).scrollTop() >= 50) {
    gotop.addClass("active");
  } else {
    gotop.removeClass("active");
  }
});
$(document).ready(function () {
  gotop.on("click", () => {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  $("a").on("click", function (event) {
//     // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
//       // Prevent default anchor click behavior
      event.preventDefault();

//       // Store hash
     var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
     $("html, body").animate(
       {
         scrollTop: $(hash).offset().top - 85,
        },
        800
      );
   } // End if
 });
});
$(document).ready(function () {
  $(".navbar-toggler").addClass("collapsed");
  gotop.on("click", () => {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  $(document).click(function (e) {
    if (
      $(e.target) != $(".btn-view > span.fa-bars") &&
      !$(e.target).hasClass("btn-view") &&
      $(e.target).parents(".hide-view").length === 0
    ) {
      $(".hide-view").removeClass("show");
    }
  });
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 85,
        },
        800
      );
    } // End if
  });
});

$(document).on("click", ".dropdown .fa.fa-chevron-down", (e) => {
  if (!$(e.target).parent().parent().hasClass("open")) {
    $("#accordion .dropdown.open").removeClass("open");
  }
  $(e.target).parent().parent().toggleClass("open");
});

$(document).click(function (e) {
  if (
    $(e.target) != $(".btn-view > span.fa-bars") &&
    !$(e.target).hasClass("btn-view") &&
    $(e.target).parents(".hide-view").length === 0
  ) {
    $(".hide-view").removeClass("show");
  }
});

$(document).ready(function() {
  $("#accordian a").click(function() {
      var link = $(this);
      var closest_ul = link.closest("ul");
      var parallel_active_links = closest_ul.find(".active")
      var closest_li = link.closest("li");
      var link_status = closest_li.hasClass("active");
      var count = 0;

      closest_ul.find("ul").slideUp(function() {
          if (++count == closest_ul.find("ul").length)
              parallel_active_links.removeClass("active");
      });

      if (!link_status) {
          closest_li.children("ul").slideDown();
          closest_li.addClass("active");
      }
  })
})

$('input.input-qty').each(function() {
  var $this = $(this),
    qty = $this.parent().find('.is-form'),
    min = Number($this.attr('min')),
    max = Number($this.attr('max'))
  if (min == 0) {
    var d = 0
  } else d = min
  $(qty).on('click', function() {
    if ($(this).hasClass('minus')) {
      if (d > min) d += -1
    } else if ($(this).hasClass('plus')) {
      var x = Number($this.val()) + 1
      if (x <= max) d += 1
    }
    $this.attr('value', d).val(d)
  })
})

let modalBtn = document.getElementById("popup-btn");
let modal = document.querySelector(".popup");
let closeBtn = document.querySelector(".close-btn");
// Hiển thị popup khi nhấp chuột vào button
modalBtn.onclick = function(){
modal.style.display = "block"
}
// Đóng popup khi ấn vào nút đóng
closeBtn.onclick = function(){
modal.style.display = "none"
}
// Đóng khi nhấp chuột vào bất cứ khu vực nào trên màn hình
window.onclick = function(e){
if(e.target == popup){
modal.style.display = "none"
}
}



$(document).ready(function(){
  $(".notification_icon .fas.fa-shopping-cart").click(function(){
      $(".notification_dropdown").toggleClass("active");
  });
});





$('input[type="radio"]').click(function(){
  if($(this).attr("value")=="COD"){
      $(".payments-info1").hide('slow');
  }
  if($(this).attr("value")=="Bank"){
      $(".payments-info2").show('slow');

  }        
});
$('input[type="radio"]').trigger('click');
 function checkMethodShow(el) {
   if($(el).val() == 'COD') {
     $('.payments-info1').show();           
     $('.payments-info2').hide();           
 }
 else {
     $('.payments-info1').hide();   
     $('.payments-info2').show();   
 }
 }

 $(document).ready(function() {
   $('input[type="radio"]').click(function() {
     checkMethodShow(this);
   });
  
  $('input[type="radio"]#COD').trigger('click');
});