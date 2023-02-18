const buttom=document.getElementById("buttom")
const hora=document.getElementById("hora")
const minuto=document.getElementById("minuto")
const segundo=document.getElementById("segundo")
const cronos=document.getElementById("cronos")
let hour=0
let minute=0
let second=0
let confirm=false
function time(){
    second++
    if(second>=60){
        minute++
        second=0
    }
    if(minute>=60){
        hour++
        minute=0
    }
    cronos.textContent=hour+":"+minute+":"+second
}


buttom.addEventListener("click",()=>{
    hour=parseInt(hora.value)
    minute=parseInt(minuto.value)
    second=parseInt(segundo.value)

    
})
setInterval(time,1000)






