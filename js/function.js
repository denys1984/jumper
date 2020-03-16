! function(t) {
    t(document).ready(function() {
        t(".next").on("click", function(e) {
            e.preventDefault(), t(this).closest(".step").hide().next().show(), t(".crumbs li.active").removeClass("active").next().addClass("active"), t(".bg__item.active").removeClass("active").next().fadeIn().addClass("active")
        })
    })


}
(jQuery);

$(function() {
    $('.bg__item').eq(0).attr('style', 'background-image: url(' + $('.bg-1').attr('src') + ')');
    $('.bg__item').eq(1).attr('style', 'background-image: url(' + $('.bg-2').attr('src') + ')');
    $('.bg__item').eq(2).attr('style', 'background-image: url(' + $('.bg-3').attr('src') + ')');
    $('.bg__item').eq(3).attr('style', 'background-image: url(' + $('.bg-4').attr('src') + ')');
    $('.bg__item').eq(4).attr('style', 'background-image: url(' + $('.bg-5').attr('src') + ')');
    $('.bg__item').eq(5).attr('style', 'background-image: url(' + $('.bg-6').attr('src') + ')');
})