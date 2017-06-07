(function() {
  var url = "https://raw.github.com/jquery/jquery-color/master/jquery.color.js";
  $.getScript(url, function() {
    $("#go").click(function(){
      $(".block")
        .animate( { backgroundColor: "rgb(255, 180, 180)" }, 1000 )
        .delay(500)
        .animate( { backgroundColor: "olive" }, 1000 )
        .delay(500)
        .animate( { backgroundColor: "#00f" }, 1000 );
    });
  });
})();
