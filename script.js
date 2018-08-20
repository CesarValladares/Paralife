$(document).ready(function() {

    $('#videoButton').on("click", function() {
        $('.modal').css('display', 'block');
    });
    /*$(".modal").css("display", "block");

    $('.closeModal').on("click", function() {
        $('.modal').css('display', 'none');
    });*/
});

$(document).click(function(){
    $('.modal').css('display', 'none');
});
$(".modal").click(function(e){
    e.stopPropagation();
    return false;
});
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
        {
        var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });
});
