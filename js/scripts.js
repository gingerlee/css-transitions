$(function() {
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
  });

  $('.trigger').on('click', function(){
    $(this).toggleClass('clicked');
  });
  $(".burger2").click(function(){
    $(".burger2").toggleClass("open");
  })
});
