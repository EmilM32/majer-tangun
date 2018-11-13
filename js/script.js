$(document).ready(function(){

    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1000);

    $( window ).rightClickMenu("#menu");

    $(".fa-envelope").mouseenter(function(){
      $(".centerDiv h1").text("emil@majer.tangun.pl");
    });
    $(".fa-envelope").mouseleave(function(){
      $(".centerDiv h1").text("Emil Majer");
    });

    $("#color1, .menu2").click(function(){
      $("#content, #projekty").hide("slow");
      $("#certyfikaty").show("slow");
    });

    $("#backArrow, .menu1").click(function(){
      $("#content").show("slow");
      $("#certyfikaty, #projekty").hide("slow");
    });

    $("#color3, .menu3").click(function(){
      $("#content, #certyfikaty").hide("slow");
      $("#projekty").show("slow");
    });

    $("#backArrow_projects").click(function(){
      $("#projekty").hide("slow");
      $("#content").show("slow");
    });

    $(".java_h4").mouseenter(function(){
      $(".pro_www, .pro_gis").css({opacity: 0.2});
    });
    $(".java_h4").mouseleave(function(){
      $(".pro_www, .pro_gis").css({opacity: 1});
    });
    $(".www_h4").mouseenter(function(){
      $(".pro_java, .pro_gis").css({opacity: 0.2});
    });
    $(".www_h4").mouseleave(function(){
      $(".pro_java, .pro_gis").css({opacity: 1});
    });
    $(".gis_h4").mouseenter(function(){
      $(".pro_java, .pro_www").css({opacity: 0.2});
    });
    $(".gis_h4").mouseleave(function(){
      $(".pro_java, .pro_www").css({opacity: 1});
    });

});
