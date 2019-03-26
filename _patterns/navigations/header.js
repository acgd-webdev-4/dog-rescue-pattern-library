var $subnav = $('.sub-nav');
var $sidebar = $('.side-bar')
var $btn = $('.jump-nav');

$subnav.on('change', function(){
  var isOpen = $(this).prop('checked')
  $subnav.prop('checked', false)
  if (isOpen) {
    $(this).prop('checked', true)
  }
})

$sidebar.on('change', function(){
  var isOpen = $(this).prop('checked')
  $sidebar.prop('checked', false)
  if (isOpen) {
    $(this).prop('checked', true)
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    console.log($btn.addClass('show'));
  } else {
    $btn.removeClass('show');
  }
});

$btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
