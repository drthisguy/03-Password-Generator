
//returns random length between min & max values.
function setRandomLength(min, max) {
    
    return Math.floor((Math.random() * (max - min) + min));
}

//return length range values.
function getLength() {
    
    var min = parseInt(document.querySelector('.min').value);
    var max = parseInt(document.querySelector('.max').value);

    if (isNaN(min) && isNaN(max)) { //validate.
        alert('Your password length criteria is not valid.');

      }else if (isNaN(min) && Number.isInteger(max))  {
      
          return max;

      }else if (isNaN(max) && Number.isInteger(min)) {
          
            return min;

    }else {
        return setRandomLength(min, max);
    }
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

function randomizor(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function checkBox(oldArr) {
    var newArr = [];
    for (var i=0; i< oldArr.length; i++)
        if (oldArr[i] !== false) {
            newArr.push(oldArr[i]);
        }
    return newArr;
}
var generator = document.querySelector('.generate');

generator.addEventListener('click', function() {

    /*Get and set all input parameters from the dom*/
    var charz = [];
    
    var needsLength = document.querySelector('.length').checked;
    var length = needsLength ? getLength() : setRandomLength(8, 128); //default range for length.
    
    var needsUpper =  document.querySelector('.alpha-upp').checked;
    var upper = needsUpper ? getUpper() : false;
    
    var needsLower =  document.querySelector('.alpha-low').checked;
    var lower = needsLower ? getLower() :needsLower ? charz.push(lower) : false;
   
    var needsNumber = document.querySelector('.numeric').checked;
    var numeric = needsNumber ? getNumber() : needsNumber ? charz.push(numeric) : false;
  
    var needsSpecial = document.querySelector('.special').checked;
    var special = needsSpecial ? getSpecialChar() : needsSpecial ? charz.push(special) : false;
    
    console.log(charz, length, upper, lower, numeric, special);
    
    var charz = [upper, lower, numeric, special];
    charz = checkBox(charz); 



    // charz = randomizor(charz);
    console.log(charz);
    // var output = '';
    // for ( let i = 0; i <= length; i++ ) {
    //     output += charz[i];
    //     console.log(output);
    // }
    
})  


