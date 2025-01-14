console.log("Welcome to jquery library.");

// === ID ===
//document.getElementById("red"); // JavaScript
//$("#red"); // jQuery

// $id method key , value
$("#red").css("color","red").css("background-color","black");
$("#blue").css("color","blue").css("background-color","yellow");
$("#pink").css("color","pink").css("background-color","purple");

// === class ===

$(".title-two").css("color","green").css("font-size","48px");
// add a border to the paragraph with-border
$(".with-border").css("border","3px dashed black");

$(".my-border").click(function(){
    console.log("My border was clicked");
    $(this).css("border","3px dashed black");
    $(this).addClass("error");
});

// === TAGS ===
$("h3").css("background-color","gray").css("cursor","pointer");

let myTitle = $("h3");

myTitle.mouseover(function(){
    $(this).css("background-color","green");
});

myTitle.mouseleave(function(){
    $(this).css("background-color","lightgray");
});