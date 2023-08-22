console.log("Welcome to Spotify"); 
//Initialising variables
let songIndex=0;
let audioElement=new Audio('Spotify/Butterfly.mp3');
let MasterPlay=document.getElementById('MasterPlay');
let MyProgressBar=document.getElementById('MyProgressBar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"Butterfly",filePath:"Spotify/1.mp3",coverPath:"1.png"},
    {songName:"Other Side",filePath:"Spotify/2.mp3",coverPath:"2.jpeg"},
    {songName:"Long Nights",filePath:"Spotify/3.mp3",coverPath:"3.png"},
    {songName:"Under The Same Sky",filePath:"Spotify/4.mp3",coverPath:"4.png"},
    {songName:"Flashback",filePath:"Spotify/5.mp3",coverPath:"5.png"},
    {songName:"No S leep Till Tokyo",filePath:"Spotify/6.mp3",coverPath:"6.png"},
]
songitems.forEach((element, i) => { 
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

//handle play pause click
MasterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement>=0){
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause(); 
        MasterPlay.classList.remove('fa-pause-circle');
        MasterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//Listen To Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    MyProgressBar.value=progress;
})
MyProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=MyProgressBar.value*audioElement.duration/100; 
})
