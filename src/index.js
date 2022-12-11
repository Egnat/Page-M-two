import "./css/styles.css";
import "./images/IMG_2894.png";
import "./videos/KUSW6523.mp4";

/*import mainImage from './src/images/Marik.jpg';
img.src = mainImage; // '/dist/151cfcfa1bd74779aadb.png'*/
//import img from './src/images/Marik.jpg';//INET /*file*/

//import Flickity from 'flickity';
//import 'flickity/dist/flickity.min.css';
//const flickity = new Flickity('.slides');


var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,1000);

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow(){
  pauseButton.innerHTML = 'Pause';
  playing = true;
  slideInterval = setInterval(nextSlide,1000);
}

pauseButton.onclick = function(){
  if(playing){ pauseSlideshow(); }
  else{ playSlideshow(); }
};
