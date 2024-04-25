console.log("Welcome to Spotify")

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItems'))

let songs = [
    { songName: "Salam", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Brahman", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Pandit", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Sharma", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Bhardwaj", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Atul", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Nitiket", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Ravinder", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
]
songItems.forEach((element)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.src='pause2.png';
        // masterPlay.src='play2.png'
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.src='play2.png';
        // masterPlay.src='play2.png'
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);

    myProgressbar.value = progress;
})
myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        // element.classList.remove('pause2.png.png')
        element.src='hand.png';
        // element.src='play2.png'
    })
 }

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
console.log(e.target);
makeAllPlays();
songIndex = parseInt(e.target.id);
e.target.src='hand.png'
// e.target.src='play2.png'
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName; 
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity = 1;
masterPlay.src='hand.png';
// masterPlay.src='play2.png'
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8)[
        songIndex = 0
    ]
    else{
    songIndex += 1;
}
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.src='hand.png';
masterPlay.src='play2.png'
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)[
        songIndex = 0
    ]
    else{
    songIndex -= 1;
}
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.src='hand.png';
// masterPlay.src='play2.png'
})