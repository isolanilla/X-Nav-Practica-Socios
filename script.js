$(document).ready(function() {

  $("#update").click(function(){
    $("#accordion").accordion("destroy");
    console.log("joputa")
  $.getJSON("update.json", function(data) {
        console.log("gente de zona")
        timeline = $("#accordion").html();
        for (var i = 0; i < data.length; i++) {
          console.log("BUCLE update")
          timeline += "<h3> Autor:" + data[i].autor
          timeline += "<p class='imagen'><IMG SRC="+  data[i].avatar+ "></p>"
          timeline += "<p>" + data[i].fecha + "</p><h3>"
          timeline += "<div><p> titulo:" + data[i].titulo + "</p>"
          timeline += "<p> contenido "+ data[i].contenido +"</p></div>"
        }
        $("#update").hide();
        $("#accordion").append(timeline);
        $("#accordion").accordion();
      });

  })


  $.getJSON("myline.json", function(data) {
      timeline="";
      for (var i = 0; i < data.length; i++) {
        console.log("BUCLE 2")
        timeline += "<h3> Autor:" + data[i].autor
        timeline += "<p class='imagen'><IMG SRC="+  data[i].avatar+ "></p>"
        timeline += "<p>" + data[i].fecha + "</p><h3>"
        timeline += "<div><p> titulo:" + data[i].titulo + "</p>"
        timeline += "<p> contenido "+ data[i].contenido +"</p></div>"
      }

      $("#accordion2").append(timeline);

    });

  $.getJSON("timeline.json", function(data) {
      timeline="";
      for (var i = 0; i < data.length; i++) {
        console.log("BUCLE")
        timeline += "<h3> Autor:" + data[i].autor
        timeline += "<p class='imagen'><IMG SRC="+  data[i].avatar+ "></p>"
        timeline += "<p>" + data[i].fecha + "</p><h3>"
        timeline += "<div><p> titulo:" + data[i].titulo + "</p>"
        timeline += "<p> contenido "+ data[i].contenido +"</p></div>"
      }

      $("#accordion").append(timeline);
      $("#accordion").accordion({ active: true },{ collapsible: true }, { heightStyle: "content" });
      $("#accordion2").accordion({ active: true },{ collapsible: true }, { heightStyle: "content" });
    });
    $("#tabs").tabs();


});
