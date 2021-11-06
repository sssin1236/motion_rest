$(".rolling article").on("click", function(){
    $(this).appendTo(".rolling");

    let vid = $(this).find("video").attr("src");
    console.log(vid);
});