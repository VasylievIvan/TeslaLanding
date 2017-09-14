!function (u) { function b(a) { var c = { path: !0, query: !0, hash: !0 }; return a ? (/^[a-z]+:/.test(a) && (c.protocol = !0, c.host = !0, /[-a-z0-9]+(\.[-a-z0-9])*:\d+/i.test(a) && (c.port = !0), /\/\/(.*?)(?::(.*?))?@/.test(a) && (c.user = !0, c.pass = !0)), c) : c } function l(C, r, c) { var B, p, i, x = k ? "file://" + (process.platform.match(/^win/i) ? "/" : "") + d("fs").realpathSync(".") : document.location.href; r || (r = x), k ? B = d("url").parse(r) : (B = document.createElement("a"), B.href = r); var s = b(r); i = r.match(/\/\/(.*?)(?::(.*?))?@/) || []; for (p in q) { C[p] = s[p] ? B[q[p]] || "" : "" } if (C.protocol = C.protocol.replace(/:$/, ""), C.query = C.query.replace(/^\?/, ""), C.hash = v(C.hash.replace(/^#/, "")), C.user = v(i[1] || ""), C.pass = v(i[2] || ""), C.port = m[C.protocol] == C.port || 0 == C.port ? "" : C.port, !s.protocol && /[^\/#?]/.test(r.charAt(0)) && (C.path = r.split("?")[0].split("#")[0]), !s.protocol && c) { var n = new g(x.match(/(.*\/)/)[0]), h = n.path.split("/"), A = C.path.split("/"), a = ["protocol", "user", "pass", "host", "port"], z = a.length; for (h.pop(), p = 0; z > p; p++) { C[a[p]] = n[a[p]] } for (; ".." === A[0];) { h.pop(), A.shift() } C.path = ("/" !== r.charAt(0) ? h.join("/") : "") + "/" + A.join("/") } C.path = C.path.replace(/^\/{2,}/, "/"), C.paths(("/" === C.path.charAt(0) ? C.path.slice(1) : C.path).split("/")), C.query = new j(C.query) } function f(a) { return encodeURIComponent(a).replace(/'/g, "%27") } function v(a) { return a = a.replace(/\+/g, " "), a = a.replace(/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi, function (p, y, z, A) { var x = parseInt(y, 16) - 224, c = parseInt(z, 16) - 128; if (0 === x && 32 > c) { return p } var B = parseInt(A, 16) - 128, w = (x << 12) + (c << 6) + B; return w > 65535 ? p : String.fromCharCode(w) }), a = a.replace(/%([cd][0-9a-f])%([89ab][0-9a-f])/gi, function (c, i, n) { var p = parseInt(i, 16) - 192; if (2 > p) { return c } var h = parseInt(n, 16) - 128; return String.fromCharCode((p << 6) + h) }), a.replace(/%([0-7][0-9a-f])/gi, function (c, e) { return String.fromCharCode(parseInt(e, 16)) }) } function j(c) { for (var h, n = /([^=&]+)(=([^&]*))?/g; h = n.exec(c) ;) { var p = decodeURIComponent(h[1].replace(/\+/g, " ")), a = h[3] ? v(h[3]) : ""; void 0 !== this[p] && null !== this[p] ? (this[p] instanceof Array || (this[p] = [this[p]]), this[p].push(a)) : this[p] = a } } function g(a, c) { l(this, a, !c) } var k = "undefined" == typeof window && "undefined" != typeof global && "function" == typeof require, d = k ? u.require : null, q = { protocol: "protocol", host: "hostname", port: "port", path: "pathname", query: "search", hash: "hash" }, m = { ftp: 21, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 }; j.prototype.toString = function () { var c, n, o = "", h = f; for (c in this) { if (!(this[c] instanceof Function || null === this[c])) { if (this[c] instanceof Array) { var a = this[c].length; if (a) { for (n = 0; a > n; n++) { o += o ? "&" : "", o += h(c) + "=" + h(this[c][n]) } } else { o += (o ? "&" : "") + h(c) + "=" } } else { o += o ? "&" : "", o += h(c) + "=" + h(this[c]) } } } return o }, g.prototype.clearQuery = function () { for (var a in this.query) { this.query[a] instanceof Function || delete this.query[a] } return this }, g.prototype.queryLength = function () { var a, c = 0; for (a in this) { this[a] instanceof Function || c++ } return c }, g.prototype.isEmptyQuery = function () { return 0 === this.queryLength() }, g.prototype.paths = function (c) { var h, n = "", a = 0; if (c && c.length && c + "" !== c) { for (this.isAbsolute() && (n = "/"), h = c.length; h > a; a++) { c[a] = !a && c[a].match(/^\w:$/) ? c[a] : f(c[a]) } this.path = n + c.join("/") } for (c = ("/" === this.path.charAt(0) ? this.path.slice(1) : this.path).split("/"), a = 0, h = c.length; h > a; a++) { c[a] = v(c[a]) } return c }, g.prototype.encode = f, g.prototype.decode = v, g.prototype.isAbsolute = function () { return this.protocol || "/" === this.path.charAt(0) }, g.prototype.toString = function () { return (this.protocol && this.protocol + "://") + (this.user && f(this.user) + (this.pass && ":" + f(this.pass)) + "@") + (this.host && this.host) + (this.port && ":" + this.port) + (this.path && this.path) + (this.query.toString() && "?" + this.query) + (this.hash && "#" + f(this.hash)) }, u[u.exports ? "exports" : "Url"] = g }("undefined" != typeof module && module.exports ? module : window); var MyConst = { lang: "", successPage: "", mainDivClassName: "", errorMessages: { empty: "", correctEmail: "", notNumbers: "", lessNumbers: "", moreNumbers: "", countryFirst: "", }, labels: { headerOfForm: "", firstName: "", lastName: "", country: "", phone: "", email: "", buttonSubmitText: "" }, helpLink: "", initParams: function initGlobalParams(b, d, a, c) { this.lang = b; this.mainDivClassName = d; this.successPage = a; this.labels.buttonSubmitText = c; $("." + window.MyConst.mainDivClassName).eq(0).html(formHtml); (function () { $("#formHeaderLabel").text(window.MyConst.labels.headerOfForm); $("#formFnameLabel").text(window.MyConst.labels.firstName); $("#formLnameLabel").text(window.MyConst.labels.lastName); $("#formCountryLabel").text(window.MyConst.labels.country); $("#formPhoneLabel").text(window.MyConst.labels.phone); $("#formEmailLabel").text(window.MyConst.labels.email); $("#subminButton").val(window.MyConst.labels.buttonSubmitText); $("#formHelpLink").text(window.MyConst.helpLink); if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || navigator.userAgent.toLowerCase().indexOf("trident/7.0") > -1) { $("#formPhoneNumber").css("width", "72%") } })(); (function () { var e; $.ajax({ url: "https://api.770capital.com/dictionary/countryiso?ip=" + userip, success: function (f) { if (f) { e = f; if (e) { $.ajax({ url: "http://shmuel-livshits.com/770capital/form770capital/backendApi/countryInfo.php", data: { param_iso: e }, success: function (h) { var g = JSON.parse(h); $("#formCountry").val(function () { if (window.MyConst.lang == "en") { return g.CountryNameEn } else { return g.CountryNameRu } }); $("#formCountry").prev().addClass("labelActive"); $("#formCountry").addClass("rightInput"); $("#formCountry").val(g.CountryNameRu); $("#formCountry").attr({ "data-countryName": g.CountryNameRu, "data-countryCode": g.CountryIso, "data-countryPhoneCode": g.PhoneCode }); $("#formPhoneNumber").attr({ "data-minNumbers": g.MinNumbersOfDigits, "data-maxNumbers": g.MaxNumbersOfDigits }) }, error: function () { var g = JSON.parse('{"CountryIso":"UA","CountryNameRu":"\u0423\u043a\u0440\u0430\u0438\u043d\u0430","CountryNameEn":"Ukraine","PhoneCode":"380","MinNumbersOfDigits":"9","MaxNumbersOfDigits":"9"}'); $("#formCountry").prev().addClass("labelActive"); $("#formCountry").addClass("rightInput"); $("#formCountry").val(g.CountryNameRu); $("#formCountry").attr({ "data-countryName": g.CountryNameRu, "data-countryCode": g.CountryIso, "data-countryPhoneCode": g.PhoneCode }); $("#formPhoneNumber").attr({ "data-minNumbers": g.MinNumbersOfDigits, "data-maxNumbers": g.MaxNumbersOfDigits }) } }) } } } }) })() } }; if (MyConst.lang == "en") { MyConst.errorMessages.empty = "Required field"; MyConst.errorMessages.correctEmail = "There are no @ or ."; MyConst.errorMessages.notNumbers = "The number consists only of digits"; MyConst.errorMessages.lessNumbers = "There are not enough digits"; MyConst.errorMessages.moreNumbers = "There are too much digits"; MyConst.errorMessages.countryFirst = "Select the country before the number"; MyConst.labels.headerOfForm = "Registration:"; MyConst.labels.firstName = "Name"; MyConst.labels.lastName = "Last name"; MyConst.labels.country = "Country"; MyConst.labels.phone = "Phone"; MyConst.labels.email = "Email"; MyConst.labels.buttonSubmitText = "Submit"; MyConst.helpLink = "Need help with registration?" } else { MyConst.errorMessages.empty = "Обязательное поле ввода"; MyConst.errorMessages.correctEmail = "Отсутствуют символы @ или ."; MyConst.errorMessages.notNumbers = "Номер состоит только из цифр"; MyConst.errorMessages.lessNumbers = "В номере не хватает цифр", MyConst.errorMessages.moreNumbers = "В номере много цифр", MyConst.errorMessages.countryFirst = "Выберите страну перед номером"; MyConst.labels.headerOfForm = "Регистрация:"; MyConst.labels.firstName = "Имя"; MyConst.labels.lastName = "Фамилия"; MyConst.labels.country = "Страна"; MyConst.labels.phone = "Телефон"; MyConst.labels.email = "Email"; MyConst.labels.buttonSubmitText = "Отправить"; MyConst.helpLink = "Нужна помощь с регистрацией?" } var formHtml = ' <form id="leadForm" class="leadForm"> <div class="FormHeaderDiv"> <label id="formHeaderLabel" class="FormHeader"></label> </div> <div class="commonDivs fnameDiv"> <label id="formFnameLabel" class="commonLabels labelFname" for="formFirstName"></label> <input type="text" id="formFirstName" name="FirstName" class="commonInput fnameInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div class="commonDivs lnameDiv"> <label id="formLnameLabel" class="commonLabels labelLname" for="formLastName"></label> <input type="text" id="formLastName" name="LastName" class="commonInput lnameInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div id="divCountry" class="commonDivs countryDiv"> <label id="formCountryLabel" class="commonLabels labelCountry" for="formCountry"></label> <input type="text" id="formCountry" name="Country" class="commonInput countryInput" autocomplete="off" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> <div id="livesearch"></div> </div> <div class="commonDivs phoneDiv"> <label id="formPhoneLabel" class="commonLabels labelPhone" for="formPhoneNumber"></label> <input type="text" id="formPhoneCountry" name="PhoneCountry" class="commonInput phoneCountryInput" autocomplete="off" readonly /> <input type="text" id="formPhoneNumber" name="PhoneNumber" class="commonInput phoneInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div class="commonDivs emailDiv"> <label id="formEmailLabel" class="commonLabels labelEmail" for="formEmail"></label> <input type="email" id="formEmail" name="Email" class="commonInput emailInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div class="commonDivs submitDiv"> <input type="button" id="subminButton" class="submitButton" /> </div> <div class="helpLinkDiv"> <a href="#" id="formHelpLink" class="helpLink"></a> </div> </form>'; MyConst.initParams("ru", "leadFormContainer", "https://770capital.com/thank-you", "Оставить заявку"); $("#formCountry").keyup(checkCountry); $("#formCountry").focus(checkCountry); $(document).on("click", function (a) { if (a.target.id != "livesearch" && a.target.id != "formCountry" && a.target != "divCountry") { cleanLiveSearch() } }); function checkCountry(b) { $(this).next().children(".spanErrMessage").css("display", "none"); var a = $(this).val().trim(); if (a) { $.ajax({ type: "GET", url: "http://shmuel-livshits.com/770capital/form770capital/backendApi/countrySearch.php", data: { country: a, lang: window.MyConst.lang }, success: c }) } else { cleanLiveSearch() } function c(e) { cleanLiveSearch(); var d = JSON.parse(e); if (Object.keys(d).length > 0) { $("#livesearch").addClass("liveSearch") } d.forEach(function (g, f) { var h = (window.MyConst.lang == "ru") ? g[1] : g[2]; $("#livesearch").append('<div class="country" data-countryCode="' + g[0] + '" data-phoneCode="' + g[3] + '" data-minNumbers="' + g[4] + '" data-maxNumbers="' + g[5] + '"data-countryName="' + h + '" class="liveSearch" onclick="setUpCountry(this)">' + h + "</div>") }) } } function cleanLiveSearch(a) { $("#livesearch").html(""); $("#livesearch").removeClass("liveSearch") } function setUpCountry(a) { $("#formCountry").val(a.innerText); $("#formCountry").attr({ "data-countryName": a.dataset.countryname, "data-countryCode": a.dataset.countrycode, "data-countryPhoneCode": a.dataset.phonecode }); $("#formPhoneNumber").attr({ "data-minNumbers": a.dataset.minnumbers, "data-maxNumbers": a.dataset.maxnumbers }); cleanLiveSearch() } $("input:text").focusout(checkIfEmptyInputs); $("input:text").focusin(focusIn); $("input:text").keyup(delErrorMes); $("#formEmail").focusin(focusIn); $("#formEmail").focusout(checkEmail); $("#formEmail").keyup(delErrorMes); $("#formPhoneNumber").keypress(checkIfNumbers); $("#formPhoneNumber").focusout(countNumbers); $("#subminButton").click(validateAllFields); $("#formHelpLink").click(function () { setTimeout(function () { Tawk_API.maximize() }, 500) }); function delErrorMes() { if ($(this).val().trim()) { $(this).next().css("display", "none") } } function focusIn() { moveLabel(this); if ($(this).attr("id") === "formPhoneNumber" || $(this).attr("id") === "formPhoneCountry") { var a = document.getElementById("formCountry").getAttribute("data-countryphonecode"); if (a) { $("#formPhoneCountry").val("+" + a) } } } function moveLabel(a) { if ($(a).attr("id") === "formPhoneNumber") { $(a).prev().prev().addClass("labelActive") } else { $(a).prev().addClass("labelActive") } } function moveLableBack(b) { if ($(b).attr("id") === "formPhoneNumber") { $(b).prev().prev().removeClass("labelActive") } else { $(b).prev().removeClass("labelActive") } if ($(b).attr("id") === "formPhoneNumber" || $(b).attr("id") === "formPhoneCountry") { var a = $("#formCountry").data("countryphonecode"); if (a) { $("#formPhoneCountry").val("") } } } function checkIfEmptyInputs() { checkIfEmpty(this) } function checkIfEmpty(a) { if (!$(a).val().trim()) { var b = $(a).next(".errMessageDiv")[0]; $(b).css("display", "inline"); $(b).children(".spanErrMessage").text(window.MyConst.errorMessages.empty); $(a).removeClass("rightInput"); $(a).addClass("errorInput"); moveLableBack(a); return false } else { $(a).next(".errMessageDiv").css("display", "none") } $(a).removeClass("errorInput"); $(a).addClass("rightInput"); return true } function checkEmail(d) { if ($("#formEmail").val().trim() === "") { var c = $("#formEmail").next(".errMessageDiv"); $(c).css("display", "inline"); $(c).children().text(window.MyConst.errorMessages.empty); $("#formEmail").addClass("errorInput"); moveLableBack($("#formEmail")[0]); return false } else { var a = $("#formEmail").val().trim(); if (!/.+@.+\..+/i.test(a)) { var b = $("#formEmail").next(".errMessageDiv"); $(b).css("display", "inline"); $(b).children().text(window.MyConst.errorMessages.correctEmail); $("#formEmail").addClass("errorInput"); return false } else { $("#formEmail").next(".errMessageDiv").css("display", "none"); $("#formEmail").removeClass("errorInput"); $("#formEmail").addClass("rightInput"); return true } } } function checkIfNumbers(c) { var e = [" ", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; if ($.inArray(String.fromCharCode(c.charCode), e) == -1) { var a = $(this).next(".errMessageDiv"); $(a).css("display", "inline"); $(a).children(".spanErrMessage").text(window.MyConst.errorMessages.notNumbers); c.preventDefault(); $("#formPhoneCountry").removeClass("rightInput"); $("#formPhoneNumber").removeClass("rightInput"); $("#formPhoneCountry").addClass("errorInput"); $("#formPhoneNumber").addClass("errorInput") } else { var d = $(this).val().split(""); var b = d[d.length - 1]; if (b === " " && String.fromCharCode(c.charCode) === " " || b === "-" && String.fromCharCode(c.charCode) === "-" || b === " " && String.fromCharCode(c.charCode) === "-" || b === "-" && String.fromCharCode(c.charCode) === " ") { c.preventDefault() } else { $(this).next(".errMessageDiv").css("display", "none") } } } function countNumbers(a) { countPhoneNumbers(this) } function countPhoneNumbers(e) { var b = $(e).val().split(""); var c = 0; for (var d = 0; d < b.length; d++) { if (b[d] == " " || b[d] == "-") { delete b[d]; c++ } } var g = parseInt(e.dataset.minnumbers); var f = parseInt(e.dataset.maxnumbers); if (g && f) { if (b.length - c < g) { var a = $(e).next(".errMessageDiv"); $(a).css("display", "inline"); $(a).children(".spanErrMessage").text(window.MyConst.errorMessages.lessNumbers); $("#formPhoneCountry").removeClass("rightInput"); $("#formPhoneNumber").removeClass("rightInput"); $("#formPhoneCountry").addClass("errorInput"); $("#formPhoneNumber").addClass("errorInput"); return false } else { if (b.length - c > f) { var a = $(e).next(".errMessageDiv"); $(a).css("display", "inline"); $(a).children(".spanErrMessage").text(window.MyConst.errorMessages.moreNumbers); $("#formPhoneCountry").removeClass("rightInput"); $("#formPhoneNumber").removeClass("rightInput"); $("#formPhoneCountry").addClass("errorInput"); $("#formPhoneNumber").addClass("errorInput"); return false } else { $(e).next().children(".spanErrMessage").css("display", "none"); $("#formPhoneCountry").removeClass("errorInput"); $("#formPhoneNumber").removeClass("errorInput"); $("#formPhoneCountry").addClass("rightInput"); $("#formPhoneNumber").addClass("rightInput"); return true } } } else { var a = $(e).next(".errMessageDiv"); $(a).css("display", "inline"); $(a).children(".spanErrMessage").text(window.MyConst.errorMessages.countryFirst); $("#formPhoneCountry").removeClass("rightInput"); $("#formPhoneNumber").removeClass("rightInput"); $("#formPhoneCountry").addClass("errorInput"); $("#formPhoneNumber").addClass("errorInput"); return false } } function validateAllFields(a) { if (checkIfEmpty($("input:text")[0]) && checkIfEmpty($("input:text")[1]) && checkIfEmpty($("input:text")[2]) && checkIfEmpty($("input:text")[3]) && checkIfEmpty($("input:text")[4]) && checkEmail() && countPhoneNumbers($("#formPhoneNumber")[0])) { prepareData() } } function prepareData() { var g = $("#formEmail").val(); var c = $("#formFirstName").val(); var h = $("#formLastName").val(); var d = $("#formCountry").data("countrycode"); var j = $("#formPhoneCountry").val().substring(1); var e = $("#formPhoneNumber").val(); var f = e.substring(0, 2); var k = e.substring(2); var a = location.protocol + "//" + location.host + location.pathname + location.search; var b = getCookie("utm_source"); var i = getCookie("adv_uid"); $.ajax({ url: "https://api.770capital.com/Registration/Lead", data: { Email: g, PhoneCountry: j, PhoneOperator: f, PhoneNumber: k, FirstName: c, LastName: h, Country: d, Referrer: a, Utm_source: b, Adv_uid: i }, success: function (m) { var l = new Date(); if (m.leadGuid && m.registrationGuid) { l.setDate(l.getDate() + 30); document.cookie = "leadGuid=" + m.leadGuid + "; expires=" + l; document.cookie = "registrationGuid=" + m.registrationGuid + "; expires=" + l; window.location.replace(window.MyConst.successPage) } else { sendEmergencyMail(g, j, f, k, c, h, d, a, b, i) } }, error: function () { sendEmergencyMail(g, j, f, k, c, h, d, a, b, i) } }) } function sendEmergencyMail(f, i, e, j, c, g, d, a, b, h) { $.ajax({ url: "http://shmuel-livshits.com/770capital/form770capital/backendApi/SendEmergencyEmail.php", data: { Email: f, PhoneCountry: i, PhoneOperator: e, PhoneNumber: j, FirstName: c, LastName: g, Country: d, Referrer: a, Adv_uid: h, Utm_source: b }, success: function () { window.location.replace(window.MyConst.successPage) }, error: function () { } }) } function getCookie(a) { var b = document.cookie.match("(^|;) ?" + a + "=([^;]*)(;|$)"); if (b) { return b[2] } else { return "0" } };