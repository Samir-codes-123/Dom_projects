const form = document.querySelector("form")
form.addEventListener("submit",(submit)=>{
    submit.preventDefault();
    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);
    const result = document.querySelector("#result");

    if(height===" "|| isNaN(height)|| height<0){
        result.innerHTML=`${height} is not valid`;
    }
    else if(weight===" "|| isNaN(weight)|| weight<0){
        result.innerHTML=`${weight} is not valid`;
    }
    else{
        result.innerHTML=(weight/((height*height)/10000)).toFixed(2);
    }
    const para = document.createElement("p")
    if(result<18.6){
        para.appendChild(document.createTextNode("You are underweight"))
        result.appendChild(para)
    
    }
   else if(result>=18.6 && result<24.9){
        para.appendChild(document.createTextNode("You are fit"))
        result.appendChild(para)
    
    }
    else{
        para.appendChild(document.createTextNode("You are overweight"))
        result.appendChild(para)
    
    }
})