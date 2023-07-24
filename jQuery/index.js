//document.querySelectorAll("button")
// $("h1").css("color", "green");
$("h1").on("mouseover", function(){
    $(this).css("color","purple");
    setTimeout(function(){
    $("h1").css("color","black");
    },500);
});