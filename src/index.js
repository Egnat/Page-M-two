import "./css/styles.css";
import "./images/Marik.jpg";
import "./videos/IMG_50791.mov";

/*import mainImage from './src/images/Marik.jpg';
img.src = mainImage; // '/dist/151cfcfa1bd74779aadb.png'*/
//import img from './src/images/Marik.jpg';//INET /*file*/

//import Flickity from 'flickity';
//import 'flickity/dist/flickity.min.css';
//const flickity = new Flickity('.slides');


var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,10000);

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
  slideInterval = setInterval(nextSlide,10000);
}

pauseButton.onclick = function(){
  if(playing){ pauseSlideshow(); }
  else{ playSlideshow(); }
};

//Смена цвета у слов // массив цветов
//Функции и переменные не должно называться одинаково для использования двух или ольше элементов
let colorNames = ["blue", "cyan", "red", "gold", "green", "yellow", "#10ff00"];

// функция поиска random-числа
const random = (min, max) => {
  max = colorNames.length - 1;
  const rand = min + Math.round(Math.random() * (max - min));
  return rand;
};

// найти элементы для изменения свойств
let paragraphs = document.getElementsByClassName("h1");

// менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
setInterval(() => {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = colorNames[random(0)];
  }
}, 3000);
console.log(colorNames);

//Смена цвета у слов // массив цветов
//Функции и переменные не должно называться одинаково для использования двух или ольше элементов
let colorNamess = ["blue", "cyan", "red", "gold", "green", "yellow", "orange"];

// функция поиска random-числа
const randome = (min, max) => {
  max = colorNamess.length - 1;
  const rande = min + Math.round(Math.random() * (max - min));
  return rande;
};

// найти элементы для изменения свойств
let paragraphss = document.getElementsByClassName("letters");/*если поставить вместо letters text-footer, то все буквы будет мигать одинаково*/

// менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
setInterval(() => {
  for (let i = 0; i < paragraphss.length; i++) {
    paragraphss[i].style.color = colorNamess[random(0)];
  }
}, 3000);
console.log(colorNamess);

//добавляем артикль над дивом и заставляем моргать
//<div class="array">П А Н Д О Р И У М</div> так в штмл

/*const div = document.querySelector('.array'); //находим элемент, над которым созаём артикль
const article = document.querySelector('.text');

function get (arr) {
  return arr.join(" * ");
}

const arr = ["П", "Р", "И", "В", "Е", "Т"]; // создаём массив

document.write/*body.textContent=*(get(arr));
document.querySelector(".array").insertAdjacentHTML("beforebegin", 
`<article class="text"> ${get(arr)} </article>`);//создаём над дивом артикль
const textBeforDiv = document.querySelector('.text');//записываем артикль в переменную

function blink() {
  const article = document.querySelector('.text');
  if (article.style.visibility == "hidden") {
    article.style.visibility = "visible";
    article.style.fontSize = "20px";
     article.style.color = "brown";
  } else {
    article.style.visibility = "hidden";
  }
} 
const time = setInterval(() => {
  const resultLoop =  blink();
  if (resultLoop === true) { // если элемент найден
    clearInterval(time); // остановить setInterval
  }
}, 2000);*/