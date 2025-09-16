function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let result1 = Number(num1) + Number(num2);

    if (result1 < 0) {
        document.getElementById("results").style.color = "red";
    }
    else {
        document.getElementById("results").style.color = "";
    }
    document.getElementById("results").innerHTML=String(result1);

}
function sub() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let result2 = Number(num1) - Number(num2);

    if (result2 < 0) {
        document.getElementById("results").style.color = "red";
    }
    else {
        document.getElementById("results").style.color = "";
    }
    document.getElementById("results").innerHTML=String(result2);

}
function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let result3  = Number(num1) * Number(num2);

    if (result3 < 0) {
        document.getElementById("results").style.color = "red";
    }
    else {
        document.getElementById("results").style.color = "";
    }
    document.getElementById("results").innerHTML=String(result3);
}
function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let result4  = Number(num1) / Number(num2);

    if (result4 < 0) {
        document.getElementById("results").style.color = "red";
    }
    else {
        document.getElementById("results").style.color = "";
    }
    document.getElementById("results").innerHTML=String(result4);
}
function power() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let total = 1;
    for (let i = 1; i <= num2; i++) {
        total = total * num1;
    }
    let result5 = total;

    if (result5 < 0) {
        document.getElementById("results").style.color = "red";
    }
    else {
        document.getElementById("results").style.color = "";
    }
    document.getElementById("results").innerHTML=String(result5);
}
function doClear() {
    console.log("clear function called")
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("results").innerHTML = "";
}