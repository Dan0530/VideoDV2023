const $video = document.querySelector('#video') // CONTENEDOR PARA EL VIDEO, VARIABLE CONST - $ PARA HTML//
const $play = document.querySelector('#play') 
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click',handleplay) 
$pause.addEventListener('click',handlepause) 

//evento=el boton de play suene la escucha de un evento//
function handleplay() {  //obedecer cuando se escuche el evento, funcion declarada con handleplay//
    $video.play() //. accedo a las propiedades - activar el video () metodo empujar//
    $play.hidden = true //aparece boton y desaparece 1.//
    $pause.hidden = false
    console.log('le diste click al boton de play')
    
}    

function handlepause() {  //obedecer cuando se escuche el evento, funcion declarada con handleplay//
    $video.pause() //. accedo a las propiedades - activar el video//
    $play.hidden = false //aparece boton y desaparece 1.//
    $pause.hidden = true
    console.log('le diste click al boton de pausa')

   
}

$forward. addEventListener ('click',handleforward) //EVENTOS DE CLICK//

function handleforward () {    //$video.currentTime donde esta en milisegunso donde esta el video//
   $video.currentTime +=  10 //suma + 10 seg//
    console.log ('para adelante 10 seg', $video.currentTime)
}


$backward. addEventListener ('click',handlebackward) //EVENTOS DE CLICK//

function handlebackward () {    //$video.currentTime donde esta en milisegunso donde esta el video//
   $video.currentTime -= 10 //suma + 10 seg//
    console.log ('para adelante 10 seg', $video.currentTime)
}


//$backward. addEventListener ('click',handlebackward) //EVENTOS DE CLICK//

//$video.currentTime = $video.currentTime - 10
//function handlebackward () {22
    //console.log ('para atras 10 seg', $video.currentTime) //  
const $progress = document.querySelector ('#progress') //declara variable//
$video.addEventListener('loadedmetadata',handleLoaded) 
$video.addEventListener('timeupdate',handletimeupdate) 

function handleLoaded() { //si esta funciona ocurre, entonces//
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration ) //$video.duration 211.8//

}

function handletimeupdate(){
    $progress.value = $video.currentTime //avanza barrita video//
    //console.log('holi', $video.currentTime)//

}
$progress.addEventListener('input', handleinput)

    function handleinput(){
        $video.currentTime = progress.value //respeta la barrita el lugar al click//
        console.log($progress.value) //avanza con puntero//

    }
