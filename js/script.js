const $time = document.querySelector('#time')
const $form = document.querySelector('#form')
const $endDate = document.querySelector('#endDate')
const $reset = document.querySelector('#reset')
const $days_top = document.querySelector('#days-top')
const $days_bottom = document.querySelector('#days-bottom')
const $hours_top = document.querySelector('#hours-top')
const $hours_bottom = document.querySelector('#hours-bottom')
const $minutes_top = document.querySelector('#minutes-top')
const $minutes_bottom = document.querySelector('#minutes-bottom')
const $seconds_top = document.querySelector('#seconds-top')
const $seconds_bottom = document.querySelector('#seconds-bottom')
const $content = document.querySelector('.content')


$content.style.display = 'none'

//muestra el contenido una vez terminado de cargar la pagina y los datos
window.addEventListener('load', (event) => {
$content.style.display = 'block'  
})


let date = new Date()

let dateInit = date.getFullYear(4)+'-'+('0'+(date.getMonth()+1)).slice(-2)+'-'+('0'+(date.getDate())).slice(-2)

$endDate.min = dateInit // YY/MM/DD
    const SECOND = 1000
    const MINUTE = SECOND * 60
    const HOUR = MINUTE * 60
    const DAY = HOUR * 24
    var timer 
 
  //principio de clase que realiza el conteo 
class countDownTime{
  
  constructor(date){ 
    this.end = new Date(date+' 00:00:00')
    console.log(this.end)
  }

  metodo(){   
    var now = new Date();
    var  distance = this.end.getTime() - now.getTime(); 
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
//fin de clase que realiza el conteo 



let count 

//metodo que cambia el label de la fecha 
function showTimer(){ 
  let retorno = count.metodo() 
  if(!retorno){
    clearInterval(timer)
    return
  }
  
  const {days, hours, minutes, seconds} = retorno
  

  
  $days_top.innerHTML = days
  $days_bottom.innerHTML = days 
  $hours_top.innerHTML = hours 
  $hours_bottom.innerHTML = hours
  $minutes_top.innerHTML = minutes
  $minutes_bottom.innerHTML = minutes
  $seconds_top.innerHTML = seconds
  $seconds_bottom.innerHTML =seconds
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
  $days_top.innerHTML ='0'
  $days_bottom.innerHTML ='0'
  $hours_top.innerHTML ='0'
  $hours_bottom.innerHTML ='0'
  $minutes_top.innerHTML ='0'
  $minutes_bottom.innerHTML ='0'
  $seconds_top.innerHTML ='0'
  $seconds_bottom.innerHTML ='0'
  
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










  