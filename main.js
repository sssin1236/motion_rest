$(".textBox>article").on("click", function(){
    $(this).appendTo(".textBox");
    $(".rolling>article").first().appendTo(".rolling");

    let vid = $(this).find("video").attr("src");
    console.log(vid);
});