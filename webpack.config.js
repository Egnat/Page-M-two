//Сейчас команда запуска проекта npm run start или npm start, убрал со скрипта в джейсоне --open, автоматом в браузере не открывается
//Код работы в вебпак при запуске команды npm run start-dev, npx webpack --watch и npm run build тоже работает. Стили и штмл, и джс работают, фотки с нета работают, фотки и видео с компа пока не выводится на экран
//Если в джейсоне так "start": "webpack-dev-server --open", то запуск npm run start и автоматически открывается в браузере.
//Если в джейсоне в скрипте так "start -dev": "webpack-dev-server", то запуск так npm run start-dev и в браузере автоматом не открывает

const path = require('path'); // подключаем встроенный модуль path Node.JS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //npm i -D html-webpack-plugin i -D это сокращённо install --save-dev
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//когда подключаю этот плагин, то на экран не выводится контент проекта, а каки-то записи, нужно пересохранить мэйн.джс и мэйн.цсс в дист, или где-то указать "devtool:false", думаю в скрипте джейсона
//const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');//он тут не нужен
//const TerserWebpackPlugin = require('terser-webpack-plugin');//он тут не нужен
//const fs = require('fs');//это встроенный модуль в node.js, можно использовать внутри приложения, в конфиге прописал ему фалс "browser": {"fs": false},
//const crypto = require('crypto');//@Variable crypto — это встроенный модуль в node.js, в конфиге прописал ему фалс "browser": {"crypto": false},
//const FileLoader = require('file-loader');// не нужен в вебпаке 5 это в 4-ом

module.exports = {
   entry: './src/index.js', //можно так писать /*path.join(__dirname, 'src', 'index.js')*/,//а можно так
   mode: "development",
   output: {
        filename: '[name].main.js',///*main*/  .[chunkhash] поставить перед мэйн, если будет нужно. [name] можно убрать и написать main.[chunkhash].js
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'src/images/[name].[ext]'/*'images/[hash][ext][query]'*/,// можно писать и так и так, ошибки нет. assetModuleFilename замена файлнэйма из вебпак 4, но нужно прописать под тестом где перечисляю расширения фото  type: 'asset/resource' вместо file-loader,
        clean: true,
    }, 
    //resolve: { fallback: {"crypto": false, "fs": false} },//взял с нета
    //resolve: {
      //fallback: {"crypto": false},//"crypto": false, "fs": false, взял с нета если будет ошибка cannot resolve. когда включил, сразу два, то написало, что обнаружены большие файлы, возможно я хочу попробовать [webpack-dev-middleware] wait until bundle finished: /
      //extensions: ['.js', '.json', '.png', '.jpg', 'mp4', 'mov', '3gp'],//взял у Владлена
      //alias: {
       //'@models': path.resolve(__dirname, 'src/models'),//взял у Владлена написало, что обнаружены большие файлы, возможно я хочу попробовать [webpack-dev-middleware] wait until bundle finished: /
       //'@': path.resolve(__dirname, 'src'),//взял у Владлена  
      //}
    //},
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        title: 'Page',
        template: "./index.html"}),
      new CleanWebpackPlugin(), 
      //new FileLoader()
      //new CssMinimizerWebpackPlugin(),
      //new TerserWebpackPlugin()
    ], 
    devtool: 'inline-source-map', //нужно указать если есть плагин CleanWebpackPlugin
    devServer: {
      static: {
      directory: path.join(__dirname, "./dist")},/*можно так писать*/
       /*port: 8080 //3000,*/ //можно так, только убрать статик и директорию
       //hot: true/*для работы с реактом*/
    },
    optimization: {
      minimizer: [
       "...",
       new ImageMinimizerPlugin({
          minimizer: {
           implementation: ImageMinimizerPlugin.imageminMinify,// with net
            options: {
             plugins: [
               ['gifsicle', { interlaced: true }],
               ['jpegtran', { progressive: true }],
               ['optijpg', { optimizationLevel: 5 }],//optipng изначально было
               ['svgo', { name: 'preset-default' }],
             ],
           },
         },
       }),
     ],
   },
   // не нужен при запуске команды npm run start-dev, прописал, чтоб было, от фанаря
   /*optimization: {
     minimize: true,
     minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()] 
   },*/
   module: {
     rules: [
       { //здесь записываем в один большой объект данные и убираю скобки.....
       //{
         test: /\.(gif|png|jpg|jpeg|svg)$/i, //из видео youtub. расширение фото и видео
         type: 'asset/resource',
       //},

       //{
         test: /\.(mp4|mov|3gp)$/i, //видео
         type: 'asset/resource',
       //},

       //{
         test: /\.(eot|ttf|woff|woff2)$/i, //из видео youtub. расширения шрифтов
         type: 'asset/resource',
       //},

       //{
         test: /\.css$/i,
         use: [
           {
            loader: MiniCssExtractPlugin.loader, 
            options: {esModule: true,}
           }, 'css-loader'], 
       //},  

       /*{
          test: /\.js$/ ,
          exclude: "/node_modulse/",
          //use: "eslint-loader" 
       },*/

       /*{
          test: /\.tsx?$/,
          use: 'ts-loader', этот плагин не загружен
          exclude: /node_modules/,
       },*/

       /*{
          test: /\.pug$/,  
        //use: "pug-loader", если делать как в видео, стили в гугл выводятся, текст со своими стилями нет, терминал ошибки не выдает
          use: [
           {
            loader: 'pug-loader', этот плагин не загружен
            options: {
               minimize: true,
            },
           },
          ],
        }*/
       },  //...возле каждого теста
     ],
   },
};



//Это код разработки проекта в вебпак, вводя команду npx webpack --watch, devServer: здесь не нужен. Всё работает и css, и js. Это упрощённый рабочий код, даже при добавлении дэв серв, но фотки и видео с компа нене откроются при загрузке через нпм ран старт-дэв. А так команды и вотч, и билд работают хорошо
/*const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //npm i -D html-webpack-plugin i -D это сокращённо install --save-dev
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');// это для вебпак 5
//const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');// это для вэбпак 4
//const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
   entry: './src/index.js',
   mode: "development",
   output: {
        filename: 'main.js'
    }, 
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin(),
      new TerserWebpackPlugin(),
      new CssMinimizerWebpackPlugin()
    ],  
    /*devServer: {
       //contentBase: "./dist",
       port: 8080/*3000,*,
        hot: true/*для работы с реактом*
       /*stats: { 
        children: false,
        maxModules: 0
       }
     },*
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
           test: /\.css$/ 
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