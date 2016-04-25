$(document).ready(function() {

    $("#tabs").tabs();

  $.getJSON("timeline.json", function(data) {
      timeline="";
      for (var i = 0; i < data.length; i++) {
        console.log("BUCLE")
        timeline += "<h3> Autor:" + data[i].autor 
        timeline = timeline + "<p class='imagen'>"+  data[i].avatar+ "</p>"
        timeline = timeline + "<p>" + data[i].fecha + "</p><h3>"
        timeline = timeline + "<div><p> titulo:" + data[i].titulo + "</p>"
        timeline = timeline + "<p> contenido "+data[i].contenido +"</p></div>"

      }
      console.log(timeline)
      $("#accordion").append(timeline);
      $("#accordion").accordion();
      $("#accordion2").accordion();



	});

});
