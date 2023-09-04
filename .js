$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".main").css("background" , "blue");
        }
  
        else{
            $(".main").css("background" , "#333");  	
        }
    })
  })