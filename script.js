var arr= [
    {songName: "Jale 2", url:"./songs/jale 2.mp3", img:"./images/download.jpeg"},
    {songName: "Pehle Bhi main", url:"./songs/Pehle Bhi Main.mp3", img:"./images/animal.jpg"},
    {songName: "Ram Siya Ram", url:"./songs/Ram Siya Ram.mp3", img:"./images/ramSiyaRam.jpeg"},
    {songName: "Arjan Valley", url:"./songs/Arjan Vailly.mp3", img:"./images/download.jpeg"}
]

 var allsongs=document.querySelector("#all-songs")
var poster = document.querySelector("#left")

var play = document.querySelector("#play")
var backward = document.querySelector("#backward ")
var forward = document.querySelector("#forward")

var audio = new Audio()

var selectedSong=0

 function mainFunction(){
    var clutter =""

    arr.forEach(function (elem,indx){
        clutter += `<div class="song-card" id=${indx}>
                        <div class="part1">
                            <img src=${elem.img} alt="">
                            <h2>${elem.songName}</h2>
                        </div>
                        <h6>3:56</h6>
                    </div>`
    })
   
    allsongs.innerHTML = clutter
    audio.src= arr[selectedSong].url 
    
    poster.style.backgroundImage =`url(${arr[selectedSong].img})`
 }

 mainFunction()

allsongs.addEventListener("click",function(dets){
   selectedSong=dets.target.id
   mainFunction()
     play.innerHTML=`<i class="ri-pause-mini-fill"></i>`
     flag = 1
   audio.play()
})

var flag = 0
play.addEventListener("click", function(){
    if(flag == 0){
    play.innerHTML=`<i class="ri-pause-mini-fill"></i>`
    mainFunction()
    audio.play()
    flag = 1
    }
    else{
        play.innerHTML=`<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function(){
    if(selectedSong <arr.length-1){
        selectedSong++
        mainFunction()
        audio.play()  
      }else{
        forward.style.opacity = 0.4
      }
})

backward.addEventListener("click", function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunction()
        audio.play()  
      }else{
        backward.style.opacity = 0.4
      }
})