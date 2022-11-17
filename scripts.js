// email validation in JQuery which is inbuilt 
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

// action to be perform when click the submit button
$("#submitButton").click(function() {

    var fieldsMissing = "";
    var errorMessage = ""; 
    
    if ($("#email").val() == "") {
        fieldsMissing += "<br>Email \n";
    }

    if ($("#phone").val() == "") {
        fieldsMissing += "<br>Phone \n";
    }

    if ($("#password").val() == "") {
        fieldsMissing += "<br>Password \n";
    }

    if ($("#passwordConfirm").val() == "") {
        fieldsMissing += "<br>Confirm Password \n";
    }

    // showing when fields are missing
    if (fieldsMissing != "") {
        errorMessage += "The following field(s) are missing \n" + fieldsMissing;
    }

    if(isEmail($("#email").val()) == false) {

        errorMessage += "<br>Your email address is not valid \n";
    }

    if($.isNumeric($("#phone").val()) == false) {
        errorMessage += "<br>Your phone number is not valid \n";
    }

    if ($("#password").val() != $("#passwordConfirm").val()) {
        errorMessage += "<br>Your passwords don't match";
    }

    // showing error and success
    if (errorMessage != "") {
        $("#errorMessage\n").html(errorMessage);
    } else {
        $("#successMessage").show();
        $("#errorMessage").hide();
    }
});