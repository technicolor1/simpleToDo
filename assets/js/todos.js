$("ul").on("click", "li", function() {
   $(this).toggleClass("completed");
   // 'this' - only what is clicked is affected
});

$("ul").on("click", "span", function(event) {
   $(this).parent().fadeOut(500, function() {
      $(this).remove();
   });
   // stops click listener from bubbling to parent elements
   event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
   if (event.which === 13) {
      var toDoText = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + "</li>")
   }
   event.stopPropagation();
});
