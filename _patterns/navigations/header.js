var $subnav = $(".sub-nav");

$subnav.on("change", function(){
  var isOpen = $(this).prop("checked")
  $subnav.prop("checked", false)
  if (isOpen) {
    $(this).prop("checked", true)
  }
})
