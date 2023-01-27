const email_1=document.getElementById('email1')
const email_2=document.getElementById('email2')
const btn_1=document.getElementById('btn1')
const btn_2=document.getElementById('btn2')
const alert_1=document.getElementById('alert1')
const alert_2=document.getElementById('alert2')

btn_1.addEventListener("click", ()=>{
    if(email_1.value==="")
    {
    alert_1.style.display="block"
    }
})


btn_2.addEventListener("click", ()=>{
    if(email_2.value==="")
    {
    alert_2.style.display="block"
    }
})
