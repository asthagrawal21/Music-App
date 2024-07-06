let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playPause = document.getElementById("play-pause");
let actionIcon = document.getElementById("action");
song.addEventListener("loadedmetadata", ()=>{
    progress.max = song.duration;
    progress.value = song.currentTime;
});

playPause.addEventListener("click", ()=>{
    if (actionIcon.classList.contains("fa-play")){
        song.play();
        actionIcon.classList.remove("fa-play");
        actionIcon.classList.add("fa-pause");
    } else {
        song.pause();
        actionIcon.classList.remove("fa-pause");
        actionIcon.classList.add("fa-play");
    }
});
song.onplaying = function() {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
};
progress.addEventListener("change", ()=>{
    song.play();
    song.currentTime = progress.value;
    actionIcon.classList.remove("fa-play");
    actionIcon.classList.add("fa-pause");
});



























// console.log("Welcome To Spotify");

// //Initialize the variables
// let songIndex=0;
// let audioElement = new Audio('Kahani-Suno-Zubani-Suno(PaglaSongs).mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar= document.getElementById('myProgressBar');

// let songs=[
//     {songName:"Kahani Suno 2.0" ,filePath:"Kahani-Suno-Zubani-Suno(PaglaSongs).mp3" ,coverPath:"kahanisunocover.jpg"},
//     {songName:"Ishq-Tera" ,filePath:"Ishq-Tera-(Guru-Randhawa)---Dj-Prashant(PaglaSongs).mp3" ,coverPath:"ishqteracover.jpg"},
//     {songName:"Subhanallah" ,filePath:"Ek-Din-Kabhi-Jo-Khud-Ko-Tarashe(PaglaSongs).mp3" ,coverPath:"subhanallahcover.jpg"},
//     {songName:"Tu Hai Kahan" ,filePath:"Tu-Hai-Kahan(PaglaSongs).mp3" ,coverPath:"tuhaikahancover.jpg"},
// ]

// // audioElement.play();

// //Handle Play/Pause
// masterPlay.addEventListener('click' ,()=>{
//     if(audioElement.paused || audioElement.currentTime <=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-regular fa-circle-play');
//         masterPlay.classList.add('fa-solid fa-circle-pause');
//     }else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-solid fa-circle-pause');
//         masterPlay.classList.add('fa-regular fa-circle-play');

//     }
// })
// //Listen to event
// audioElement.addEventListener('timeupdate' ,()=>{
//    console.log('timeupdate');
//    //update seekBar
//    progress= parseInt((audioElement.currentTime/audioElement.duration)* 100);
//    console.log('progress');
// })
