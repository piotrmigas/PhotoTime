$(function () {

  $(".logo").on({
    mouseenter: function () {
      $(this).attr('src', 'img/f-logo.png');
    },
    mouseleave: function () {
      $(this).attr('src', 'img/logo.png');
    }
  });


});