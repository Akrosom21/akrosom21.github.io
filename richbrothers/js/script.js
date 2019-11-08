$(function() {

$('.time__inner').countdown({until: +64800, format: 'HMS', padZeroes: true});


var d = new Date();
var month;
if (d.getMonth()+1 == 11) {
    month = 'ноября';
}
else if (d.getMonth()+1 == 12) {
    month = 'декабря';
}
else if (d.getMonth()+1 == 01 || d.getMonth()+1 == 1) {
    month = 'января';
}
else if (d.getMonth()+1 == 02 || d.getMonth()+1 == 2) {
    month = 'февраля';
}
else if (d.getMonth()+1 == 03 || d.getMonth()+1 == 3) {
    month = 'марта';
}
else if (d.getMonth()+1 == 04 || d.getMonth()+1 == 4) {
    month = 'апреля';
}
else if (d.getMonth()+1 == 05 || d.getMonth()+1 == 5) {
    month = 'мая';
}
else if (d.getMonth()+1 == 06 || d.getMonth()+1 == 6) {
    month = 'июня';
}
else if (d.getMonth()+1 == 07 || d.getMonth()+1 == 7) {
    month = 'июля';
}
else if (d.getMonth()+1 == 08 || d.getMonth()+1 == 8) {
    month = 'августа';
}
else if (d.getMonth()+1 == 09 || d.getMonth()+1 == 9) {
    month = 'сентября';
}
else if (d.getMonth()+1 == 10) {
    month = 'октября';
}
var strDate = d.getDate() + " " + month + " " + d.getFullYear() + " года";
$('.intro__text span').text(strDate);


// var d = new Date();
// var strDate = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
// $('.intro__text span').text(strDate);

// var d = new Date();
// const month = d.toLocaleString('default', { month: 'long' });
// var strDate = d.getDate() + " " + month + " " + d.getFullYear();
// $('.intro__text span').text(strDate);
});