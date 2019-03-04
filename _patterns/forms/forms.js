$(".btn-minus").on("click", function(){
  var oldValue=parseInt($("#quantity").val(),10);
  var newValue=oldValue-1;
  $("#quantity").val(newValue)
})

$(".btn-plus").on("click", function(){
  var oldValue=parseInt($("#quantity").val(),10);
  var newValue=oldValue+1;
  $("#quantity").val(newValue)
})
