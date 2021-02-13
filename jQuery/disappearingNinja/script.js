$(document).ready(function(){
    $('img').click(function(){
        $(this).hide(function() {
        });
    });
    $("#restore").click(function() {
        $("img").show();
    });
});