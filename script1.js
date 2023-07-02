const upperinput="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerinput="abcdefghijklmnopqrstuvwxyz";
const numberinput="1234567890";
const symbolinput="!@#$%^&*()_"

let pass_box=document.getElementById("paswd");
let total_char=document.getElementById("label1");
let upperset=document.getElementById("upercase");
let lowerset=document.getElementById("lowercase");
let numberset=document.getElementById("number");
let symbolset=document.getElementById("symbol");

const getrandomdata=(setdata)=>{
              return setdata[Math.floor(Math.random()*setdata.length)];
}

const generateData=(password="")=>{
    if(upperset.checked){
              password += getrandomdata(upperinput);
    }
    if(lowerset.checked){
              password += getrandomdata(lowerinput);
    }
    if(numberset.checked){
              password += getrandomdata(numberinput);
    }
    if(symbolset.checked){
              password += getrandomdata(symbolinput);
    }
    if(password.length<total_char.value){
              return generateData(password);
    }
    pass_box.innerHTML= cutString(password,total_char.value)
}

generateData();

document.getElementById("btn").addEventListener(
              "click",
              function(){
                            generateData();
              }
)

function cutString(str,num){
              if(str.length>num){
                            let substr=str.substring(0,num);
                            return substr;
              }
              else{
                            return str;
              }
}