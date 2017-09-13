
//var userip;
(function(){
    if (!window.jQuery) {
        var script = document.createElement("script");
        script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
        script.async = false;
        document.head.appendChild(script);
    }

   /* var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = 'http://shmuel-livshits.com/770capital/form770capital/css/LeadForm.css';
    link.async = false;
    document.head.appendChild(link);*/
    var urlLib = document.createElement("script");
    urlLib.src = 'http://shmuel-livshits.com/770capital/form770capital/js/domurl-master/url.min.js';
    urlLib.async = false;
    document.head.appendChild(urlLib);

    var myconsts = document.createElement("script");
    myconsts.src = 'http://shmuel-livshits.com/770capital/form770capital/js/MyConsts.js';
    myconsts.async = false;
    document.head.appendChild(myconsts);

   /* var ipScript = document.createElement("script");
    ipScript.src = "https://l2.io/ip.js?var=userip";
    document.head.appendChild(ipScript);*/

   

    document.getElementsByClassName("leadFormContainer")[0].innerHTML = '<form id="leadForm" class="leadForm"> <div class="FormHeaderDiv" > <label id="formHeaderLabel" class="FormHeader"></label> </div> <div class="commonDivs fnameDiv"> <label id="formFnameLabel" class="commonLabels labelFname" for="formFirstName"></label> <input type="text" id="formFirstName" name="FirstName" class="commonInput fnameInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div class="commonDivs lnameDiv"> <label id="formLnameLabel" class="commonLabels labelLname" for="formLastName"></label> <input type="text" id="formLastName" name="LastName" class="commonInput lnameInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div id="divCountry" class="commonDivs countryDiv"> <label id="formCountryLabel" class="commonLabels labelCountry" for="formCountry"></label> <input type="text" id="formCountry" name="Country" class="commonInput countryInput" autocomplete="off" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> <div id="livesearch"></div> </div> <div class="commonDivs phoneDiv"> <label id="formPhoneLabel" class="commonLabels labelPhone" for="formPhoneNumber"></label> <input type="text" id="formPhoneCountry" name="PhoneCountry" class="commonInput phoneCountryInput" autocomplete="off" readonly /> <input type="text" id="formPhoneNumber" name="PhoneNumber" class="commonInput phoneInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div class="commonDivs emailDiv"> <label id="formEmailLabel" class="commonLabels labelEmail" for="formEmail"></label> <input type="email" id="formEmail" name="Email" class="commonInput emailInput" autocomplete="on" /> <div class="errMessageDiv"> <span class="spanErrMessage"></span> </div> </div> <div class="commonDivs submitDiv"> <input type="button" id="subminButton" class="submitButton" /> </div> <div class="helpLinkDiv" > <a href="#" id="formHelpLink" class="helpLink"></a> </div> </form>';
    var loadInfo = document.createElement("script");
    loadInfo.src = "http://shmuel-livshits.com/770capital/form770capital/js/loadInfo.js";
    loadInfo.async = false;
    document.body.appendChild(loadInfo);
    var identifyCountry = document.createElement("script");
    identifyCountry.src = 'http://shmuel-livshits.com/770capital/form770capital/js/IdentifyCountry.js';
    identifyCountry.async = false;
    document.body.appendChild(identifyCountry);

    var validators = document.createElement("script");
    validators.src = 'http://shmuel-livshits.com/770capital/form770capital/js/validators.js';
    validators.async = true;
    document.body.appendChild(validators);

    var countrySearch = document.createElement("script");
    countrySearch.src = 'http://shmuel-livshits.com/770capital/form770capital/js/countrySearch.js';
    countrySearch.async = true;
    document.body.appendChild(countrySearch);
})();
 
