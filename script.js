const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwxyz";
const numberset="1234567890";
const symbolset="!@#$%^&*()_";

const pass_box=document.getElementById("paswd")
const total_char=document.getElementById("label1")
const upperinput=document.getElementById("upercase")
const lowerinput=document.getElementById("lowercase")
const numberinput=document.getElementById("number")
const symbolinput=document.getElementById("symbol")

const getrandomdata=(dataset)=>{
              return dataset[Math.floor(Math.random()*dataset.length)]
}
const generateData=(password="")=>{
  if(upperinput.checked){
              password +=getrandomdata(upperset)
  }
  if(lowerinput.checked){
              password +=getrandomdata(lowerset)
  }
  if(numberinput.checked){
              password +=getrandomdata(numberset)
  }
  if(symbolinput.checked){
              password +=getrandomdata(symbolset)
  }
  if(password.length < total_char.value){
       return generateData(password);
  }
  pass_box.innerHTML=truncateString(password,total_char.value)
}

generateData();

document.getElementById("btn").addEventListener
(
              "click",
              function(){
                          generateData();
              }
)
function truncateString(str,num){
              if(str.length>num){
                            let substr=str.substring(0,num)
                            return substr;
              }
              else{
                            return str;
              }
}