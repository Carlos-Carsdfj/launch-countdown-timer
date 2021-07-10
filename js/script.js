const $time = document.querySelector('#time')
const $form = document.querySelector('#form')
const $endDate = document.querySelector('#endDate')
const $reset = document.querySelector('#reset')
const $days = document.querySelector('#days')
const $hours = document.querySelector('#hours')
const $minutes = document.querySelector('#minutes')
const $seconds = document.querySelector('#seconds')
const $content = document.querySelector('.content')

$content.style.display = 'none'


window.addEventListener('load', (event) => {
$content.style.display = 'block'
  
})


let date = new Date()
console.log(date.getMonth())
let dateInit = date.getFullYear(4)+'-'+('0'+date.getMonth()).slice(-2)+'-'+('0'+date.getDate()).slice(-2)
console.log(dateInit)
$endDate.min = dateInit // YY/MM/DD





    const SECOND = 1000
    const MINUTE = SECOND * 60
    const HOUR = MINUTE * 60
    const DAY = HOUR * 24
    var timer
    
    
    
    
    
    
class countDownTime{
  constructor(date){
    this.end = new Date(date)
  }
  metodo(){   
    var now = new Date();
    var  distance = this.end - now;
    if(distance <0){    
      return false
    }     
    let days = Math.floor(distance / DAY);
    let hours = Math.floor((distance % DAY) / HOUR);
    let minutes = Math.floor((distance % HOUR) / MINUTE);
    let seconds = Math.floor((distance % MINUTE) / SECOND);
    return {days, hours, minutes, seconds}
  }


}



let count 

//metodo que cambia el label de la fecha 
function showTimer(){ 
  let retorno = count.metodo() 
  if(!retorno){
    clearInterval(timer)
    return
  }
  
  const {days, hours, minutes, seconds} = retorno
  

  $days.innerHTML = days
  $hours.innerHTML = hours 
  $minutes.innerHTML = minutes 
  $seconds.innerHTML = seconds 
}
  
//


//fecha calendario  formulario 

$form.addEventListener('submit',function(ev){
  ev.preventDefault()
  const {dateInit} = this
  dateInit.value
  initCountDown(dateInit.value) 
})

  // funcion que inicia el timer y vizualisa el reiniciar y quita el // form                     
function initCountDown(value){
  window.localStorage.setItem('timeSet',value)
  count = new countDownTime(value)
  timer = setInterval(showTimer, 1000)
  $form.style.display = 'none'
  $reset.style.display = 'block'
}
//boton que reinica el storage 
$reset.addEventListener('click',()=>{
  $form.style.display = 'block'
  $reset.style.display = 'none'
  clearInterval(timer)
  localStorage.clear()
  $days.innerHTML ='0'
  $hours.innerHTML ='0'
  $minutes.innerHTML ='0'
  $seconds.innerHTML ='0'
  
} )



//condicional que comprueba el estorage y ve si ya tienes una fecha //seteada
if (window.localStorage.getItem('timeSet')){
  let dateInit = window.localStorage.getItem('timeSet')
 
  
 $form.style.display = 'none'
  
 $reset.style.display = 'block'
  
  initCountDown(dateInit)
  
  
}else{
  $reset.style.display = 'none'
}







  