var $imgBtn = $('.img-btn');

$imgBtn.on('click', function (e) {
  var id = $(this).attr('href');
  e.preventDefault();
  $('.panels li').css('display', 'none');
  $(id).css('display', 'block');
});
