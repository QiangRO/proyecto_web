$(window).scroll(function () {
    var scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height(),
        scrollPercent = (scroll / (dh - wh)) * 100;
    $('#barra-progreso').css('height', scrollPercent + '%');
})
