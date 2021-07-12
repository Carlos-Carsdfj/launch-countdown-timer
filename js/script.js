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
const $top_span_days = document.querySelector('#top-span-days')
const $bottom_span_days = document.querySelector('#bottom-span-days')
const $top_span_hours = document.querySelector('#top-span-hours')
const $bottom_span_hours = document.querySelector('#bottom-span-hours')
const $top_span_minutes = document.querySelector('#top-span-minutes')
const $bottom_span_minutes = document.querySelector('#bottom-span-minutes')
const $top_span_seconds = document.querySelector('#top-span-seconds')
const $bottom_span_seconds = document.querySelector('#bottom-span-seconds')

let count 

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



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//metodo que cambia el label de la fecha 
async function showTimer(){ 
  let retorno = count.metodo() 
  if(!retorno){
    clearInterval(timer)
    return
  }
  
  const {days, hours, minutes, seconds} = retorno
  

//Efecto al cambiar dias
  if($days_top.innerHTML != days ){ 
    $top_span_days.classList.add('top-box-shawdo-change')
    $days_top.innerHTML = ''
    await sleep(100)   
    $days_top.innerHTML = days
    $top_span_days.classList.add('top-span-change')
    $bottom_span_days.classList.add('bottom-box-shawdo-change')
    await sleep(100)
    $top_span_days.classList.remove('top-box-shawdo-change')
    $top_span_days.classList.remove('top-span-change')
    $bottom_span_days.classList.remove('bottom-box-shawdo-change')
    $days_bottom.innerHTML =''
    $bottom_span_days.classList.add('bottom-span-change')
    await sleep(100)
    $bottom_span_hours.classList.remove('bottom-span-change')
    $days_bottom.innerHTML = days
  }
//Efecto al cambiar horas
  if($hours_top.innerHTML != hours ){ 
    $top_span_hours.classList.add('top-box-shawdo-change')
    $hours_top.innerHTML = ''
    await sleep(100)   
    $hours_top.innerHTML = hours
    $top_span_hours.classList.add('top-span-change')
    $bottom_span_hours.classList.add('bottom-box-shawdo-change')
    await sleep(100)
    $top_span_hours.classList.remove('top-box-shawdo-change')
    $top_span_hours.classList.remove('top-span-change')
    $bottom_span_hours.classList.remove('bottom-box-shawdo-change')
    $hours_bottom.innerHTML =''
    $bottom_span_hours.classList.add('bottom-span-change')
    await sleep(100)
    $bottom_span_hours.classList.remove('bottom-span-change')
    $hours_bottom.innerHTML = hours
  }
//Efecto al cambiar minutos
  if($minutes_top.innerHTML != minutes ){ 
    $top_span_minutes.classList.add('top-box-shawdo-change')
    $minutes_top.innerHTML = ''
    await sleep(100)   
    $minutes_top.innerHTML = minutes
    $top_span_minutes.classList.add('top-span-change')
    $bottom_span_minutes.classList.add('bottom-box-shawdo-change')
    await sleep(100)
    $top_span_minutes.classList.remove('top-box-shawdo-change')
    $top_span_minutes.classList.remove('top-span-change')
    $bottom_span_minutes.classList.remove('bottom-box-shawdo-change')
    $minutes_bottom.innerHTML =''
    $bottom_span_minutes.classList.add('bottom-span-change')
    await sleep(100)
    $bottom_span_minutes.classList.remove('bottom-span-change')
    $minutes_bottom.innerHTML = minutes
  }
//Efecto al cambiar segundos
  if($seconds_top.innerHTML != seconds){ 
    $top_span_seconds.classList.add('top-box-shawdo-change')
    $seconds_top.innerHTML = ''
    await sleep(100)   
    $seconds_top.innerHTML = seconds
    $top_span_seconds.classList.add('top-span-change')
    $bottom_span_seconds.classList.add('bottom-box-shawdo-change')
    await sleep(100)
    $top_span_seconds.classList.remove('top-box-shawdo-change')
    $top_span_seconds.classList.remove('top-span-change')
    $bottom_span_seconds.classList.remove('bottom-box-shawdo-change')
    $seconds_bottom.innerHTML =''
    $bottom_span_seconds.classList.add('bottom-span-change')
    await sleep(100)
    $bottom_span_seconds.classList.remove('bottom-span-change')
    $seconds_bottom.innerHTML = seconds
  }
  
  $days_top.innerHTML = days

  $days_bottom.innerHTML = days


  
 
  
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










  