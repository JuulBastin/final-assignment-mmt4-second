//Logo
$("#logo").fadeTo(1200, 1, function () {
});

//Modal
$('#playBtn').click(function () {
    $('#modalAG').css("display", "block");
});

$('#close').click(function () {
    $('#modalAG').css("display", "none");
});

//Video modal
var video0 = document.getElementById("my-video0");

$('#playBtn').click(function () {
    video0.play();
    $('#playPause0').removeClass('afspelen');
    $('#playPause0').addClass('pauze');
});

$('#close').click(function () {
    video0.pause();
    $('#playPause0').addClass('afspelen');
    $('#playPause0').removeClass('pauze');
});

$('#playPause0').click(function () {
    if ($(this).hasClass('afspelen')) {
        $(this).removeClass('afspelen');
        $(this).addClass('pauze');
        video0.play();
    } else {
        $(this).addClass('afspelen');
        $(this).removeClass('pauze');
        video0.pause();
    }
});

var btnForward0 = document.getElementById("forward0");
btnForward0.onclick = function () {
    video0.currentTime = video0.currentTime + 10;
};

//Videoplayer
//vid1
var video1 = document.getElementById("my-video1");

$('#playPause1').click(function () {
    if ($(this).hasClass('afspelen')) {
        $(this).removeClass('afspelen');
        $(this).addClass('pauze');
        $('#size1').addClass('playIndex');
        video1.play();
    } else {
        $(this).addClass('afspelen');
        $(this).removeClass('pauze');
        $('#size1').removeClass('playIndex');
        video1.pause();
    }
});

var btnForward1 = document.getElementById("forward1");
btnForward1.onclick = function () {
    video1.currentTime = video1.currentTime + 10;
};

//vid2
var video2 = document.getElementById("my-video2");

$('#playPause2').click(function () {
    if ($(this).hasClass('afspelen')) {
        $(this).removeClass('afspelen');
        $(this).addClass('pauze');
        $('#size2').addClass('playIndex');
        video2.play();
    } else {
        $(this).addClass('afspelen');
        $(this).removeClass('pauze');
        $('#size2').removeClass('playIndex');
        video2.pause();
    }
});

var btnForward2 = document.getElementById("forward2");
btnForward2.onclick = function () {
    video2.currentTime = video2.currentTime + 10;
};

//vid3
var video3 = document.getElementById("my-video3");

$('#playPause3').click(function () {
    if ($(this).hasClass('afspelen')) {
        $(this).removeClass('afspelen');
        $(this).addClass('pauze');
        $('#size3').addClass('playIndex');
        video3.play();
    } else {
        $(this).addClass('afspelen');
        $(this).removeClass('pauze');
        $('#size3').removeClass('playIndex');
        video3.pause();
    }
});

var btnForward3 = document.getElementById("forward3");
btnForward3.onclick = function () {
    video3.currentTime = video3.currentTime + 10;
};

//Tabs
$(function () {
    $("#tabs").tabs();
});
