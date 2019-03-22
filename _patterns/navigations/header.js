var $subnav = $('.sub-nav');
var $sidebar = $('.side-bar')

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
})
