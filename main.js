$(function() {
    $(".toggler").on("click", function(){
        if($(".nav-items").hasClass("active")){
            $(".toggler").toggleClass()
            $(".nav-items").removeClass("active");
        }
        else{
            $(".nav-items").addClass("active");
        }
    })
})