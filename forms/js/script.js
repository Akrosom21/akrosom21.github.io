$(function(){

    // Select form
    $('.select').each(function(){
    // Variables
    var $this = $(this),
        selectOption = $this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        dur = 500;

    $this.hide();
    // Wrap all in select box
    $this.wrap('<div class="select"></div>');
    // Style box
    $('<div>',{
        class: 'select__gap',
        text: ''
    }).insertAfter($this);
    
    var selectGap = $this.next('.select__gap'),
        caret = selectGap.find('.caret');
    // Add ul list
    $('<ul>',{
        class: 'select__list'
    }).insertAfter(selectGap);		

    var selectList = selectGap.next('.select__list');
    // Add li - option items
    for(var i = 0; i < selectOptionLength; i++){
        $('<li>',{
            class: 'select__item',
            html: $('<span>',{
                text: selectOption.eq(i).text()
            })				
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }
    // Find all items
    var selectItem = selectList.find('li');

    selectList.slideUp(0);
    selectGap.on('click', function(){
        if(!$(this).hasClass('on')){
            $(this).addClass('on');
            selectList.slideDown(dur);

            selectItem.on('click', function(){
                var chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectGap.text($(this).find('span').text());

                selectList.slideUp(dur);
                selectGap.removeClass('on');
            });
            
        } else {
            $(this).removeClass('on');
            selectList.slideUp(dur);
        }
    });		
});

//Nav toggle

$('.nav__item-main').click(function(){
    $('.page').removeClass('page_active');
    $('.nav__inner-item').removeClass('active-svg');
    $(this).addClass('active-svg');
    $('#main').addClass('page_active');
});
$('.nav__item-collective').click(function(){
    $('.page').removeClass('page_active');
    $('.nav__inner-item').removeClass('active-svg');
    $(this).addClass('active-svg');
    $('#collective').addClass('page_active');
});
$('.nav__item-individual').click(function(){
    $('.page').removeClass('page_active');
    $('.nav__inner-item').removeClass('active-svg');
    $(this).addClass('active-svg');
    $('#individual').addClass('page_active');
});
$('.nav__item-statistic').click(function(){
    $('.page').removeClass('page_active');
    $('.nav__inner-item').removeClass('active-svg');
    $(this).addClass('active-svg');
    $('#statistic').addClass('page_active');
});
$('.nav__item-diagramma').click(function(){
    $('.page').removeClass('page_active');
    $('.nav__inner-item').removeClass('active-svg');
    $(this).addClass('active-svg');
    $('#diagramma').addClass('page_active');
});
$('.nav__item-festivals').click(function(){
    $('.page').removeClass('page_active');
    $('.nav__inner-item').removeClass('active-svg');
    $(this).addClass('active-svg');
    $('#festivals').addClass('page_active');
});
$('.nav__item-corpus').click(function(){
    $('.page').removeClass('page_active');
    $('.nav__inner-item').removeClass('active-svg');
    $(this).addClass('active-svg');
    $('#corpus').addClass('page_active');
});

$('.collective-tab').click(function(){
    $('.collective-tab').removeClass('tab-active');
    $(this).addClass('tab-active');
});

$('#data-tab').click(function(){
    $('.collective').removeClass('collective-active');
    $('#data-tab-page').addClass('collective-active');
    $('#crumbs').text('Данные коллектива');
});

$('#table-tab').click(function(){
    $('.collective').removeClass('collective-active');
    $('#table-tab-page').addClass('collective-active');
    $('#crumbs').text('Таблица коллектива');
});

$('#insurance-tab').click(function(){
    $('.collective').removeClass('collective-active');
    $('#insurance-tab-page').addClass('collective-active');
    $('#crumbs').text('Страхование коллектива');
});

$('#transfer-tab').click(function(){
    $('.collective').removeClass('collective-active');
    $('#transfer-tab-page').addClass('collective-active');
    $('#crumbs').text('Трансфер коллектива');
});

$('#calculate-tab').click(function(){
    $('.collective').removeClass('collective-active');
    $('#calculate-tab-page').addClass('collective-active');
    $('#crumbs').text('Таблица расчетов по коллективу');
});

$('#live-tab').click(function(){
    $('.collective').removeClass('collective-active');
    $('#live-tab-page').addClass('collective-active');
    $('#crumbs').text('Проживание в корпусе');
});

$('#suite-tab').click(function(){
    $('.collective').removeClass('collective-active');
    $('#suite-tab-page').addClass('collective-active');
    $('#crumbs').text('Размещение коллектива по корпусам');
});

$('#passport-tab').click(function(){
    $('.collective').removeClass('collective-active');
    $('#passport-tab-page').addClass('collective-active');
    $('#crumbs').text('Данные загранпаспортов');
});

$('#services-tab').click(function(){
    $('.collective').removeClass('collective-active');
    $('#services-tab-page').addClass('collective-active');
    $('#crumbs').text('Дополнительные услуги');
});

$('.individual-tab').click(function(){
    $('.individual-tab').removeClass('tab-active');
    $(this).addClass('tab-active');
});

$('#individual-data').click(function(){
    $('.individual').removeClass('individual-active');
    $('#individual-data-page').addClass('individual-active');
    $('#crumbs-individual').text('Данные участника');
});

$('#individual-transfer').click(function(){
    $('.individual').removeClass('individual-active');
    $('#individual-transfer-page').addClass('individual-active');
    $('#crumbs-individual').text('Трансфер Участника');
});

$('#individual-live').click(function(){
    $('.individual').removeClass('individual-active');
    $('#individual-live-page').addClass('individual-active');
    $('#crumbs-individual').text('Проживание в корпусе');
});

$('#individual-passport').click(function(){
    $('.individual').removeClass('individual-active');
    $('#individual-passport-page').addClass('individual-active');
    $('#crumbs-individual').text('Данные загранпаспортов ');
});

$('#individual-services').click(function(){
    $('.individual').removeClass('individual-active');
    $('#individual-services-page').addClass('individual-active');
    $('#crumbs-individual').text('Дополнительные услуги');
});

$('#individual-pay').click(function(){
    $('.individual').removeClass('individual-active');
    $('#individual-pay-page').addClass('individual-active');
    $('#crumbs-individual').text('Оплаты участника');
});

$('#diagramma-btn-table').click(function(){
    $('.diagramma').removeClass('diagramma_active');
    $('#diagramma-table').addClass('diagramma_active');
});

$('#diagramma-btn').click(function(){
    $('.diagramma').removeClass('diagramma_active');
    $('#diagramma-inner').addClass('diagramma_active');
});

// Modals

$('#festivals-btn').click(function(){
    $('.festivals-modals').addClass('modals_active');
});

$(document).mouseup(function (e){
    var div = $(".festivals-modals__inner");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
            $(".festivals-modals").removeClass("modals_active");
    }
});

$('.cancel').click(function(){
    $(".festivals-modals").removeClass("modals_active");
    $(".info-modals").removeClass("modals_active");
    $(".corpus-modals").removeClass("modals_active");
});

$('.save').click(function(){
    $(".festivals-modals").removeClass("modals_active");
    $('.info-modals').addClass('modals_active');
});

$(document).mouseup(function (e){
    var div = $(".festivals-modals__inner");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
            $(".info-modals").removeClass("modals_active");
    }
});

$('#corpus-btn').click(function(){
    $('.corpus-modals').addClass('modals_active');
});

$(document).mouseup(function (e){
    var div = $(".corpus-modals__inner");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
            $(".corpus-modals").removeClass("modals_active");
    }
});

$('.transport-btn').click(function(){
    $('.transport-btn').removeClass('transport-btn_active');
    $(this).addClass('transport-btn_active');
});

$('#fade-input').click(function(){
    $('#fade').addClass('d-fade');
})

$('#add-input').click(function(){
    $('#fade').removeClass('d-fade');
})

$('.age-btn').click(function(){
    $('.age-btn').removeClass('age-btn_active');
    $(this).addClass('age-btn_active');
})
    
})