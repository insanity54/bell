import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/singing-bell.jpg';
import '@/assets/bell1.ogg';
import '@/assets/449952-singing-bowl-female.ogg';
import '@/assets/bowl-3.jpg';
import '@/assets/169289-singing-bowl-monkay.ogg';
import '@/assets/bowl4.jpg';
import '@/assets/style.css';


const ringOne = () => {
  const audio = new Audio('/bell1.ogg');
  audio.play();
}


const ringTwo = () => {
  const audio = new Audio('/449952-singing-bowl-female.ogg');
  audio.play();
}

const ringThree = () => {
  const audio = new Audio('/169289-singing-bowl-monkay.ogg');
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
