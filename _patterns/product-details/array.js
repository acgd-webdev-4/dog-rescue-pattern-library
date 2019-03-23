var $imgBtn = $('.img-btn');

$imgBtn.on('click', function () {
  var id = $(this).attr('href');
  $('.panels li').css('display', 'none');
  $(id).css('display', 'block');
});
