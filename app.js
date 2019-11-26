// Generators

function getUpper() {
    var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return arr[Math.floor(Math.random() * arr.length)];
}

function getLower() {
    return getUpper().toLowerCase();
}

function getNumber() {
    arr = ['0','1', '2','3','4','5','6','7','8','9'];
    return arr[Math.floor(Math.random() * arr.length)];
}

function getSpecialChar() {
    var arr = [' ','!', '"','#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[','\\', ']', '^', '_', '`', '}', '|', '}', '~'];
    return arr[Math.floor(Math.random() * arr.length)];
}

function getLength() {
    var length = document.querySelector('.length');
    return parseInt(length.value);
}
console.log(getUpper());
console.log(getLower());
console.log(getNumber());
console.log(getSpecialChar());

//Get input values from document
var docGenerate = document.querySelector('.generate');

var docLength = document.querySelector('.length-box');
var docUpCase = document.querySelector('.alpha-upp');
var docLowCase = document.querySelector('.alpha-low');
var docNumeric = document.querySelector('.numeric');
var docSpecial = document.querySelector('.special');

docGenerate.addEventListener('click', function() {
    
    var needsLength = docUpCase.checked;
    var length = needsLength ? getLength() : false;
    console.log(length);
    var needsUpper = docUpCase.checked;
    var upper = needsUpper ? getUpper() : false;
    console.log(upper);
    var needsLower = docLowCase.checked;
    var lower = needsLower ? getLower() : false;
    console.log(lower);
    var needsNumber = docNumeric.checked;
    var numeric = needsNumber ? getNumber() : false;
    console.log(numeric);
    var needsSpecial = docUpCase.checked;
    var special = needsSpecial ? getSpecialChar() : false;
    console.log(special);

    
})  


