(function() {
  $(".entry").on("click", function() {
    var entry = this;
    var postId = $(this).find("h2").attr("id");
    $.ajax({
      type:"GET",
      url: "/delete" + "/" + post_id,
      context: entry,
      success:function(result) {
        if(result.status === 1) {
          $(this).remove();
        }
      }
    });
  });

})($);