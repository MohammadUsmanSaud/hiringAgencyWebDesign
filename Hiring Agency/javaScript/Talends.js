$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        paurseOnHover:true,
        margin:20,
        nav:true,
        center:true,
        dots:false,
        // navText:["<img src=../images/circle-left-solid.svg class=img-fluid></img>","<img src=../images/circle-right-solid.svg class=img-fluid></img>"],
        navText:["<img src=../images/chevron-left.svg class=img-fluid></img>","<img src=../images/chevron-right.svg class=img-fluid></img>"],
        responsive:{
            0:{
                items:1,
                dots:true,
                nav:false
            },
            600:{
                items:3,
                //items:1
                nav:false,
                dots:false
            },
            1000:{
                items:3,
                //items:1
                nav:false,
                dots:false
            }
        }
    })

    $('.agency-Carousel').owlCarousel({
        loop:true,
        paurseOnHover:true,
        margin:20,
        nav:true,
        center:true,
        dots:false,
        // navText:["<img src=../images/circle-left-solid.svg class=img-fluid></img>","<img src=../images/circle-right-solid.svg class=img-fluid></img>"],
        navText:["<img src=../images/chevron-left.svg class=img-fluid></img>","<img src=../images/chevron-right.svg class=img-fluid></img>"],
        responsive:{
            0:{
                items:1,
                dots:true,
                nav:false
            },
            600:{
                items:1,
                //items:1
                nav:false,
                dots:false
            }
        }
    })
});  

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

$(document).ready(function(){
    
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;
  
  setProgressBar(current);
  
  $(".next").click(function(){
      
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      
      //show the next fieldset
      next_fs.show(); 
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;
  
              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              next_fs.css({'opacity': opacity});
          }, 
          duration: 500
      });
      setProgressBar(++current);
  });
  
  $(".previous").click(function(){
      
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      
      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      
      //show the previous fieldset
      previous_fs.show();
  
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;
  
              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              previous_fs.css({'opacity': opacity});
          }, 
          duration: 500
      });
      setProgressBar(--current);
  });
  
  function setProgressBar(curStep){
      var percent = parseFloat(100 / steps) * curStep;
      percent = percent.toFixed();
      $(".progress-bar")
        .css("width",percent+"%")   
  }
  
  $(".submit").click(function(){
      return false;
  })
      
});

$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        console.log(inputValue);
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(".formOption").hide();
        $(targetBox).show();
        $(".back").click(function(){
            $(".formOption").show();
            $(targetBox).hide();
        });
    });

   
    
});




 

  