//Contact Form
window.onload = function(){
	 $("#textPrinc").textillate({
        minDisplayTime: 2000,
        sync: false,
        in:{
            effect: 'fadeInRightBig'
        }
    });

$('#submit').click(function(){

$.post("assets/php/send.php", $(".contact-form").serialize(),  function(response) {   
 $('#success').html(response);
});
return false;

});

};
