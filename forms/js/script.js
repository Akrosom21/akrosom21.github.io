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
    $('#corpus-modals').addClass('modals_active');
});

$(document).mouseup(function (e){
    var div = $(".corpus-modals__inner");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
            $(".corpus-modals").removeClass("modals_active");
    }
});

$('.trash-festival').click(function(){
    $('.remove-festivale').addClass('modals_active');
});

$('.trash-corpus').click(function(){
    $('.remove-corpus').addClass('modals_active');
});

$('.transport-btn').click(function(){
    $(this).toggleClass('transport-btn_active');
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
});

$(document).mouseup(function (e){
    var div = $(".dollar-select");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
            $(".dollar-select").addClass("d-none");
    }
});

$('.dollar-btn-1').click(function(){
    $('.dollar-select-1').toggleClass('d-none');
    $('.dollar-select-1').toggleClass('z-index');
});

$('.dollar-btn-80').click(function(){
    $('.dollar-select-80').toggleClass('d-none');
    $('.dollar-select-80').toggleClass('z-index');
});

$('.dollar-btn-2').click(function(){
    $('.dollar-select-2').toggleClass('d-none');
    $('.dollar-select-2').toggleClass('z-index');
});

$('.dollar-btn-3').click(function(){
    $('.dollar-select-3').toggleClass('d-none');
    $('.dollar-select-3').toggleClass('z-index');
});

$('.dollar-btn-4').click(function(){
    $('.dollar-select-4').toggleClass('d-none');
    $('.dollar-select-4').toggleClass('z-index');
});

$('.dollar-btn-5').click(function(){
    $('.dollar-select-5').toggleClass('d-none');
    $('.dollar-select-5').toggleClass('z-index');
});

$('.dollar-btn-6').click(function(){
    $('.dollar-select-6').toggleClass('d-none');
    $('.dollar-select-6').toggleClass('z-index');
});

$('.dollar-btn-7').click(function(){
    $('.dollar-select-7').toggleClass('d-none');
    $('.dollar-select-7').toggleClass('z-index');
});

$('.dollar-btn-8').click(function(){
    $('.dollar-select-8').toggleClass('d-none');
    $('.dollar-select-8').toggleClass('z-index');
});

$('.dollar-btn-9').click(function(){
    $('.dollar-select-9').toggleClass('d-none');
    $('.dollar-select-9').toggleClass('z-index');
});

$('.dollar-btn-10').click(function(){
    $('.dollar-select-10').toggleClass('d-none');
    $('.dollar-select-10').toggleClass('z-index');
});

$('.dollar-btn-11').click(function(){
    $('.dollar-select-11').toggleClass('d-none');
    $('.dollar-select-11').toggleClass('z-index');
});

$('.dollar-btn-12').click(function(){
    $('.dollar-select-12').toggleClass('d-none');
    $('.dollar-select-12').toggleClass('z-index');
});

$('.dollar-btn-13').click(function(){
    $('.dollar-select-13').toggleClass('d-none');
    $('.dollar-select-13').toggleClass('z-index');
});

$('.dollar-btn-14').click(function(){
    $('.dollar-select-14').toggleClass('d-none');
    $('.dollar-select-14').toggleClass('z-index');
});

$('.dollar-btn-15').click(function(){
    $('.dollar-select-15').toggleClass('d-none');
    $('.dollar-select-15').toggleClass('z-index');
});

$('.dollar-btn-16').click(function(){
    $('.dollar-select-16').toggleClass('d-none');
    $('.dollar-select-16').toggleClass('z-index');
});

$('.dollar-btn-17').click(function(){
    $('.dollar-select-17').toggleClass('d-none');
    $('.dollar-select-17').toggleClass('z-index');
});

$('.dollar-btn-18').click(function(){
    $('.dollar-select-18').toggleClass('d-none');
    $('.dollar-select-18').toggleClass('z-index');
});

$('.dollar-btn-19').click(function(){
    $('.dollar-select-19').toggleClass('d-none');
    $('.dollar-select-19').toggleClass('z-index');
});

$('.dollar-btn-20').click(function(){
    $('.dollar-select-20').toggleClass('d-none');
    $('.dollar-select-20').toggleClass('z-index');
});

$('.dollar-btn-21').click(function(){
    $('.dollar-select-21').toggleClass('d-none');
    $('.dollar-select-21').toggleClass('z-index');
});

$('.dollar-btn-22').click(function(){
    $('.dollar-select-22').toggleClass('d-none');
    $('.dollar-select-22').toggleClass('z-index');
});

$('.dollar-btn-23').click(function(){
    $('.dollar-select-23').toggleClass('d-none');
    $('.dollar-select-23').toggleClass('z-index');
});

$('.dollar-btn-24').click(function(){
    $('.dollar-select-24').toggleClass('d-none');
    $('.dollar-select-24').toggleClass('z-index');
});

$('.dollar-btn-25').click(function(){
    $('.dollar-select-25').toggleClass('d-none');
    $('.dollar-select-25').toggleClass('z-index');
});

$('.dollar-btn-26').click(function(){
    $('.dollar-select-26').toggleClass('d-none');
    $('.dollar-select-26').toggleClass('z-index');
});

$('.dollar-btn-27').click(function(){
    $('.dollar-select-27').toggleClass('d-none');

    $('.dollar-select-27').toggleClass('z-index');
});

$('.dollar-btn-28').click(function(){
    $('.dollar-select-28').toggleClass('d-none');
    $('.dollar-select-28').toggleClass('z-index');
});

$('.dollar-btn-29').click(function(){
    $('.dollar-select-29').toggleClass('d-none');
    $('.dollar-select-29').toggleClass('z-index');
});

$('.dollar-btn-30').click(function(){
    $('.dollar-select-30').toggleClass('d-none');
    $('.dollar-select-30').toggleClass('z-index');
});

$('.dollar-btn-31').click(function(){
    $('.dollar-select-31').toggleClass('d-none');
    $('.dollar-select-31').toggleClass('z-index');
});

$('.dollar-btn-32').click(function(){
    $('.dollar-select-32').toggleClass('d-none');
    $('.dollar-select-32').toggleClass('z-index');
});

$('.dollar-btn-33').click(function(){
    $('.dollar-select-33').toggleClass('d-none');
    $('.dollar-select-33').toggleClass('z-index');
});

$('.dollar-btn-34').click(function(){
    $('.dollar-select-34').toggleClass('d-none');
    $('.dollar-select-34').toggleClass('z-index');
});

$('.dollar-btn-35').click(function(){
    $('.dollar-select-35').toggleClass('d-none');
    $('.dollar-select-35').toggleClass('z-index');
});

$('.dollar-btn-36').click(function(){
    $('.dollar-select-36').toggleClass('d-none');
    $('.dollar-select-36').toggleClass('z-index');
});

$('.dollar-btn-37').click(function(){
    $('.dollar-select-37').toggleClass('d-none');
    $('.dollar-select-37').toggleClass('z-index');
});

$('.dollar-btn-38').click(function(){
    $('.dollar-select-38').toggleClass('d-none');
    $('.dollar-select-38').toggleClass('z-index');
});

$('.dollar-btn-39').click(function(){
    $('.dollar-select-39').toggleClass('d-none');
    $('.dollar-select-39').toggleClass('z-index');
});

$('.dollar-btn-40').click(function(){
    $('.dollar-select-40').toggleClass('d-none');
    $('.dollar-select-40').toggleClass('z-index');
});

$('.dollar-btn-41').click(function(){
    $('.dollar-select-41').toggleClass('d-none');
    $('.dollar-select-41').toggleClass('z-index');
});

$('.dollar-btn-42').click(function(){
    $('.dollar-select-42').toggleClass('d-none');
    $('.dollar-select-42').toggleClass('z-index');
});

$('.dollar-btn-43').click(function(){
    $('.dollar-select-43').toggleClass('d-none');
    $('.dollar-select-43').toggleClass('z-index');
});

$('.dollar-btn-44').click(function(){
    $('.dollar-select-44').toggleClass('d-none');
    $('.dollar-select-44').toggleClass('z-index');
});

$('.dollar-btn-45').click(function(){
    $('.dollar-select-45').toggleClass('d-none');
    $('.dollar-select-45').toggleClass('z-index');
});

$('.dollar-btn-46').click(function(){
    $('.dollar-select-46').toggleClass('d-none');
    $('.dollar-select-46').toggleClass('z-index');
});

$('.dollar-btn-47').click(function(){
    $('.dollar-select-47').toggleClass('d-none');
    $('.dollar-select-47').toggleClass('z-index');
});

$('.dollar-btn-48').click(function(){
    $('.dollar-select-48').toggleClass('d-none');
    $('.dollar-select-48').toggleClass('z-index');
});

$('.dollar-btn-49').click(function(){
    $('.dollar-select-49').toggleClass('d-none');
    $('.dollar-select-49').toggleClass('z-index');
});

$('.dollar-btn-50').click(function(){
    $('.dollar-select-50').toggleClass('d-none');
    $('.dollar-select-50').toggleClass('z-index');
});

$('.dollar-btn-51').click(function(){
    $('.dollar-select-51').toggleClass('d-none');
    $('.dollar-select-51').toggleClass('z-index');
});

$('.dollar-btn-52').click(function(){
    $('.dollar-select-52').toggleClass('d-none');
    $('.dollar-select-52').toggleClass('z-index');
});

$('.dollar-btn-53').click(function(){
    $('.dollar-select-53').toggleClass('d-none');
    $('.dollar-select-53').toggleClass('z-index');
});

$('.dollar-btn-54').click(function(){
    $('.dollar-select-54').toggleClass('d-none');
    $('.dollar-select-54').toggleClass('z-index');
});

$('.dollar-btn-55').click(function(){
    $('.dollar-select-55').toggleClass('d-none');
    $('.dollar-select-55').toggleClass('z-index');
});

$('.dollar-btn-56').click(function(){
    $('.dollar-select-56').toggleClass('d-none');
    $('.dollar-select-56').toggleClass('z-index');
});

$('.dollar-btn-57').click(function(){
    $('.dollar-select-57').toggleClass('d-none');
    $('.dollar-select-57').toggleClass('z-index');
});

$('.dollar-btn-58').click(function(){
    $('.dollar-select-58').toggleClass('d-none');
    $('.dollar-select-58').toggleClass('z-index');
});

$('.dollar-btn-59').click(function(){
    $('.dollar-select-59').toggleClass('d-none');

    $('.dollar-select-59').toggleClass('z-index');
});

$('.dollar-btn-60').click(function(){
    $('.dollar-select-60').toggleClass('d-none');
    $('.dollar-select-60').toggleClass('z-index');
});

$('.dollar-btn-61').click(function(){
    $('.dollar-select-61').toggleClass('d-none');
    $('.dollar-select-61').toggleClass('z-index');
});

$('.dollar-btn-62').click(function(){
    $('.dollar-select-62').toggleClass('d-none');
    $('.dollar-select-62').toggleClass('z-index');
});

$('.dollar-btn-63').click(function(){
    $('.dollar-select-63').toggleClass('d-none');

    $('.dollar-select-63').toggleClass('z-index');
});

$('.dollar-btn-64').click(function(){
    $('.dollar-select-64').toggleClass('d-none');
    $('.dollar-select-64').toggleClass('z-index');
});

$('.dollar-btn-65').click(function(){
    $('.dollar-select-65').toggleClass('d-none');
    $('.dollar-select-65').toggleClass('z-index');
});

$('.dollar-btn-66').click(function(){
    $('.dollar-select-66').toggleClass('d-none');
    $('.dollar-select-66').toggleClass('z-index');
});

$('.dollar-btn-67').click(function(){
    $('.dollar-select-67').toggleClass('d-none');
    $('.dollar-select-67').toggleClass('z-index');
});

$('.dollar-btn-68').click(function(){
    $('.dollar-select-68').toggleClass('d-none');
    $('.dollar-select-68').toggleClass('z-index');
});

$('.dollar-btn-69').click(function(){
    $('.dollar-select-69').toggleClass('d-none');
    $('.dollar-select-69').toggleClass('z-index');
});

$('.dollar-btn-70').click(function(){
    $('.dollar-select-70').toggleClass('d-none');
    $('.dollar-select-70').toggleClass('z-index');
});

$('.dollar-btn-71').click(function(){
    $('.dollar-select-71').toggleClass('d-none');
    $('.dollar-select-71').toggleClass('z-index');
});





$('.grn').click(function(){
    let parent = $(this).parent();
    let newParent = parent.parent();
    newParent.children('.dollar-btn').text('₴');
    $('.dollar-select').addClass('d-none');
});

$('.dol').click(function(){
    let parent = $(this).parent();
    let newParent = parent.parent();
    newParent.children('.dollar-btn').text('$');
    $('.dollar-select').addClass('d-none');
});

$('.eu').click(function(){
    let parent = $(this).parent();
    let newParent = parent.parent();
    newParent.children('.dollar-btn').text('€');
    $('.dollar-select').addClass('d-none');
});

$('.woman-active').click(function(){
    $('.man-active').addClass('none');
    $('.man-nonactive').removeClass('none');
    $('.woman-active').addClass('none');
    $('.woman-nonactive').removeClass('none');
});

$('.man-nonactive').click(function(){
    $('.man-nonactive').addClass('none');
    $('.man-active').removeClass('none');
    $('.woman-active').removeClass('none');
    $('.woman-nonactive').addClass('none');
});

$('#individual-btn').click(function(){
    $('#stat-individual').removeClass('none');
});

$('#collective-btn').click(function(){
    $('#stat-individual').addClass('none');
});

$('.concat__item').click(function(){
    $('.concat__item').removeClass('concat__item-active');
    $(this).addClass('concat__item-active');
});


//Mask for date

$(".date-mask").mask("99.99.9999", {placeholder: "XX.XX.XXXX"});
$(".tel-mask").mask("+38(999) 999-99-99", {placeholder: "+38(XXX) XXX-XX-XX"});
    
})