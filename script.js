$(document).ready(function(){
 $('.id').on('click', function(){
    $(this).toggleClass('display');
    $('.color').toggleClass('color-gold');
 });
})

var html = "<div class='col span_1_of_8 cl id grey'><img class='col span_2_of_8 img' alt='clickable-image' src='img/arrow.png' /><p class='col span_6_of_8 text-box'><span style='font-weight: bold;''>Lorem ipsum dol sit amet, consec tetur</span><br/><br/><span>Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </span></p></div>"
