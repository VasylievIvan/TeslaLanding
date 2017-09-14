!function (t) { "use strict"; function r(t) { var r = { path: !0, query: !0, hash: !0 }; return t ? (/^[a-z]+:/.test(t) && (r.protocol = !0, r.host = !0, /[-a-z0-9]+(\.[-a-z0-9])*:\d+/i.test(t) && (r.port = !0), /\/\/(.*?)(?::(.*?))?@/.test(t) && (r.user = !0, r.pass = !0)), r) : r } function e(t, e, o) { var u, f, l, y = h ? "file://" + (process.platform.match(/^win/i) ? "/" : "") + p("fs").realpathSync(".") : document.location.href; e || (e = y), h ? u = p("url").parse(e) : (u = document.createElement("a"), u.href = e); var d = r(e); l = e.match(/\/\/(.*?)(?::(.*?))?@/) || []; for (f in a) t[f] = d[f] ? u[a[f]] || "" : ""; if (t.protocol = t.protocol.replace(/:$/, ""), t.query = t.query.replace(/^\?/, ""), t.hash = s(t.hash.replace(/^#/, "")), t.user = s(l[1] || ""), t.pass = s(l[2] || ""), t.port = c[t.protocol] == t.port || 0 == t.port ? "" : t.port, !d.protocol && /[^\/#?]/.test(e.charAt(0)) && (t.path = e.split("?")[0].split("#")[0]), !d.protocol && o) { var g = new n(y.match(/(.*\/)/)[0]), m = g.path.split("/"), v = t.path.split("/"), q = ["protocol", "user", "pass", "host", "port"], w = q.length; for (m.pop(), f = 0; w > f; f++) t[q[f]] = g[q[f]]; for (; ".." === v[0];) m.pop(), v.shift(); t.path = ("/" !== e.charAt(0) ? m.join("/") : "") + "/" + v.join("/") } t.path = t.path.replace(/^\/{2,}/, "/"), t.paths(("/" === t.path.charAt(0) ? t.path.slice(1) : t.path).split("/")), t.query = new i(t.query) } function o(t) { return encodeURIComponent(t).replace(/'/g, "%27") } function s(t) { return t = t.replace(/\+/g, " "), t = t.replace(/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi, function (t, r, e, o) { var s = parseInt(r, 16) - 224, i = parseInt(e, 16) - 128; if (0 === s && 32 > i) return t; var n = parseInt(o, 16) - 128, h = (s << 12) + (i << 6) + n; return h > 65535 ? t : String.fromCharCode(h) }), t = t.replace(/%([cd][0-9a-f])%([89ab][0-9a-f])/gi, function (t, r, e) { var o = parseInt(r, 16) - 192; if (2 > o) return t; var s = parseInt(e, 16) - 128; return String.fromCharCode((o << 6) + s) }), t.replace(/%([0-7][0-9a-f])/gi, function (t, r) { return String.fromCharCode(parseInt(r, 16)) }) } function i(t) { for (var r, e = /([^=&]+)(=([^&]*))?/g; r = e.exec(t) ;) { var o = decodeURIComponent(r[1].replace(/\+/g, " ")), i = r[3] ? s(r[3]) : ""; void 0 !== this[o] && null !== this[o] ? (this[o] instanceof Array || (this[o] = [this[o]]), this[o].push(i)) : this[o] = i } } function n(t, r) { e(this, t, !r) } var h = "undefined" == typeof window && "undefined" != typeof global && "function" == typeof require, p = h ? t.require : null, a = { protocol: "protocol", host: "hostname", port: "port", path: "pathname", query: "search", hash: "hash" }, c = { ftp: 21, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 }; i.prototype.toString = function () { var t, r, e = "", s = o; for (t in this) if (!(this[t] instanceof Function || null === this[t])) if (this[t] instanceof Array) { var i = this[t].length; if (i) for (r = 0; i > r; r++) e += e ? "&" : "", e += s(t) + "=" + s(this[t][r]); else e += (e ? "&" : "") + s(t) + "=" } else e += e ? "&" : "", e += s(t) + "=" + s(this[t]); return e }, n.prototype.clearQuery = function () { for (var t in this.query) this.query[t] instanceof Function || delete this.query[t]; return this }, n.prototype.queryLength = function () { var t, r = 0; for (t in this) this[t] instanceof Function || r++; return r }, n.prototype.isEmptyQuery = function () { return 0 === this.queryLength() }, n.prototype.paths = function (t) { var r, e = "", i = 0; if (t && t.length && t + "" !== t) { for (this.isAbsolute() && (e = "/"), r = t.length; r > i; i++) t[i] = !i && t[i].match(/^\w:$/) ? t[i] : o(t[i]); this.path = e + t.join("/") } for (t = ("/" === this.path.charAt(0) ? this.path.slice(1) : this.path).split("/"), i = 0, r = t.length; r > i; i++) t[i] = s(t[i]); return t }, n.prototype.encode = o, n.prototype.decode = s, n.prototype.isAbsolute = function () { return this.protocol || "/" === this.path.charAt(0) }, n.prototype.toString = function () { return (this.protocol && this.protocol + "://") + (this.user && o(this.user) + (this.pass && ":" + o(this.pass)) + "@") + (this.host && this.host) + (this.port && ":" + this.port) + (this.path && this.path) + (this.query.toString() && "?" + this.query) + (this.hash && "#" + o(this.hash)) }, t[t.exports ? "exports" : "Url"] = n }("undefined" != typeof module && module.exports ? module : window);
var MyConst = {
    lang: "",
    successPage: "",
    mainDivClassName: "",
    errorMessages: {
        empty: "",
        correctEmail: "",
        notNumbers: "",
        lessNumbers: "",
        moreNumbers: "",
        countryFirst: "",
    },
    labels: {
        headerOfForm: "",
        firstName: "",
        lastName: "",
        country: "",
        phone: "",
        email: "",
        buttonSubmitText: ""
    },
    helpLink: "",
    initParams: function initGlobalParams(lang, mainDivClassName, successPage, buttonSubmitName) {
        this.lang = lang;
        this.mainDivClassName = mainDivClassName;
        this.successPage = successPage;
        this.labels.buttonSubmitText = buttonSubmitName;
        $('.' + window.MyConst.mainDivClassName).eq(0).html(formHtml);
        (function () {
            $('#formHeaderLabel').text(window.MyConst.labels.headerOfForm);
            $('#formFnameLabel').text(window.MyConst.labels.firstName);
            $('#formLnameLabel').text(window.MyConst.labels.lastName);
            $('#formCountryLabel').text(window.MyConst.labels.country);
            $('#formPhoneLabel').text(window.MyConst.labels.phone);
            $('#formEmailLabel').text(window.MyConst.labels.email);
            $('#subminButton').val(window.MyConst.labels.buttonSubmitText);
            $('#formHelpLink').text(window.MyConst.helpLink);

            //Кросбраузерные костыли
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || navigator.userAgent.toLowerCase().indexOf('trident/7.0') > -1) {
                $('#formPhoneNumber').css("width", "72%");
            }
        })();


        (function () {
            var iso;
            $.ajax({
                url: 'https://api.770capital.com/dictionary/countryiso?ip=' + userip,
                success: function (countryIso) {
                    if (countryIso) {
                        iso = countryIso;
                        if (iso) {
                            $.ajax({
                                url: 'http://shmuel-livshits.com/770capital/form770capital/backendApi/countryInfo.php',
                                data: { param_iso: iso },
                                success: function (data) {
                                    var countryData = JSON.parse(data);
                                    $('#formCountry').val(function () {
                                        if (window.MyConst.lang == 'en') {

                                            return countryData.CountryNameEn;
                                        }
                                        else {
                                            return countryData.CountryNameRu;
                                        }
                                    });
                                    $('#formCountry').prev().addClass("labelActive");
                                    $('#formCountry').addClass("rightInput");
                                    $('#formCountry').val(countryData.CountryNameRu);
                                    $('#formCountry').attr({ "data-countryName": countryData.CountryNameRu, "data-countryCode": countryData.CountryIso, "data-countryPhoneCode": countryData.PhoneCode });
                                    // $('#formPhoneCountry').val('+'+countryData.PhoneCode);
                                    $('#formPhoneNumber').attr({ "data-minNumbers": countryData.MinNumbersOfDigits, "data-maxNumbers": countryData.MaxNumbersOfDigits });

                                },
                                error: function () {
                                    var countryData = JSON.parse('{"CountryIso":"UA","CountryNameRu":"\u0423\u043a\u0440\u0430\u0438\u043d\u0430","CountryNameEn":"Ukraine","PhoneCode":"380","MinNumbersOfDigits":"9","MaxNumbersOfDigits":"9"}');
                                    $('#formCountry').prev().addClass("labelActive");
                                    $('#formCountry').addClass("rightInput");
                                    $('#formCountry').val(countryData.CountryNameRu);
                                    $('#formCountry').attr({ "data-countryName": countryData.CountryNameRu, "data-countryCode": countryData.CountryIso, "data-countryPhoneCode": countryData.PhoneCode });
                                    // $('#formPhoneCountry').val('+'+countryData.PhoneCode);
                                    $('#formPhoneNumber').attr({ "data-minNumbers": countryData.MinNumbersOfDigits, "data-maxNumbers": countryData.MaxNumbersOfDigits });

                                }
                            });


                        }
                    }
                }
            });
            

        })();

    }
}


if (MyConst.lang == "en") {
    MyConst.errorMessages.empty = "Required field";
    MyConst.errorMessages.correctEmail = "There are no @ or .";
    MyConst.errorMessages.notNumbers = "The number consists only of digits";
    MyConst.errorMessages.lessNumbers = "There are not enough digits";
    MyConst.errorMessages.moreNumbers = "There are too much digits";
    MyConst.errorMessages.countryFirst = "Select the country before the number";

    MyConst.labels.headerOfForm = "Registration:";
    MyConst.labels.firstName = "Name";
    MyConst.labels.lastName = "Last name";
    MyConst.labels.country = "Country";
    MyConst.labels.phone = "Phone";
    MyConst.labels.email = "Email";
    MyConst.labels.buttonSubmitText = "Submit";

    MyConst.helpLink = "Need help with registration?";

}
else {
    MyConst.errorMessages.empty = "Обязательное поле ввода";
    MyConst.errorMessages.correctEmail = "Отсутствуют символы @ или .";
    MyConst.errorMessages.notNumbers = "Номер состоит только из цифр";
    MyConst.errorMessages.lessNumbers = "В номере не хватает цифр",
    MyConst.errorMessages.moreNumbers = "В номере много цифр",
    MyConst.errorMessages.countryFirst = "Выберите страну перед номером";

    MyConst.labels.headerOfForm = "Регистрация:";
    MyConst.labels.firstName = "Имя";
    MyConst.labels.lastName = "Фамилия";
    MyConst.labels.country = "Страна";
    MyConst.labels.phone = "Телефон";
    MyConst.labels.email = "Email";
    MyConst.labels.buttonSubmitText = "Отправить";

    MyConst.helpLink = "Нужна помощь с регистрацией?";
}

var formHtml = ' <form id="leadForm" class="leadForm"> <div class="FormHeaderDiv"> <label id="formHeaderLabel" class="FormHeader"></label> </div> <div class="commonDivs fnameDiv"> <label id="formFnameLabel" class="commonLabels labelFname" for="formFirstName"></label> <input type="text" id="formFirstName" name="FirstName" class="commonInput fnameInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div class="commonDivs lnameDiv"> <label id="formLnameLabel" class="commonLabels labelLname" for="formLastName"></label> <input type="text" id="formLastName" name="LastName" class="commonInput lnameInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div id="divCountry" class="commonDivs countryDiv"> <label id="formCountryLabel" class="commonLabels labelCountry" for="formCountry"></label> <input type="text" id="formCountry" name="Country" class="commonInput countryInput" autocomplete="off" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> <div id="livesearch"></div> </div> <div class="commonDivs phoneDiv"> <label id="formPhoneLabel" class="commonLabels labelPhone" for="formPhoneNumber"></label> <input type="text" id="formPhoneCountry" name="PhoneCountry" class="commonInput phoneCountryInput" autocomplete="off" readonly /> <input type="text" id="formPhoneNumber" name="PhoneNumber" class="commonInput phoneInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div class="commonDivs emailDiv"> <label id="formEmailLabel" class="commonLabels labelEmail" for="formEmail"></label> <input type="email" id="formEmail" name="Email" class="commonInput emailInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div class="commonDivs submitDiv"> <input type="button" id="subminButton" class="submitButton" /> </div> <div class="helpLinkDiv"> <a href="#" id="formHelpLink" class="helpLink"></a> </div> </form>';
MyConst.initParams("ru", "leadFormContainer", "https://770capital.com/thank-you", "Оставить заявку");


$('#formCountry').keyup(checkCountry);
$('#formCountry').focus(checkCountry);
$(document).on('click', function (event) {
    if (event.target.id != "livesearch" && event.target.id != "formCountry" && event.target != "divCountry") {
        cleanLiveSearch();
    }
});
/*$(document).on('mouseleave', function () {
    cleanLiveSearch();
}); */

function checkCountry(event) {
    $(this).next().children('.spanErrMessage').css("display", "none");
    var userCountry = $(this).val().trim();
    if (userCountry) {
        $.ajax({
            type: "GET",
            url: 'http://shmuel-livshits.com/770capital/form770capital/backendApi/countrySearch.php',
            data: { country: userCountry, lang: window.MyConst.lang },
            success: GetCountries
        });
    }
    else {
        cleanLiveSearch();
    }
    function GetCountries(jsonCountries) {
        cleanLiveSearch();

        var obj = JSON.parse(jsonCountries);
        if (Object.keys(obj).length > 0) {
            $('#livesearch').addClass("liveSearch");
        }

        obj.forEach(function (item, index) {
            var countryName = (window.MyConst.lang == "ru") ? item[1] : item[2];
            $('#livesearch').append('<div class="country" data-countryCode="' + item[0] + '" data-phoneCode="' + item[3] + '" data-minNumbers="' + item[4] + '" data-maxNumbers="' + item[5] + '"data-countryName="' + countryName + '" class="liveSearch" onclick="setUpCountry(this)">' + countryName + '</div>');
        });
    }
}

function cleanLiveSearch(event) {
    $('#livesearch').html('');
    $('#livesearch').removeClass("liveSearch");
}

function setUpCountry(divLiveSearch) {
    $('#formCountry').val(divLiveSearch.innerText);
    $('#formCountry').attr({ "data-countryName": divLiveSearch.dataset.countryname, "data-countryCode": divLiveSearch.dataset.countrycode, "data-countryPhoneCode": divLiveSearch.dataset.phonecode })
    //$('#formPhoneCountry').val('+' + divLiveSearch.dataset.phonecode);
    $('#formPhoneNumber').attr({ "data-minNumbers": divLiveSearch.dataset.minnumbers, "data-maxNumbers": divLiveSearch.dataset.maxnumbers });
    cleanLiveSearch();
}

$('input:text').focusout(checkIfEmptyInputs);
$('input:text').focusin(focusIn);
$('input:text').keyup(delErrorMes);
$('#formEmail').focusin(focusIn);
$('#formEmail').focusout(checkEmail);
$('#formEmail').keyup(delErrorMes);



$('#formPhoneNumber').keypress(checkIfNumbers);
$('#formPhoneNumber').focusout(countNumbers);
$('#subminButton').click(validateAllFields);
$('#formHelpLink').click(function () {
    setTimeout(function () { Tawk_API.maximize() }, 500);

});

function delErrorMes() {
    if ($(this).val().trim()) {
        $(this).next().css("display", "none");
    }
}

function focusIn() {
    moveLabel(this);
    if ($(this).attr('id') === "formPhoneNumber" || $(this).attr('id') === "formPhoneCountry") {
        //var phoneCode = $('#formCountry').data('countryphonecode');
        var phoneCode = document.getElementById("formCountry").getAttribute("data-countryphonecode");
        if (phoneCode) {
            $('#formPhoneCountry').val('+' + phoneCode);
        }
    }


}

function moveLabel(myInput) {
    if ($(myInput).attr('id') === "formPhoneNumber") {
        $(myInput).prev().prev().addClass("labelActive");
    }
    else {
        $(myInput).prev().addClass("labelActive");
    }

}

function moveLableBack(myInput) {
    if ($(myInput).attr('id') === "formPhoneNumber") {
        $(myInput).prev().prev().removeClass("labelActive");
    }
    else {
        $(myInput).prev().removeClass("labelActive");
    }
    if ($(myInput).attr('id') === "formPhoneNumber" || $(myInput).attr('id') === "formPhoneCountry") {
        var phoneCode = $('#formCountry').data('countryphonecode');
        if (phoneCode) {
            $('#formPhoneCountry').val('');
        }
    }
}

function checkIfEmptyInputs() {
    checkIfEmpty(this);
}

function checkIfEmpty(myImput) {
    if (!$(myImput).val().trim()) {
        //$(myImput).next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.empty);
        var nextDiv = $(myImput).next('.errMessageDiv')[0];
        $(nextDiv).css("display", "inline");
        $(nextDiv).children('.spanErrMessage').text(window.MyConst.errorMessages.empty);
        $(myImput).removeClass("rightInput");
        $(myImput).addClass("errorInput");
        moveLableBack(myImput);
        return false;
    }
    else {
        //$(myImput).next().children('.spanErrMessage').css("display", "none");
        $(myImput).next('.errMessageDiv').css("display", "none");
    }
    $(myImput).removeClass("errorInput");
    $(myImput).addClass("rightInput");
    return true;
}

function checkEmail(event) {
    if ($('#formEmail').val().trim() === "") {
        // $('#formEmail').next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.empty);
        var divErr = $('#formEmail').next('.errMessageDiv');
        $(divErr).css("display", "inline");
        $(divErr).children().text(window.MyConst.errorMessages.empty);

        $('#formEmail').addClass("errorInput");
        moveLableBack($('#formEmail')[0]);
        return false;
    }
    else {
        var emailContent = $('#formEmail').val().trim();
        if (!/.+@.+\..+/i.test(emailContent)) {
            //$('#formEmail').next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.correctEmail);
            var divErrMess = $('#formEmail').next('.errMessageDiv');
            $(divErrMess).css("display", "inline");
            $(divErrMess).children().text(window.MyConst.errorMessages.correctEmail);
            $('#formEmail').addClass("errorInput");
            return false;
        }
        else {
            // $('#formEmail').next().children('.spanErrMessage').css("display", "none");
            $('#formEmail').next('.errMessageDiv').css("display", "none");
            $('#formEmail').removeClass("errorInput");
            $('#formEmail').addClass("rightInput");
            return true;
        }
    }


}


function checkIfNumbers(event) {
    var allowedValues = [" ", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if ($.inArray(String.fromCharCode(event.charCode), allowedValues) == -1) {
        //$(this).next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.notNumbers);
        var divErrPhone = $(this).next('.errMessageDiv');
        $(divErrPhone).css("display", "inline");
        $(divErrPhone).children('.spanErrMessage').text(window.MyConst.errorMessages.notNumbers);
        event.preventDefault();
        $('#formPhoneCountry').removeClass("rightInput");
        $('#formPhoneNumber').removeClass("rightInput");
        $('#formPhoneCountry').addClass("errorInput");
        $('#formPhoneNumber').addClass("errorInput");
    }
    else {
        var numsArr = $(this).val().split("");
        var lastChar = numsArr[numsArr.length - 1];
        if (lastChar === " " && String.fromCharCode(event.charCode) === " " || lastChar === "-" && String.fromCharCode(event.charCode) === "-" ||
            lastChar === " " && String.fromCharCode(event.charCode) === "-" || lastChar === "-" && String.fromCharCode(event.charCode) === " ") {
            event.preventDefault();
        }
        else {
            $(this).next('.errMessageDiv').css("display", "none");

        }
    }

}

function countNumbers(event) {
    countPhoneNumbers(this);
}

function countPhoneNumbers(inputPhone) {
    var phoneNumberArr = $(inputPhone).val().split("");
    var j = 0;
    for (var i = 0; i < phoneNumberArr.length; i++) {
        if (phoneNumberArr[i] == " " || phoneNumberArr[i] == "-") {
            delete phoneNumberArr[i];
            j++;
        }
    }
    var minQuantity = parseInt(inputPhone.dataset.minnumbers);
    var maxQuantity = parseInt(inputPhone.dataset.maxnumbers);
    if (minQuantity && maxQuantity) {
        if (phoneNumberArr.length - j < minQuantity) {
            //$(inputPhone).next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.lessNumbers);
            var divErrPhone = $(inputPhone).next('.errMessageDiv');
            $(divErrPhone).css("display", "inline");
            $(divErrPhone).children('.spanErrMessage').text(window.MyConst.errorMessages.lessNumbers);
            $('#formPhoneCountry').removeClass("rightInput");
            $('#formPhoneNumber').removeClass("rightInput");
            $('#formPhoneCountry').addClass("errorInput");
            $('#formPhoneNumber').addClass("errorInput");
            return false;
        }
        else if (phoneNumberArr.length - j > maxQuantity) {
            //$(inputPhone).next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.moreNumbers);
            var divErrPhone = $(inputPhone).next('.errMessageDiv');
            $(divErrPhone).css("display", "inline");
            $(divErrPhone).children('.spanErrMessage').text(window.MyConst.errorMessages.moreNumbers);
            $('#formPhoneCountry').removeClass("rightInput");
            $('#formPhoneNumber').removeClass("rightInput");
            $('#formPhoneCountry').addClass("errorInput");
            $('#formPhoneNumber').addClass("errorInput");
            return false;
        }
        else {
            $(inputPhone).next().children('.spanErrMessage').css("display", "none");
            $('#formPhoneCountry').removeClass("errorInput");
            $('#formPhoneNumber').removeClass("errorInput");
            $('#formPhoneCountry').addClass("rightInput");
            $('#formPhoneNumber').addClass("rightInput");
            return true;
        }
    }
    else {
        //$(inputPhone).next().children('.spanErrMessage').css("display", "inline").text(window.MyConst.errorMessages.countryFirst);
        var divErrPhone = $(inputPhone).next('.errMessageDiv');
        $(divErrPhone).css("display", "inline");
        $(divErrPhone).children('.spanErrMessage').text(window.MyConst.errorMessages.countryFirst);
        $('#formPhoneCountry').removeClass("rightInput");
        $('#formPhoneNumber').removeClass("rightInput");
        $('#formPhoneCountry').addClass("errorInput");
        $('#formPhoneNumber').addClass("errorInput");
        return false;

    }
}

function validateAllFields(event) {
    if (checkIfEmpty($('input:text')[0]) && checkIfEmpty($('input:text')[1]) && checkIfEmpty($('input:text')[2]) &&
         checkIfEmpty($('input:text')[3]) && checkIfEmpty($('input:text')[4]) &&
        checkEmail() && countPhoneNumbers($('#formPhoneNumber')[0])) {
        prepareData();
    }

}

function prepareData() {
    var email = $('#formEmail').val();
    var fname = $('#formFirstName').val();
    var lname = $('#formLastName').val();
    var country = $('#formCountry').data('countrycode');
    var phoneCountry = $('#formPhoneCountry').val().substring(1);
    var fullNumber = $('#formPhoneNumber').val();
    var phoneOperator = fullNumber.substring(0, 2);
    var phoneNumber = fullNumber.substring(2);
    var refferer = location.protocol + '//' + location.host + location.pathname + location.search;
    var utm_source = getCookie('utm_source');
    var adv_uid = getCookie('adv_uid');
    $.ajax({
        url: 'https://api.770capital.com/Registration/Lead',
        data: { Email: email, PhoneCountry: phoneCountry, PhoneOperator: phoneOperator, PhoneNumber: phoneNumber, FirstName: fname, LastName: lname, Country: country, Referrer: refferer, Utm_source: utm_source, Adv_uid: adv_uid },
        success: function (leadInfo) {
            var myDate = new Date();
            if (leadInfo.leadGuid && leadInfo.registrationGuid) {
                myDate.setDate(myDate.getDate() + 30);
                document.cookie = "leadGuid=" + leadInfo.leadGuid + "; expires=" + myDate;
                document.cookie = "registrationGuid=" + leadInfo.registrationGuid + "; expires=" + myDate;
                window.location.replace(window.MyConst.successPage);
            }
            else {
                sendEmergencyMail(email, phoneCountry, phoneOperator, phoneNumber, fname, lname, country, refferer, utm_source, adv_uid);
            }

        },
        error: function () {
            sendEmergencyMail(email, phoneCountry, phoneOperator, phoneNumber, fname, lname, country, refferer, utm_source, adv_uid);
        }
    });


}

function sendEmergencyMail(email, phoneCountry, phoneOperator, phoneNumber, fname, lname, country, refferer, utm_source, adv_uid) {
    $.ajax({
        url: 'http://shmuel-livshits.com/770capital/form770capital/backendApi/SendEmergencyEmail.php',
        data: { Email: email, PhoneCountry: phoneCountry, PhoneOperator: phoneOperator, PhoneNumber: phoneNumber, FirstName: fname, LastName: lname, Country: country, Referrer: refferer, Adv_uid: adv_uid, Utm_source: utm_source },
        success: function () {

            window.location.replace(window.MyConst.successPage);
        },
        error: function () {

        }
    });
}

function getCookie(name) {
    var r = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    if (r) return r[2];
    else return "0";
}