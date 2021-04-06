
$(".form-input").focusin(function(){
    if( $(this).val().length === 0 ){
        $(this).parent().find('.form-label').addClass('active');
        $(this).addClass('active');
    }
});

$(".form-input").focusout(function(){
    if( $(this).val().length === 0 ){
        $(this).parent().find('.form-label').removeClass('active');
        $(this).removeClass('active');
    }
});


$('.submit-btn').on('click', function(){
    $('.success-modal').addClass('active');
})

$('.btn-back, .close-btn').on('click', function(){
    $('.success-modal').removeClass('active');
})