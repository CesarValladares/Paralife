$(document).ready(function() {
    $(".modal").css("display", "block");

    $('#videoButton').on("click", function() {
        $('.modal').css('display', 'block');
    });

    $('.closeModal').on("click", function() {
        $('.modal').css('display', 'none');
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == $('#myModal')) {
            $('#myModal').css('display', 'none');
        }
    }
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
