

//return length value
function getLength() {
    
    var min = document.querySelector('.min').value;
    var max = document.querySelector('.max').value;
    var  length  = {minimum:min, maximum:max};
    return length;
}
//returns random length between 8 & 128.
function setRandomLength() {
    return Math.floor((Math.random() * 120) +8);
}
//generates random upppercase
function getUpper() {
    var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return arr[Math.floor(Math.random() * arr.length)];
}
//generates random lowercase
function getLower() {
    return getUpper().toLowerCase();
}
//generates random number
function getNumber() {
    arr = ['0','1', '2','3','4','5','6','7','8','9'];
    return arr[Math.floor(Math.random() * arr.length)];
}
//generates random special char
function getSpecialChar() {
    var arr = [' ','!', '"','#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[','\\', ']', '^', '_', '`', '}', '|', '}', '~'];
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomizor() {
    
}

var generator = document.querySelector('.generate');

generator.addEventListener('click', function() {
    //Get and set input values from dom
    var needsLength = document.querySelector('.length').checked;
    var length = needsLength ? getLength() : setRandomLength(); 
    
    var needsUpper =  document.querySelector('.alpha-upp').checked;
    var upper = needsUpper ? getUpper() : false;
    
    var needsLower =  document.querySelector('.alpha-low').checked;
    var lower = needsLower ? getLower() : false;
   
    var needsNumber = document.querySelector('.numeric').checked;
    var numeric = needsNumber ? getNumber() : false;
  
    var needsSpecial = document.querySelector('.special').checked;
    var special = needsSpecial ? getSpecialChar() : false;
    
    console.log(length, upper, lower, numeric, special);
    
    if (needsLength) {
        for ( let i = length.minimum; i <= length.maximum; i++ ) {

        }
    }
})  


