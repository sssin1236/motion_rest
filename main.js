
let num1 = num2 = num3 = 0;

$(".prev").on("click", function(e){
    e.preventDefault();
    
    $("article.upper").removeClass("upper").addClass("lower");
    $(".textBox>article").css({ transitionDelay: "0s"});
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
    timer1 = setInterval(numCount1, 20);
    timer2 = setInterval(numCount2, 50);
    timer3 = setInterval(numCount3, 80);
});





function numCount1() {
    num1++;
    if (num1 > 235) {
        clearInterval(timer1);
    } else {
        $(".count1").text(num1);
    }
}

function numCount2() {
    num2++;
    if (num2 > 107) {
        clearInterval(timer2);
    } else {
        $(".count2").text(num2);
    }
}

function numCount3() {
    num3++;
    if (num3 > 98) {
        clearInterval(timer3);
    } else {
        $(".count3").text(num3);
    }
}