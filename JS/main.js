$(document).ready(function(){

    $("#tab1").click(function(){
        $("#text1").show();
        $("#text2").hide();
        $("#text3").hide();
    });

    $("#text2").hide();
    $("#tab2").click(function(){
        $("#text1").hide();
        $("#text2").show();
        $("#text3").hide();
    });

    $("#text3").hide();
    $("#tab3").click(function(){
        $("#text1").hide();
        $("#text2").hide();
        $("#text3").show();
    });

})



