import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/bell-audio/bell1.ogg';
import '@/assets/bell-audio/bell1.mp3';
import '@/assets/bell-audio/449952-singing-bowl-female.ogg';
import '@/assets/bell-audio/449952-singing-bowl-female.mp3';
import '@/assets/bell-audio/169289-singing-bowl-monkay.ogg';
import '@/assets/bell-audio/169289-singing-bowl-monkay.mp3';
import '@/assets/bell-img/singing-bell.jpg';
import '@/assets/bell-img/bowl-3.jpg';
import '@/assets/bell-img/bowl4.jpg';
import '@/assets/style.css';
import 'mvp.css';
import { Howl } from 'howler';

const bellAudios = [
  '@/assets/4bell-audio/49952-singing-bowl-female.ogg',
  '@/assets/bell-audio/169289-singing-bowl-monkay.ogg',
  '@/assets/bell-audio/bell1.ogg'
];

bellAudios.forEach((a) => {
  
})

const ringOne = () => {
  let audio = new Howl({
    src: ['/bell1.ogg', '/bell.mp3'],
    preload: true
  });
  audio.play();
}

const ringTwo = () => {
  let audio = new Howl({
    src: ['/449952-singing-bowl-female.ogg', '/449952-singing-bowl-female.mp3'],
    preload: true
  });
  audio.play();
}

const ringThree = () => {
  let audio = new Howl({
    src: ['/169289-singing-bowl-monkay.ogg', '/169289-singing-bowl-monkay.mp3'],
    preload: true
  });
  audio.play();
}


$('#ringOne').on('click', ringOne);
$('#ringTwo').on('click', ringTwo);
$('#ringThree').on('click', ringThree);

$(document).on('keypress', (e) => {
  if(e.which === 49) { // 1
    ringOne();
  }
  else if (e.which === 50) { // 2
    ringTwo();
  }
  else if (e.which === 51) { // 3
    ringThree();
  }
})
