$(document).ready(function(){
    $(".btn").click(function(){
      $(".smenu").toggleClass("side");
    });
      $(".txtb input").focus(function(){
        $(this).addClass("focus");
      });
      $(".txtb input").blur(function(){
        if($(this).val() == "")
        {$(this).removeClass("focus");}
      });
      $("a").click(function() {
        $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top - 100
        }, {
          duration: 500,
          easing: "swing"
        });
        return false;
      });
    });