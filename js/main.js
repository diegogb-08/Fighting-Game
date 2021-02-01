let audio = document.getElementById('audio');
let count = 0;

const playPause = () => {
    if(count == 0) {
        count = 1;
        audio.play();
    }else{
        count = 0;
        audio.pause();
    }
};

// const playPause = () => {
//     if(audio.paused) {
//         audio.pause();
//     }else{
//         audio.play();
//     };
// };