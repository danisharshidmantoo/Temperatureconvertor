
document.getElementById("submitbutton").onclick = function(){
    let temp;
    temp = document.getElementById("temperature").value;
    if(document.getElementById("cbutton").checked){
        document.getElementById("display").innerHTML = (temp - 32)*(5/9);
    }
    else if (document.getElementById("fbutton").checked){
        document.getElementById("display").innerHTML = temp*9/5 + 32;
    }
    else {
        document.getElementById("display").innerHTML = "select a unit";
    }
}