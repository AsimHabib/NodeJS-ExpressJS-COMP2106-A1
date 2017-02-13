/*
File: main.js
Author: Asim Habib
Website: Asim Habib Portfolio
File Description: This file includes all the Javascript code for the web application
*/

/* JQuery Funstion Starts */
$(document).ready(function() {
/*============================================
Backstretch Images
==============================================*/
	//$('.jumbotron').backstretch();
    //to load from a url that can accept a resolution and provide the best image for that resolution
    $(".jumbotron").backstretch([
     "./images/ah3.jpg?width={width}&height={height}",   
  ]);

   $("#main-footer").backstretch([
    "./images/ft-bg.jpg?width={width}&height={height}",
  ]);

/*============================================
Navigation Functions
==============================================*/
if ($(window).scrollTop()===0){
    $('#main-nav').removeClass('scrolled');
}
else{
    $('#main-nav').addClass('scrolled');    
}

$(window).scroll(function(){
    if ($(window).scrollTop()===0){
        $('#main-nav').removeClass('scrolled');
    }
    else{
        $('#main-nav').addClass('scrolled');    
    }
});
}); /*End of main JQuery document.ready function*/