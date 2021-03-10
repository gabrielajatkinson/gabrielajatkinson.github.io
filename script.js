/*-----Toggling According -----*/
$(document).ready(function() {
  $("#accordian .about h1").click(function() {
    $('.about h1').addClass('checked');
    $('.blog h1').addClass('small'); 
    $('.logo').addClass('bottom'); 
    $("#accordian .blog").animate(
      { width: "9.5%"}, 500);
    $("#accordian .about").animate(
      { width: "64.55%"}, 500);
    $("#accordian .about > div").show(500);
    $("#accordian .blog > div").hide(500);
    $('.blog h1').removeClass('checked');
    $('.about h1').removeClass('small'); 
  });
  $("#accordian .blog h1").click(function() {
    $('.blog h1').addClass('checked'); 
    $('.about h1').addClass('small');  
    $('.logo').addClass('bottom');     
    $("#accordian .about").animate(
      { width: "9.5%" }, 500);
    $("#accordian .blog").animate(
      { width: "64.55%" }, 500);
    $("#accordian > .blog > div").show(500);
    $("#accordian > .about > div").hide(500);
    $('.about h1').removeClass('checked');
    $('.blog h1').removeClass('small');     
  });
  $(".logo img").click(function() {
    $("#accordian .about").animate(
      { width: "34.75%"}, 500);
    $("#accordian .blog").animate(
      {width: "34.75%"}, 500);
    $("#accordian .blog > div").hide(500);
    $("#accordian .about > div").hide(500);
    $('.about h1').removeClass('checked');
    $('.blog h1').removeClass('checked');
    $('.logo').removeClass('bottom'); 
  });
});