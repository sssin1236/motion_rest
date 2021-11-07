$(".textBox>article").on("click", function(){
    $(this).appendTo(".textBox");

    let vid = $(this).find("video").attr("src");
    console.log(vid);
});