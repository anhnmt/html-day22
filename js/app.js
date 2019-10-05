$(function() {
    $('.txtInput').bind('blur change', function()
    {
        check(this);
    });
    
    var timeout = null;
    $('.txtInput').bind('keyup', function()
    {
        clearTimeout(timeout);
        // Sau khi xóa thì thiết lập lại timeout
        timeout = setTimeout(check(this), 1000); 
    });
    
    $('#submit').on('click', function()
    {
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