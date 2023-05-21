console.log("Welcome to Spotify")

// intialize the variables
let songIndex =  0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterPlay'); 
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItems'));
let songs = [
    {songName: "Warriyo Mortals - (Feat Laura Breham)", FilePath: "songs/1.mp3", coverPath: "covers/2.jpg"},
    {songName: "Bandish - Talha Yunus", FilePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEF - Invincible", FilePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different heaven & EH!de ", FilePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji Heroes - Tonight Feat", FilePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Arzuu - Hassan Raheem", FilePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Charlie Puth - light Switch", FilePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Toxic - Ap Dhillon", FilePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Coolio - Gangste Paradise", FilePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Salam-E-Ishq", FilePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    
]

songItems.forEach((element, i)=>{   
element.getElementsByClassName("songName")[0].innerText = songs[i].songName
});

// audioelement.play();

// handle play/pause click

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterplay.classList.remove('fa-circle-play')
         masterplay.classList.add('fa-pause-circle')
         gif.style.opacity = 1;
     }
     else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle')
        masterplay.classList.add('fa-circle-play')
        gif.style.opacity = 0;

     }
})

// listen to events
audioElement.addEventListener('timeupdate', ()=>{

    // Update Seekbar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-play')
        element.classList.add('fa-pause-circle');
        
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
 element.addEventListener('click', (e)=>{
 console.log(e.target)
 makeAllPlays();
 songIndex = parseInt(e.target.id);
 e.target.classList.remove('fa-play-circle');
 e.target.classList.add('fa-pause-circle');
 audioElement.src = `songs/${songIndex}.mp3`
 audioElement.currentTime = 0;
 audioElement.play();
 masterplay.classList.remove('fa-play-circle')
 masterplay.classList.add('fa-pause-play')
 })
})
document.getElementById('next').addEventListener('click', () =>{
    if (songIndex>9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-play')
})

document.getElementById('previous').addEventListener('click', () =>{
    if (songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-play')
})