widget_herd_instinct([10, 10, 30, 50, 40, 70, 80]);


function widget_herd_instinct(data) {

  function show_widget() {
    if ($.cookie("push")) {
      var delpeople = $.cookie("push").split(',');
      if (delpeople.length < peopleList.length) {
        delpeople.sort(compareNumeric);
        for (var i = 0; i < peopleList.length; i++) {
          peopleList[i].push(String(i));
        }
        for (var i = 0; i < delpeople.length; i++) {
          peopleList.splice((Number(delpeople[i]) + 1), 1);
          // console.log('i: '+(Number(delpeople[i]))+' el: '+peopleList.splice((Number(delpeople[i])),1));
        }
        var r = getRandomInt(1, peopleList.length - 1);
        $.cookie("push", $.cookie("push") + ',' + peopleList[r][2], {expires: null});

        var rt = getRandomInt(0, timeList.length - 1);
      }
    } else {
      var r = getRandomInt(0, peopleList.length - 1);
      $.cookie("push", r, {expires: null});
    }

    $('.hidden-audio-button').on('click', function () {
      var snd = new Audio("../audio/light.mp3");
      snd.play();
    })

    if (peopleList !== []) {
      // $('.hidden-audio-button').click();
      $('.widget_herd_instinct span.res_name').html(peopleList[Math.floor(Math.random() * (13 - 0 + 1)) + 0][0] + '&nbsp;');
      $('.widget_herd_instinct span.res_city').html(peopleList[Math.floor(Math.random() * (13 - 0 + 1)) + 0][1]);
      $('.widget_herd_instinct span.time').html(timeList[Math.floor(Math.random() * (5 - 0 + 1)) + 0]);
      $('.widget_herd_instinct').addClass('open_widget');
      setTimeout(hide_widget, 10000);
    }

  }

  function hide_widget() {
    $('.widget_herd_instinct').removeClass('open_widget');
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function compareNumeric(a, b) {
    if (Number(a) < Number(b)) return 1;
    if (Number(a) > Number(b)) return -1;
  }

  // SET PEOPLE LIST
  var peopleList = [
    ['Наталья Куфтина', 'Алма-Ата',],
    ['Динара Сарсенбаева', 'Москва',],
    ['Максим Зинкин', 'Шымкент',],
    ['Куляш Адылханова', 'Усть -Каменогорск'],
    ['Надежда Яременко', 'Волгоград'],
    ['Алексей Полежаев', 'Бишкек'],
    ['Наталья Сидорова', 'Актау'],
    ['Ирина Друска', 'Нур-Султан'],
    ['Валихан Утегенов', 'Владивосток'],
    ['Инна Мацкевич', 'Караганда'],
    ['Галина Огнивенко', 'Санкт-Петербург'],
    ['Оксана Кашкарова', 'Уральск'],
    ['Александр Бойцов', 'Атырау'],
    ['Радуга Култасова', 'Саратов']
  ];

  var timeList = ['только что', '1 мин. назад', '5 мин. назад', '3 мин. назад', '10 мин. назад', '4 мин. назад'];

  // ADD HTML MODAL WINDOW
  $('body').append("<div class='widget_herd_instinct'><div class='cross-button'>+</div><div class='ticket'></div><p class='reserv'><span class='res_name'>" + data.name + "</span> из г. <span class='res_city'>" + data.city + "</span> <br>Получил(а) доступ к Digital Marketing Академии<span class='time'>" + data.time + "</span></p><button class='hidden-audio-button'></button></div>");

  // SET COOKIE DATA

  $('.widget_herd_instinct .cross-button').on('click', function () {
    hide_widget();
  })

  for (var i = 0; i < data.length; i++) {
    setTimeout(show_widget, (data[i] * 1000))
  }
}

