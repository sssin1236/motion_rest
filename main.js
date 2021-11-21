$(".textBox>article").on("click", function(){
    let i = $(this).index();
    $(this).appendTo(".textBox");
    $(".rolling>article").eq(i).appendTo(".rolling");
    
    $("article.upper").removeClass("upper").addClass("lower");
    $(".rolling>article").eq(i).addClass("upper");
    
    setTimeout(function(){
        $("article.lower").removeClass("lower");
    }, 1000);

    let vid = $(this).find("video").attr("src");
    $(".rolling>article").children().find("video").attr({ src: vid });
});

$(window).on("load", function(){
    $(".textBox").addClass("on");
});
