import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


let currentTime;
const onPlay = function (data) {
    currentTime = data.seconds;
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(currentTime)
    );
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        
        break;
    }
  });


  
