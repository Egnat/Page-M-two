import "./css/styles.css";
//import "./images/Marik.jpg";
//import "./videos/IMG_5079.mov";

//import Image from './src/images/Marik.jpg';
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

//CONFIG.JS

//Сейчас команда запуска проекта npm run start или npm start, убрал со скрипта в джейсоне --open, автоматом в браузере не открывается
//Код работы в вебпак при запуске команды npm run start-dev, npx webpack --watch и npm run build тоже работает. Стили и штмл, и джс работают, фотки с нета работают, фотки и видео с компа пока не выводится на экран
//Если в джейсоне так "start": "webpack-dev-server --open", то запуск npm run start и автоматически открывается в браузере.
//Если в джейсоне в скрипте так "start -dev": "webpack-dev-server", то запуск так npm run start-dev и в браузере автоматом не открывает
/*const path = require('path'); // подключаем встроенный модуль path Node.JS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //npm i -D html-webpack-plugin i -D это сокращённо install --save-dev
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//когда подключаю этот плагин, то на экран не выводится контент проекта, а каки-то записи, нужно пересохранить мэйн.джс и мэйн.цсс в дист, или где-то указать "devtool:false", думаю в скрипте джейсона
//const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');//он тут не нужен
//const TerserWebpackPlugin = require('terser-webpack-plugin');//он тут не нужен
//const fs = require('fs');//это встроенный модуль в node.js, можно использовать внутри приложения, в конфиге прописал ему фалс
//const crypto = require('crypto');//@Variable crypto— это встроенный модуль в node.js, в конфиге прописал ему фалс
//const FileLoader = require('file-loader');// не нужен в вебпаке 5 это в 4-ом

module.exports = {
   entry: /*'./src/index.js', //можно так писать* path.join(__dirname, 'src', 'index.js'), //а можно так
   mode: "development",
   output: {
     filename: '[name].main.js',///*main*  .[chunkhash] поставить перед мэйн, если будет нужно. [name] можно убрать и написать main.[chunkhash].js
     path: path.resolve(__dirname, 'dist'),
     assetModuleFilename: 'images/[name].[ext]'/*'images/[hash][ext][query]'*,// можно писать и так и так, ошибки нет. assetModuleFilename замена файлнэйма из вебпак 4, но нужно прописать под тестом где перечисляю расширения фото  type: 'asset/resource' вместо file-loader,
     clean: true,
   }, 
    //resolve: { fallback: {"crypto": false, "fs": false} }, //взял с нета
   resolve: {
     fallback: {"crypto": false},//"crypto": false, "fs": false, взял с нета если будет ошибка cannot resolve. когда включил, сразу два, то написало, что обнаружены большие файлы, возможно я хочу попробовать [webpack-dev-middleware] wait until bundle finished: /
     extensions: ['.js', '.json', '.png', '.jpg'], //взял у Владлена
     alias: {
       aliasName: path.resolve(__dirname, "src/images"), //взял у Владлена написало, что обнаружены большие файлы, возможно я хочу попробовать [webpack-dev-middleware] wait until bundle finished: /
       alias_js_1: path.join(__dirname, 'src/js'), //взял в нете 
     }
   },
   plugins: [
     new MiniCssExtractPlugin(),
     new HtmlWebpackPlugin({
       template: "src/index.html",
       filename: "index.html",
       title: 'Page', 
     }),
     new CleanWebpackPlugin(), 
      //new CssMinimizerWebpackPlugin(),
      //new TerserWebpackPlugin()
  ], 
  watchOptions: {
    poll: true
  },
  devtool: 'inline-source-map', //нужно указать если есть плагин CleanWebpackPlugin
    devServer: {
      static: {
        directory: path.join(__dirname, "./dist")
      }, /*можно так писать*/
       /*port: 8080 //3000,* //можно так, только убрать статик и директорию
       //hot: true/*для работы с реактом*
    },
    optimization: {
      minimizer: [
       "...",
       new ImageMinimizerPlugin({
          minimizer: {
           implementation: ImageMinimizerPlugin.imageminMinify, // with net
            options: {
             plugins: [
               ['gifsicle', { interlaced: true }],
               ['jpegtran', { progressive: true }],
               ['optijpg', { optimizationLevel: 5 }], //optipng изначально было
               ['svgo', { name: 'preset-default' }],
             ],
           },
         },
       }),
     ],
   },
   module: {
     rules: [
     //{ здесь записываем в один большой объект данные и убираю скобки.....
       {
         test: /\.(gif|png|jpg|jpeg|svg)$/i, //из видео youtub. расширение фото и видео
         type: 'asset/resource',
       },

       {
         test: /\.(mp4|mov|3gp)$/i, //видео
         type: 'asset/resource',
       },

       {
         test: /\.(eot|ttf|woff|woff2)$/i, //из видео youtub. расширения шрифтов
         type: 'asset/resource',
       },

       {
         test: /\.css$/i,
         use: [
           {
            loader: MiniCssExtractPlugin.loader, 
            options: {esModule: true,}
           }, 'css-loader'
         ], 
       },  
       //},  ...возле каждого теста
     ],
   },
};*/



//Это код разработки проекта в вебпак, вводя команду npx webpack --watch, devServer: здесь не нужен. Всё работает и css, и js. Это упрощённый рабочий код, даже при добавлении дэв серв, но фотки и видео с компа нене откроются при загрузке через нпм ран старт-дэв. А так команды и вотч, и билд работают хорошо
/*const path = require('path');//заработал скрипт через нпм старт, через нпх пока нет
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //npm i -D html-webpack-plugin i -D это сокращённо install --save-dev
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');// это для вебпак 5
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');// это для вэбпак 4


module.exports = {
   entry: './src/index.js', 
   mode: "development",
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'), //заработал скрипт через нпм старт, когда отключил 
      clean: true,//заработал скрипт через нпм старт, когда отключил
    }, 
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "src/index.html", //webpack takes ./src/index.html в качестве входного файла
        filename: 'index.html', // webpack обрабатывает приведенный выше шаблон ввода и должен выводиться в index.html
        title: 'Page'
      }),
      new TerserWebpackPlugin(),
      new CssMinimizerWebpackPlugin(),
      new CleanWebpackPlugin(), 
    ], 
    watchOptions: {
      poll: true
    },
    devServer: {
       //contentBase: "./dist",
       port: 8080/*3000,*,
        hot: true/*для работы с реактом*/
       /*stats: { 
        children: false,
        maxModules: 0
       }*
     },
    optimization: {
       minimize: true,
       minimizer: [new TerserWebpackPlugin(), new CssMinimizerWebpackPlugin()] // не нужен при запуске команды npm run start-dev
    },
    module: {
      rules: [
        {
         use: [
           {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            }
           }, 'css-loader'],
           test: /\.css$/ ,
        },
      ],
   },
};*/





/*plugins: [                         
     new MiniCssExtractPlugin(),
     new TerserWebpackPlugin(),
     new CssMinimizerWebpackPlugin(),
     //new OptimizeCssAssetsWebpackPlugin(),
     new HtmlWebpackPlugin(//{ можно здесь ничего не записывать 
      //template: "./src/index.html",// настройки Дарьи для дев сервера npx webpack-dev-server, npm run start-dev - вход в сервер
     // title: 'Development', //это из описания скилл - не работает
    //} выход из сервера и вебпака команда ctrl c
      /*{ 
//options: { если делать та, как в видео,
        template: "./src/index.pug",
        filename: "index.html"
// } стили в гугл выводятся, текст со своими стилями нет, терминал ошибки не выдает
      }*), 
    ],
    devServer: {
       //contentBase: "./dist", //из скилл - не работает
       port: 8080/*3000,*/
       /*stats: { инфа из модуля не работает
        children: false,
        maxModules: 0
       },*
       //hot: true, // это для реакта
    },
    optimization: {
       minimize: true,
       minimizer: [new TerserWebpackPlugin(), new CssMinimizerWebpackPlugin() /*, new OptimizeCssAssetsWebpackPlugin()*] 
    },


    {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            }
          },

           /*{
          test: /\.js$/ ,
          //exclude: "/node_modulse/",
          //use: "eslint-loader" 
        },
       /* {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },*/
      /*{
        test: /\.pug$/,  
//use: "pug-loader", если делать как в видео, стили в гугл выводятся, текст со своими стилями нет, терминал ошибки не выдает
        use: [
          {
            loader: 'pug-loader', 
            options: {
            minimize: true,
            },
          },
        ],
        }*/