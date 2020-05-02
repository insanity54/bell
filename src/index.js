import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/singing-bell.jpg';
import '@/assets/bell1.ogg';
import '@/assets/bell1.mp3';


$('#ringOne').on('click', () => {
  // <audio>
  //    <source src="bell1.ogg" type="audio/ogg">
  //    <source src="bell1.mp3" type="audio/mpeg">
  //   Your browser does not support the audio element. <a href="https://browsehappy.com/">https://browsehappy.com/</a>
  // </audio>
  let audio = new Audio('/bell1.ogg');
  audio.play();
})
