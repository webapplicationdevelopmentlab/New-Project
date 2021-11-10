pwd=document.getElementById("pwd");
var username=document.getElementById("usrnm");
function CheckPassword() 
{ 
    var decimal=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(username.value=="")
    {
        alert("Please enter username");
        return false;
    }
    else{
        if(pwd.value.match(decimal)) 
        { 
            alert('Correct');
            return true;
        }
        else
        { 
            alert('Incorrect password');
            return false;
        }
    } 
}