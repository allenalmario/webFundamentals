$(document).ready(function(){
    $("img").hover(function(){
        var original = $(this).attr("src");
        var alt = $(this).attr("data-alt-src");
        $(this).attr('src', alt);
        $(this).attr('data-alt-src', original);
    }, function(){
        var original = $(this).attr("src");
        var alt = $(this).attr("data-alt-src");
        $(this).attr('data-alt-src', original);
        $(this).attr('src', alt);
    });
});