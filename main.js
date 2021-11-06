$(".rolling article").on("click", function(){
    $(this).appendTo(".rolling");
    $(".rolling").css({ transform: translateX("-120px")})

    let vid = $(this).find("video").attr("src");
    console.log(vid);
});