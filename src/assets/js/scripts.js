$(document).ready(function () {
  $(".nav-bar").click(function (event) {
    $(this).toggleClass('isShow');
    $('.header-menu').toggleClass('isShow');
  });
});

