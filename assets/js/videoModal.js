$(function(){
    $('.modal').on('hidden.bs.modal', function (e) {
      $iframe = $(this).find("iframe");
      $iframe.attr("src", $iframe.attr("src"));
    });
  });