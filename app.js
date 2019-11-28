
//returns random length between min & max values.
function setRandomLength(min, max) {
    
    return Math.floor((Math.random() * (max - min) + min));
}

function randomizor(arr) {
    //pick random array
    randomArray =  arr[Math.floor(Math.random() * arr.length)];

    //return random character from random array
    return randomArray[Math.floor(Math.random() * randomArray.length)]
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

//sort out unchecked criteria.
function checkBox(arr) {

    var criteria = [];
    for (var i=0; i < arr.length; i++)
        if (arr[i] !== false) {
            criteria.push(arr[i]);
        }
    return criteria;
}

function copier(clip) {
    
    
 }


// toLowerCase for an array.
function lowerCase(alphabet) {
    return alphabet.toLowerCase();
}

// Criteria arrays
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = upper.map(lowerCase);
var numeric = ['0','1', '2','3','4','5','6','7','8','9'];
var special = [' ','!', '"','#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[','\\', ']', '^', '_', '`', '}', '|', '}', '~'];

var generator = document.querySelector('.generate');
var copy = document.querySelector('#copy');

generator.addEventListener('click', function() {

    /*Get and set all input parameters from the dom*/
    
    var needsLength = document.querySelector('.length').checked;
    length = needsLength ? getLength() : setRandomLength(8, 128); //default range for length.
    
    var needsUpper =  document.querySelector('.alpha-upp').checked;
    upper = needsUpper ? upper : false;
    
    var needsLower =  document.querySelector('.alpha-low').checked;
    lower = needsLower ? lower : false;
   
    var needsNumber = document.querySelector('.numeric').checked;
    numeric = needsNumber ? numeric : false;
  
    var needsSpecial = document.querySelector('.special').checked;
    special = needsSpecial ? special : false;
    
    console.log(length, upper, lower, numeric, special);
    
    var charz = [upper, lower, numeric, special];
    charz = checkBox(charz); // sort out unchecked criteria


    console.log(charz);
    var output = '';
    for ( let i = 0; i <= length; i++ ) {
        
        output += randomizor(charz);
        console.log(output);
    }
    document.getElementById('output').innerHTML = `<p text-break id="copy-text">${output}</p>  
        <div class="row"><div class="col"><button type="button" class="btn btn-success mt-4 text-break copy">Copy to Clipboard</button></div></div>`;

    copy.addEventListener('click', function() {
         
    navigator.clipboard.writeText(clip);
    })

})  

console.log(output);
