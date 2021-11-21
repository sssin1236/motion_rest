$(".prev").on("click", function(e){
    e.preventDefault();
    
    $("article.upper").removeClass("upper").addClass("lower");
    $(".rolling>article").first().next().addClass("upper");
    $(".textBox>article").removeClass("on");
    $(".textBox>article").first().next().addClass("on");

    $(".textBox>article").first().appendTo(".textBox");
    $(".rolling>article").first().appendTo(".rolling");
    
    setTimeout(function(){
        $("article.lower").removeClass("lower");
    }, 1000);
});

$(".next").on("click", function(e){
    e.preventDefault();
    
    $("article.upper").removeClass("upper").addClass("lower");
    $(".rolling>article").last().addClass("upper");
    $(".textBox>article").removeClass("on");
    $(".textBox>article").last().addClass("on");

    $(".textBox>article").last().prependTo(".textBox");
    $(".rolling>article").last().prependTo(".rolling");
    
    setTimeout(function(){
        $("article.lower").removeClass("lower");
    }, 1000);
});

$(window).on("load", function(){
    $(".textBox").addClass("on");
});
