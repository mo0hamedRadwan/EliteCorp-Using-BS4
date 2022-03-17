// Jquery Code

$(function(){
    // Adject Slider Height
    var documentHeight = $(window).height(),
        upperHeight  = $(".upper-bar").innerHeight() + $(".navbar").innerHeight();
    $(".slide , .carousel-item").height(documentHeight - upperHeight);

    // Featured Work Shuffle
    $(".featured-work ul li").click(function(){
        var value = $(this).attr("data-filter");
        if(value == "all"){
            $(".filter").show("1000");
        }else{
            $(".filter").not("."+value).hide("1000");
            $(".filter").filter("."+value).show("1000");
        }
        $("li.active").removeClass("active");
        $(this).addClass("active");
    });
});