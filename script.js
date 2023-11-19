console.log("Welcome to Spotify"); 
//Initialising variables
// let songIndex=0;
let index=0;
let audioElement=new Audio('Songs/1.mp3');
let MasterPlay=document.getElementById('MasterPlay');
let MyProgressBar=document.getElementById('MyProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[ 
    {songName:"Butterfly",filePath:"Songs/1.mp3",coverPath:"Covers/1.png"},
    {songName:"Other Side",filePath:"Songs/2.mp3",coverPath:"Covers/2.png"},
    {songName:"Long Nights",filePath:"Songs/3.mp3",coverPath:"Covers/3.png"},
    {songName:"Under The Same Sky",filePath:"Songs/4.mp3",coverPath:"Covers/4.png"},
    {songName:"Flashback",filePath:"Songs/5.mp3",coverPath:"Covers/5.png"},
    {songName:"No Sleep Till Tokyo",filePath:"Songs/6.mp3",coverPath:"Covers/6.png"},
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
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('songitemplay')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[index].filePath;
        masterSongName.innerText= songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
    });
});
document.getElementById('next').addEventListener('click', ()=>{
    if(index>=5){
        index = 0;
    }
    else{
        index+=1;
    }
    audioElement.src = songs[index].filePath;
    masterSongName.innerText= songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
}
)
document.getElementById('previous').addEventListener('click', ()=>{
    if(index<=0){
        index = 0;
    }
    else{
        index-=1;
    }
    audioElement.src = songs[index].filePath;
    masterSongName.innerText= songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
}
)
