const upperCaseset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseset="abcdefghijklmnopqrstuvwxyz";
const numbersSet='1234567890';
const symbolsSet='!@#$%^&*()_+-=[]{};:"\|,.<>?/';
var upperCase= document.getElementById('uppercase');
var lowerCase= document.getElementById('lowercase');
var number= document.getElementById('number');
var symbol= document.getElementById('symbol');
var length=document.getElementById('lengthofpass');
var passwordbox=document.getElementById('password');
var generatedPass;

function randomData(data){
    return data[Math.floor(Math.random()*data.length)];
};
console.log(randomData(upperCaseset));
console.log(randomData(symbolsSet));
function passGen(password=""){
    if(upperCase.checked){
        password+=randomData(upperCaseset)
    }
    if(lowerCase.checked){
        password+=randomData(lowerCaseset)
    }
    if(number.checked){
        password+=randomData(numbersSet)
    }
    if(symbol.checked){
        password+=randomData(symbolsSet)
    }
    if(password.length<length.value){
        return passGen(password)
    }
    passwordbox.innerText=password;
    
}



document.getElementById('generate').addEventListener("click",function(){passGen();});
