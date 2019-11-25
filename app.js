// Generators

function getUpper() {
    var arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return arr[Math.floor(Math.random() * arr.length)];
}

function getLower() {
    var arr = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return arr[Math.floor(Math.random() * arr.length)];
}

function getNumber() {
    arr = ['0','1', '2','3','4','5','6','7','8','9'];
    return arr[Math.floor(Math.random() * arr.length)];
}

function getSpecialChar() {
    var arr = [' ','!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[','\\', ']', '^', '_', '`', '}', '|', '}', '~'];
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getUpper());
console.log(getLower());
console.log(getNumber());
console.log(getSpecialChar());

//Get input values from document
var docGenerate = document.querySelector('.generate');
// var docLength = document.querySelector('.length');
var docUpCase = document.querySelector('.alpha-upp');
var docLowCase = document.querySelector('.alpha-low');
var docNumeric = document.querySelector('.numeric');
var docSpecial = document.querySelector('.special');

docGenerate.addEventListener('click', function() {
    var length = document.querySelector('.length');
    length = parseInt(length.value);
    console.log(length);

    var upperCase = docUpCase.checked;
    console.log(upperCase);
})  


