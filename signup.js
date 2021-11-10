var email=document.getElementById("emailid");
var phoneno=document.getElementById("phone");
var pwd=document.getElementById("pwd");
var username=document.getElementById("usrnm");
function validate(){
    var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var decimal= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ ;
    var ctr = 0;
    if(username.value=="" || pwd.value=="")
    {
        alert("Fill all the fields");
        return false;
    }
    var matchedCase = new Array();
                matchedCase.push("[A-Z]");     
                matchedCase.push("[0-9]");      
                matchedCase.push("[a-z]");  
        for (var i = 0; i< matchedCase.length ; i++) {
            if (new RegExp(matchedCase[i]).test(decimal)) {
                ctr++;
            }
        }
        // Display it
        var color = "";
        var strength = "";
        switch (ctr) {
            case 0:
            case 1:
            case 2:
                strength = "Weak";
                color = "red";
                break;
            case 3:
                strength = "Medium";
                color = "orange";
                break;
            case 4:
                strength = "Strong";
                color = "green";
                break;
        }
        document.getElementById("pwd").innerHTML = strength;
        document.getElementById("pwd").style.color = color;
    if(pwd.value.match(decimal)){
        if(phoneno.value.match(phone)){
            alert('Correct');
            return true;
        }
       else {  
            alert('Incorrect phone number');
            return false;
         }
    }
    else{
    alert('Incorrect password');
    return false;
    }
}
                  
       