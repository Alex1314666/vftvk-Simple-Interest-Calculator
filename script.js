// @Author: Yi Z
// compute result
function compute()
{
    // get principal value
    var principal = document.getElementById("principal").value;
    // validation
    // if negative, waiting new input
    if(parseInt(principal) <= 0){
        document.getElementById("validation").innerHTML="<mark>Enter a positive number</mark><br/><button onclick=\"focusPrincipal()\"> Ok</button>";

    }
    // else, calculate
    else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);
        document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,\<br\>at an interest rate of <mark>" + rate + "</mark>%\<br\>You will receive an amount of <mark>" + interest + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\>";
    }
}
// update rate
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";

}
// focus principal input box
function focusPrincipal(){
    document.getElementById("principal").focus();
    document.getElementById("validation").innerHTML="";

}
