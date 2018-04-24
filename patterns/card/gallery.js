$(".small-img-show a").on("click", function (){
  var id=$(this).attr("href");
  $(".current-img").removeClass("current-img");
  $(id).addClass("current-img");
  $(".current-img-s").removeClass("current-img-s");
  $(this).parent().addClass("current-img-s");
})

$(".button-r").on("click", function() {
  var gallerySize = $("#img-div img").length;
  var currentPosition = $("#img-div img").index($(".current-img"));
  $(".current-img").removeClass("current-img");
  var nextImagePosition = currentPosition + 1;

  if(nextImagePosition >= gallerySize) {
    nextImagePosition = 0;
  }
  $("#img-div").children().eq(nextImagePosition).addClass("current-img");
  $(".current-img-s").removeClass("current-img-s");
  $(".small-img-show").children().eq(nextImagePosition).addClass("current-img-s");
})

$(".button-l").on("click", function() {
  var gallerySize = $("#img-div img").length;
  var currentPosition = $("#img-div img").index($(".current-img"));
  $(".current-img").removeClass("current-img");
  var nextImagePosition = currentPosition - 1 % gallerySize;
  $("#img-div").children().eq(nextImagePosition).addClass("current-img");
  $(".current-img-s").removeClass("current-img-s");
  $(".small-img-show").children().eq(nextImagePosition).addClass("current-img-s");
})
