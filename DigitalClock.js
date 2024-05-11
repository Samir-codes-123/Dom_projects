const date = document.querySelector("#clock")

setInterval(()=>{
    const time = new Date()
    date.innerHTML=time.toLocaleTimeString()
},1000)