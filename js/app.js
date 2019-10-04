var namee = document.getElementById('name');
var birthday = document.getElementById('birthdate');
var gender = document.getElementById('gender');
var classs = document.getElementById('class');
var email = document.getElementById('email');
var btn = document.getElementById('submit');

btn.onclick = function() {
    check(namee);
    check(birthday);
    check(gender);
    check(classs);
    check(email);
};

namee.onblur = function() {
    check(this);
};

birthday.onblur = function() {
    check(this);
};

gender.onblur = function() {
    check(this);
};

classs.onblur = function() {
    check(this);
};

email.onblur = function() {
    check(this);
};

function check(el) {
    var err = document.getElementById(el.id + "_err");
    var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (el.value.trim() === '')
    {
        el.setAttribute("class", "err");
        err.style.display = "block";
        return false;
    }

    if (el.id == "email" && !email.test(el.value.trim())) {
        el.setAttribute("class", "err");
        err.style.display = "block";
        err.innerHTML = email.test(el.value) ? "Vui lòng nhập email" : "Email không đúng định dạng";
        return false;
    }

    el.setAttribute("class", "");
    err.style.display = "none";
}