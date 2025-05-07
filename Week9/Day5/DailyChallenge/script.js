const submit = document.getElementById("submit");

const result = document.getElementById("result");

function isAnagram(string1, string2) {
        const lettersS1 = string1.split('').sort().join('');
        const lettersS2 = string2.split('').sort().join('');

    if (lettersS1 === lettersS2) {
        return true;
    }
    else {
        return false;
    }

    
}


submit.addEventListener('click', function(event){
    event.preventDefault();
    
    const string1 = document.getElementById("string1").value.trim().toLowerCase();
const string2 = document.getElementById("string2").value.trim().toLowerCase();
 
    result.innerHTML = isAnagram(string1, string2) 
});

