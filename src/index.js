import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/singing-bell.jpg';
import '@/assets/bell1.ogg';
import '@/assets/bell1.mp3';
import '@/assets/style.css';

const ringOne = () => {
  const audio = new Audio('/bell1.ogg');
  audio.play();
}


$('#ringOne').on('click', ringOne);

$(document).on('keypress', (e) => {
  if(e.which === 49) { // 1
    ringOne();
  }
})
