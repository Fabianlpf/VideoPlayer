const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)

function handlePlay(){
    $video.play()
    $play.hidden =  true
    $pause.hidden = false
    console.log('Le diste click al botón play');
    }
function handlePause(){
     $video.pause()
     $pause.hidden = true
     $play.hidden =  false
     console.log('Le diste click al botón pausa');
}

$backward.addEventListener('click',handleBackward)

function handleBackward(){
    $video.currentTime = $video.currentTime - 10         
    console.log ('Atras 10 seg', $video.currentTime)
}

$forward.addEventListener('click',handleForward)

function handleForward(){
    $video.currentTime = $video.currentTime + 10         
    console.log ('Delante 10 seg', $video.currentTime)
}

const $progess = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)


function handleLoaded (){
    $progess.max = $video.duration
    console.log ('Ha cargado el video', $video.duration)
}

function handleTimeUpdate () {
    $progess.value = $video.currentTime
    // console.log ('Tiempo aCtual', $video.currentTime)
}

$progess.addEventListener('input', handleInput)

function handleInput (){
    $video.currentTime = $progess.value
    console.log($progess.value)
}