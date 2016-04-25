$(document).ready(function() {

  $("#update").click(function(){
    $("#accordion").accordion("destroy");
  $.getJSON("update.json", function(data) {
        timeline = $("#accordion").html();
        for (var i = 0; i < data.length; i++) {
          timeline += "<h3> Autor:" + data[i].autor
          timeline += "<p class='imagen'><IMG SRC="+  data[i].avatar+ "></p>"
          timeline += "<p>" + data[i].fecha + "</p><h3>"
          timeline += "<div><p> titulo:" + data[i].titulo + "</p>"
          timeline += "<p> contenido: "+ data[i].contenido +"</p></div>"
        }
        $("#update").hide();
        $("#accordion").append(timeline);
        $("#accordion").accordion();
      });

  })


  $.getJSON("myline.json", function(data) {
      timeline="";
      for (var i = 0; i < data.length; i++) {
        timeline += "<h3> Autor:" + data[i].autor
        timeline += "<p class='imagen'><IMG SRC="+  data[i].avatar+ "></p>"
        timeline += "<p>" + data[i].fecha + "</p><h3>"
        timeline += "<div><p> titulo:" + data[i].titulo + "</p>"
        timeline += "<p> contenido: "+ data[i].contenido +"</p></div>"
      }

      $("#accordion2").append(timeline);

    });

  $.getJSON("timeline.json", function(data) {
      timeline="";
      for (var i = 0; i < data.length; i++) {
        timeline += "<h3> Autor:" + data[i].autor
        timeline += "<p class='imagen'><IMG SRC="+  data[i].avatar+ "></p>"
        timeline += "<p>" + data[i].fecha + "</p><h3>"
        timeline += "<div><p> titulo:" + data[i].titulo + "</p>"
        timeline += "<p> contenido: "+ data[i].contenido +"</p></div>"
      }

      $("#accordion").append(timeline);
      $("#accordion").accordion({ active: true },{ collapsible: true }, { heightStyle: "content" });
      $("#accordion2").accordion({ active: true },{ collapsible: true }, { heightStyle: "content" });
    });
    $("#tabs").tabs();


});
