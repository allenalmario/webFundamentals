$(document).ready(function(){
    $("img").click(function(){
        var alt = $(this).attr("data-alt-src")
        $(this).attr('src', alt);
    });
});