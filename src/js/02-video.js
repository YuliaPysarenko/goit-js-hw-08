
        const iframe = document.querySelector('iframe');
        const player = new Vimeo.Player(iframe);

        player.on('play', function () {
          console.log('played the video!');
        });

        player.getVideoTitle().then(function (title) {
          console.log('title:', title);
        });
       
const onPlay = function(data) {
    timeupdate({
    duration: 61.857,
    percent: 0.049,
    seconds: 3.034,
      }) 
     // data is an object containing properties specific to that event
};

player.on('play', onPlay);


// setCurrentTime(seconds: number): Promise<number, (RangeError|Error)>
// Set the current playback position in seconds. Once playback has started, if the player was paused, it will remain paused. Likewise, if the player was playing, it will resume playing once the video has buffered. Setting the current time before playback has started will cause playback to start.

// You can provide an accurate time and the player will attempt to seek to as close to that time as possible. The exact time will be the fulfilled value of the promise.

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });