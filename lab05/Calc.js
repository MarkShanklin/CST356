var buttonClick = document.querySelectorAll("button.digit");
var bEquls = document.querySelector("button#eq");
var bDel = document.querySelector("button#del");
var textAr = document.querySelector("input#calcarea");
var checkMod = false;
var checkDiv = false;
var checkMul = false;
var checkSub = false;
var checkAdd = false;


bDel.onclick = function() {
    textAr.value = "0";
}
buttonClick.forEach(function(element) {
    element.onclick = function() {
    
            textAr.value += this.value;
    }
});

bEquls.onclick = function() {
    textAr.value = eval(textAr.value);
}