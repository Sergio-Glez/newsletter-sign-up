$(function(){
    loadResetForm();
    $('#frm_subscribe').on('submit',sendForm);
    $('.btn_dismiss').on('click',loadResetForm);

    $(window).resize(function() {
       var width = $(window).width();
       if(width <= 500){
        $('.col-right img').attr('src','/assets/images/illustration-sign-up-mobile.svg')
       }else{
        $('.col-right img').attr('src','/assets/images/illustration-sign-up-desktop.svg')
       }
    });
});

function sendForm(e){
    e.preventDefault();
    e.stopPropagation();
    var email = $('#email').val();
    if(email !== '' && validateEmail(email)){
        //ok
        $('#destino').text(email);
        $('#newsletter').hide();  
        $('#msj-success').show();      
    }
    else{
        $('#msjError').show();
        $('#email').addClass('input-invalid');
    }
}

function loadResetForm(){
    // alert('hey')
     $('#msj-success').hide(); 
     $('#newsletter').show();  
     $('#email').val('');
     $('#msjError').hide();
     $('#email').removeClass('input-invalid');

 }


function validateEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
        return true;
    } else {
        return false;
    }
  
  }