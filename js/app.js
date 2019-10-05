$(function() {
    $('.txtInput').bind('blur keyup click', function() {
        check(this.id);
    });
    
    $('#submit').on('click', function() {
        $('.txtInput').blur();
    });
});

function check(id) {
    var element = $('#' + id);
    const email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (element.val().trim() === '')
    {
        element.addClass("err");
        return false;
    }
    else
    {
        if (id == "email" && !email.test(element.val().trim()))
        {
            element.addClass("err");
            return false;
        }
    }

    alert('OK');
    element.removeClass("err");
}