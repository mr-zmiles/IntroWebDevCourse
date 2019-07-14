function validateItems() {
    // clearErrors();
    var uName = document.forms["contactUsForm"]["name"].value;
    var uEmail = document.forms["contactUsForm"]["email"].value;
    var uPhoneNum = document.forms["contactUsForm"]["phoneNumber"].value;
    var checkBoxes = document.getElementsByName("contacDays");
    if (uName == "" ) {
        alert("You must provide your name, so we may know who to contact.");
        document.forms["contactUsForm"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contactUsForm"]["name"].focus();
        return false;
    }
   if (uEmail == "" ) {
       alert("You must provide your email, so we know how to contact you");
       document.forms["contactUsForm"]["email"]
          .parentElement.className = "form-group has-error"
       document.forms["contactUsForm"]["email"].focus();
       return false;
   }
   if (uPhoneNum == "" ) {
       alert("You must provide your phone number, so we know how to reach you");
       document.forms["contactUsForm"]["phoneNumber"]
          .parentElement.className = "form-group has-error"
       document.forms["contactUsForm"]["phoneNumber"].focus();
       return false;
   }
   if(!(($("#monday").is(":checked")) || ($("#tuesday").is(":checked"))
            || ($("#wednesday").is(":checked")) || ($("#thursday").is(":checked"))
          || ($("#friday").is(":checked")))) {
              alert("You must select at least one day to contact you.");
              document.forms["contactUsForm"]["phoneNumber"]
                 .parentElement.className = "form-group has-error";
              return false;
            }
    else{
      alert("Thank you for contacting us! We will be in touch soon!");
    }

   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("addResult").innerText = Number(num1) +
                                                     Number(num2);
   document.getElementById("subtractResult").innerText = num1 - num2;
   document.getElementById("multiplyResult").innerText = num1 * num2;
   document.getElementById("divideResult").innerText = num1 / num2;
   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;
}
