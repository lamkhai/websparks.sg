function formOutcome() {
    $('#info').fadeOut(500);
}

function submitMsg() {
    let validated = true;

    $('.e_name').hide();
    $('.e_email').hide();
    $('.e_sub').hide();
    $('.e_mes').hide();
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val();
    name = jQuery.trim(name);
    email = jQuery.trim(email);
    subject = jQuery.trim(subject);
    message = jQuery.trim(message);

    if (name == "") {
        $('.e_name').fadeIn(100);
        $('#name').val(name);
        validated = false;
    }
    if (email == "") {
        $('.e_email').fadeIn(100);
        $('#email').val(email);
        validated = false;
    }
    if (subject == "") {
        $('.e_sub').fadeIn(100);
        $('#subject').val(subject);
        validated = false;
    }
    if (message == "") {
        $('.e_mes').fadeIn(100);
        $('#message').val(message);
        validated = false;
    }
    function validateEmail(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email);
    }
    if (validateEmail(email) == false) {
        $('.e_email-1').fadeIn(100);
        $('#email').val(email);
    } else {
        if (validated == true) {
            $(".contact-section").hide();
            $("#msgSuccess").modal('show');
            $('#info').html('<span>message has been sent...</span><br /><input  value="Reset" type="reset" onClick="formOutcome()" />');
        }
        // $.ajax({
        //     type: "POST",
        //     url: "http://ww2.mywebsparks.com/websparks-staging/send.php",
        //     data: $('#contactForm').serialize(),
        //     success: function (cevap) {
        //         $('#info').show();
        //         if (cevap == '') {
        //             $(".contact-section").hide();
        //             $("#msgSuccess").modal('show');
        //             $('#info').html('<span>message has been sent...</span><br /><input  value="Reset" type="reset" onClick="formOutcome()" />');
        //         } else {
        //             $('#info').html('<span style="color:#ff0000">There is an Error</span><br /><input  value="Close" type="reset" onClick="formOutcome()" />');
        //         }
        //     }
        // });
    }
}