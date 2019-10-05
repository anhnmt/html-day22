$(function() {
    $('.txtInput').bind('blur keyup', function() {
        check(this);
    });
    
    $('#submit').on('click', function() {
        $('.txtInput').blur();

        if (!$('.txtInput').hasClass('err'))
        {
            alert('OK');
        }
    });
});

function check(arg) {
    var el = $(arg);
    var value = el.val().trim();
    var id = el.attr('id');

    if (value === '')
    {
        el.addClass('err');
        return false;
    }
    else
    {
        const email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (id === 'email' && !email.test(value))
        {
            el.addClass('err');
            return false;
        }
    }

    el.removeClass('err');
    return true;
}