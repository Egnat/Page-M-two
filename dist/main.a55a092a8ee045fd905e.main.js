/*! For license information please see main.a55a092a8ee045fd905e.main.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/css/styles.css":(e,t,r)=>{r.r(t)},"./src/images/Marik.jpg":(e,t,r)=>{e.exports=r.p+"src/images/Marik..jpg"},"./src/videos/IMG_50791.mov":(e,t,r)=>{e.exports=r.p+"src/images/IMG_50791..mov"}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var l=t[s]={exports:{}};return e[s](l,l.exports,r),l.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})();var s={};(()=>{r.r(s);r("./src/css/styles.css"),r("./src/images/Marik.jpg"),r("./src/videos/IMG_50791.mov");var e=document.querySelectorAll("#slides .slide"),t=0,o=setInterval(l,1e4);function l(){e[t].className="slide",t=(t+1)%e.length,e[t].className="slide showing"}var n=!0,c=document.getElementById("pause");c.onclick=function(){n?(c.innerHTML="Play",n=!1,clearInterval(o)):(c.innerHTML="Pause",n=!0,o=setInterval(l,1e4))};let a=["blue","cyan","red","gold","green","yellow","#10ff00"];const i=(e,t)=>{t=a.length-1;return e+Math.round(Math.random()*(t-e))};let g=document.getElementsByClassName("h1");setInterval((()=>{for(let e=0;e<g.length;e++)g[e].style.color=a[i(0)]}),3e3),console.log(a);let u=["blue","cyan","red","gold","green","yellow","orange"];let p=document.getElementsByClassName("letters");setInterval((()=>{for(let e=0;e<p.length;e++)p[e].style.color=u[i(0)]}),3e3),console.log(u)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNTVhMDkyYThlZTA0NWZkOTA1ZS5tYWluLmpzIiwibWFwcGluZ3MiOiI7Z09BQ0lBLEVBQTJCLENBQUMsRUFHaEMsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYUUsUUFHckIsSUFBSUMsRUFBU04sRUFBeUJFLEdBQVksQ0FHakRHLFFBQVMsQ0FBQyxHQU9YLE9BSEFFLEVBQW9CTCxHQUFVSSxFQUFRQSxFQUFPRCxRQUFTSixHQUcvQ0ssRUFBT0QsT0FDZixDQ3RCQUosRUFBb0JPLEVBQUksV0FDdkIsR0FBMEIsaUJBQWZDLFdBQXlCLE9BQU9BLFdBQzNDLElBQ0MsT0FBT0MsTUFBUSxJQUFJQyxTQUFTLGNBQWIsRUFHaEIsQ0FGRSxNQUFPQyxHQUNSLEdBQXNCLGlCQUFYQyxPQUFxQixPQUFPQSxNQUN4QyxDQUNBLENBUHVCLEdDQ3hCWixFQUFvQmEsRUFBS1QsSUFDSCxvQkFBWFUsUUFBMEJBLE9BQU9DLGFBQzFDQyxPQUFPQyxlQUFlYixFQUFTVSxPQUFPQyxZQUFhLENBQUVHLE1BQU8sV0FFN0RGLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFYyxPQUFPLEdBQU8sUUNMOUQsSUFBSUMsRUFDQW5CLEVBQW9CTyxFQUFFYSxnQkFBZUQsRUFBWW5CLEVBQW9CTyxFQUFFYyxTQUFXLElBQ3RGLElBQUlDLEVBQVd0QixFQUFvQk8sRUFBRWUsU0FDckMsSUFBS0gsR0FBYUcsSUFDYkEsRUFBU0MsZ0JBQ1pKLEVBQVlHLEVBQVNDLGNBQWNDLE1BQy9CTCxHQUFXLENBQ2YsSUFBSU0sRUFBVUgsRUFBU0kscUJBQXFCLFVBQ3pDRCxFQUFRRSxTQUFRUixFQUFZTSxFQUFRQSxFQUFRRSxPQUFTLEdBQUdILElBQzVELENBSUQsSUFBS0wsRUFBVyxNQUFNLElBQUlTLE1BQU0seURBQ2hDVCxFQUFZQSxFQUFVVSxRQUFRLE9BQVEsSUFBSUEsUUFBUSxRQUFTLElBQUlBLFFBQVEsWUFBYSxLQUNwRjdCLEVBQW9COEIsRUFBSVgsc0hDRnBCWSxFQUFTVCxTQUFTVSxpQkFBaUIsa0JBQ25DQyxFQUFlLEVBQ2ZDLEVBQWdCQyxZQUFZQyxFQUFVLEtBRTFDLFNBQVNBLElBQ1BMLEVBQU9FLEdBQWNJLFVBQVksUUFDakNKLEdBQWdCQSxFQUFhLEdBQUdGLEVBQU9KLE9BQ3ZDSSxFQUFPRSxHQUFjSSxVQUFZLGVBQ25DLENBRUEsSUFBSUMsR0FBVSxFQUNWQyxFQUFjakIsU0FBU2tCLGVBQWUsU0FjMUNELEVBQVlFLFFBQVUsV0FDakJILEdBWkhDLEVBQVlHLFVBQVksT0FDeEJKLEdBQVUsRUFDVkssY0FBY1QsS0FJZEssRUFBWUcsVUFBWSxRQUN4QkosR0FBVSxFQUNWSixFQUFnQkMsWUFBWUMsRUFBVSxLQU14QyxFQUlBLElBQUlRLEVBQWEsQ0FBQyxPQUFRLE9BQVEsTUFBTyxPQUFRLFFBQVMsU0FBVSxXQUdwRSxNQUFNQyxFQUFTLENBQUNDLEVBQUtDLEtBQ25CQSxFQUFNSCxFQUFXakIsT0FBUyxFQUUxQixPQURhbUIsRUFBTUUsS0FBS0MsTUFBTUQsS0FBS0gsVUFBWUUsRUFBTUQsR0FDMUMsRUFJYixJQUFJSSxFQUFhNUIsU0FBUzZCLHVCQUF1QixNQUdqRGhCLGFBQVksS0FDVixJQUFLLElBQUlpQixFQUFJLEVBQUdBLEVBQUlGLEVBQVd2QixPQUFReUIsSUFDckNGLEVBQVdFLEdBQUdDLE1BQU1DLE1BQVFWLEVBQVdDLEVBQU8sR0FDaEQsR0FDQyxLQUNIVSxRQUFRQyxJQUFJWixHQUlaLElBQUlhLEVBQWMsQ0FBQyxPQUFRLE9BQVEsTUFBTyxPQUFRLFFBQVMsU0FBVSxVQVVyRSxJQUFJQyxFQUFjcEMsU0FBUzZCLHVCQUF1QixXQUdsRGhCLGFBQVksS0FDVixJQUFLLElBQUlpQixFQUFJLEVBQUdBLEVBQUlNLEVBQVkvQixPQUFReUIsSUFDdENNLEVBQVlOLEdBQUdDLE1BQU1DLE1BQVFHLEVBQVlaLEVBQU8sR0FDbEQsR0FDQyxLQUNIVSxRQUFRQyxJQUFJQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhZ2UtbS10d28vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFnZS1tLXR3by93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BhZ2UtbS10d28vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wYWdlLW0tdHdvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BhZ2UtbS10d28vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCBcIi4vaW1hZ2VzL01hcmlrLmpwZ1wiO1xyXG5pbXBvcnQgXCIuL3ZpZGVvcy9JTUdfNTA3OTEubW92XCI7XHJcblxyXG4vKmltcG9ydCBtYWluSW1hZ2UgZnJvbSAnLi9zcmMvaW1hZ2VzL01hcmlrLmpwZyc7XHJcbmltZy5zcmMgPSBtYWluSW1hZ2U7IC8vICcvZGlzdC8xNTFjZmNmYTFiZDc0Nzc5YWFkYi5wbmcnKi9cclxuLy9pbXBvcnQgaW1nIGZyb20gJy4vc3JjL2ltYWdlcy9NYXJpay5qcGcnOy8vSU5FVCAvKmZpbGUqL1xyXG5cclxuLy9pbXBvcnQgRmxpY2tpdHkgZnJvbSAnZmxpY2tpdHknO1xyXG4vL2ltcG9ydCAnZmxpY2tpdHkvZGlzdC9mbGlja2l0eS5taW4uY3NzJztcclxuLy9jb25zdCBmbGlja2l0eSA9IG5ldyBGbGlja2l0eSgnLnNsaWRlcycpO1xyXG5cclxuXHJcbnZhciBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2xpZGVzIC5zbGlkZScpO1xyXG52YXIgY3VycmVudFNsaWRlID0gMDtcclxudmFyIHNsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChuZXh0U2xpZGUsMTAwMDApO1xyXG5cclxuZnVuY3Rpb24gbmV4dFNsaWRlKCl7XHJcbiAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NOYW1lID0gJ3NsaWRlJztcclxuICBjdXJyZW50U2xpZGUgPSAoY3VycmVudFNsaWRlKzEpJXNsaWRlcy5sZW5ndGg7XHJcbiAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NOYW1lID0gJ3NsaWRlIHNob3dpbmcnO1xyXG59XHJcblxyXG52YXIgcGxheWluZyA9IHRydWU7XHJcbnZhciBwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZScpO1xyXG5cclxuZnVuY3Rpb24gcGF1c2VTbGlkZXNob3coKXtcclxuICBwYXVzZUJ1dHRvbi5pbm5lckhUTUwgPSAnUGxheSc7XHJcbiAgcGxheWluZyA9IGZhbHNlO1xyXG4gIGNsZWFySW50ZXJ2YWwoc2xpZGVJbnRlcnZhbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXlTbGlkZXNob3coKXtcclxuICBwYXVzZUJ1dHRvbi5pbm5lckhUTUwgPSAnUGF1c2UnO1xyXG4gIHBsYXlpbmcgPSB0cnVlO1xyXG4gIHNsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChuZXh0U2xpZGUsMTAwMDApO1xyXG59XHJcblxyXG5wYXVzZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuICBpZihwbGF5aW5nKXsgcGF1c2VTbGlkZXNob3coKTsgfVxyXG4gIGVsc2V7IHBsYXlTbGlkZXNob3coKTsgfVxyXG59O1xyXG5cclxuLy/QodC80LXQvdCwINGG0LLQtdGC0LAg0YMg0YHQu9C+0LIgLy8g0LzQsNGB0YHQuNCyINGG0LLQtdGC0L7QslxyXG4vL9Ck0YPQvdC60YbQuNC4INC4INC/0LXRgNC10LzQtdC90L3Ri9C1INC90LUg0LTQvtC70LbQvdC+INC90LDQt9GL0LLQsNGC0YzRgdGPINC+0LTQuNC90LDQutC+0LLQviDQtNC70Y8g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0LTQstGD0YUg0LjQu9C4INC+0LvRjNGI0LUg0Y3Qu9C10LzQtdC90YLQvtCyXHJcbmxldCBjb2xvck5hbWVzID0gW1wiYmx1ZVwiLCBcImN5YW5cIiwgXCJyZWRcIiwgXCJnb2xkXCIsIFwiZ3JlZW5cIiwgXCJ5ZWxsb3dcIiwgXCIjMTBmZjAwXCJdO1xyXG5cclxuLy8g0YTRg9C90LrRhtC40Y8g0L/QvtC40YHQutCwIHJhbmRvbS3Rh9C40YHQu9CwXHJcbmNvbnN0IHJhbmRvbSA9IChtaW4sIG1heCkgPT4ge1xyXG4gIG1heCA9IGNvbG9yTmFtZXMubGVuZ3RoIC0gMTtcclxuICBjb25zdCByYW5kID0gbWluICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpO1xyXG4gIHJldHVybiByYW5kO1xyXG59O1xyXG5cclxuLy8g0L3QsNC50YLQuCDRjdC70LXQvNC10L3RgtGLINC00LvRjyDQuNC30LzQtdC90LXQvdC40Y8g0YHQstC+0LnRgdGC0LJcclxubGV0IHBhcmFncmFwaHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaDFcIik7XHJcblxyXG4vLyDQvNC10L3Rj9GC0Ywg0YbQstC10YIg0LrQsNC20LTRg9GOINGB0LXQutGD0L3QtNGDLCDQv9GA0LjRgdCy0L7QuNCyINC60LDQttC00L7QvNGDINGN0Lst0YLRgyDQvNCw0YHRgdC40LLQsCBwYXJhZ3JhcGhzINC90L7QstC+0LUg0LfQvdCw0YfQtdC90LjQtVxyXG5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhZ3JhcGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBwYXJhZ3JhcGhzW2ldLnN0eWxlLmNvbG9yID0gY29sb3JOYW1lc1tyYW5kb20oMCldO1xyXG4gIH1cclxufSwgMzAwMCk7XHJcbmNvbnNvbGUubG9nKGNvbG9yTmFtZXMpO1xyXG5cclxuLy/QodC80LXQvdCwINGG0LLQtdGC0LAg0YMg0YHQu9C+0LIgLy8g0LzQsNGB0YHQuNCyINGG0LLQtdGC0L7QslxyXG4vL9Ck0YPQvdC60YbQuNC4INC4INC/0LXRgNC10LzQtdC90L3Ri9C1INC90LUg0LTQvtC70LbQvdC+INC90LDQt9GL0LLQsNGC0YzRgdGPINC+0LTQuNC90LDQutC+0LLQviDQtNC70Y8g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0LTQstGD0YUg0LjQu9C4INC+0LvRjNGI0LUg0Y3Qu9C10LzQtdC90YLQvtCyXHJcbmxldCBjb2xvck5hbWVzcyA9IFtcImJsdWVcIiwgXCJjeWFuXCIsIFwicmVkXCIsIFwiZ29sZFwiLCBcImdyZWVuXCIsIFwieWVsbG93XCIsIFwib3JhbmdlXCJdO1xyXG5cclxuLy8g0YTRg9C90LrRhtC40Y8g0L/QvtC40YHQutCwIHJhbmRvbS3Rh9C40YHQu9CwXHJcbmNvbnN0IHJhbmRvbWUgPSAobWluLCBtYXgpID0+IHtcclxuICBtYXggPSBjb2xvck5hbWVzcy5sZW5ndGggLSAxO1xyXG4gIGNvbnN0IHJhbmRlID0gbWluICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpO1xyXG4gIHJldHVybiByYW5kZTtcclxufTtcclxuXHJcbi8vINC90LDQudGC0Lgg0Y3Qu9C10LzQtdC90YLRiyDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPINGB0LLQvtC50YHRgtCyXHJcbmxldCBwYXJhZ3JhcGhzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsZXR0ZXJzXCIpOy8q0LXRgdC70Lgg0L/QvtGB0YLQsNCy0LjRgtGMINCy0LzQtdGB0YLQviBsZXR0ZXJzIHRleHQtZm9vdGVyLCDRgtC+INCy0YHQtSDQsdGD0LrQstGLINCx0YPQtNC10YIg0LzQuNCz0LDRgtGMINC+0LTQuNC90LDQutC+0LLQviovXHJcblxyXG4vLyDQvNC10L3Rj9GC0Ywg0YbQstC10YIg0LrQsNC20LTRg9GOINGB0LXQutGD0L3QtNGDLCDQv9GA0LjRgdCy0L7QuNCyINC60LDQttC00L7QvNGDINGN0Lst0YLRgyDQvNCw0YHRgdC40LLQsCBwYXJhZ3JhcGhzINC90L7QstC+0LUg0LfQvdCw0YfQtdC90LjQtVxyXG5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhZ3JhcGhzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgcGFyYWdyYXBoc3NbaV0uc3R5bGUuY29sb3IgPSBjb2xvck5hbWVzc1tyYW5kb20oMCldO1xyXG4gIH1cclxufSwgMzAwMCk7XHJcbmNvbnNvbGUubG9nKGNvbG9yTmFtZXNzKTtcclxuXHJcbi8v0LTQvtCx0LDQstC70Y/QtdC8INCw0YDRgtC40LrQu9GMINC90LDQtCDQtNC40LLQvtC8INC4INC30LDRgdGC0LDQstC70Y/QtdC8INC80L7RgNCz0LDRgtGMXHJcbi8vPGRpdiBjbGFzcz1cImFycmF5XCI+0J8g0JAg0J0g0JQg0J4g0KAg0Jgg0KMg0Jw8L2Rpdj4g0YLQsNC6INCyINGI0YLQvNC7XHJcblxyXG4vKmNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJheScpOyAvL9C90LDRhdC+0LTQuNC8INGN0LvQtdC80LXQvdGCLCDQvdCw0LQg0LrQvtGC0L7RgNGL0Lwg0YHQvtC30LDRkdC8INCw0YDRgtC40LrQu9GMXHJcbmNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dCcpO1xyXG5cclxuZnVuY3Rpb24gZ2V0IChhcnIpIHtcclxuICByZXR1cm4gYXJyLmpvaW4oXCIgKiBcIik7XHJcbn1cclxuXHJcbmNvbnN0IGFyciA9IFtcItCfXCIsIFwi0KBcIiwgXCLQmFwiLCBcItCSXCIsIFwi0JVcIiwgXCLQolwiXTsgLy8g0YHQvtC30LTQsNGR0Lwg0LzQsNGB0YHQuNCyXHJcblxyXG5kb2N1bWVudC53cml0ZS8qYm9keS50ZXh0Q29udGVudD0qKGdldChhcnIpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJheVwiKS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmViZWdpblwiLCBcclxuYDxhcnRpY2xlIGNsYXNzPVwidGV4dFwiPiAke2dldChhcnIpfSA8L2FydGljbGU+YCk7Ly/RgdC+0LfQtNCw0ZHQvCDQvdCw0LQg0LTQuNCy0L7QvCDQsNGA0YLQuNC60LvRjFxyXG5jb25zdCB0ZXh0QmVmb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dCcpOy8v0LfQsNC/0LjRgdGL0LLQsNC10Lwg0LDRgNGC0LjQutC70Ywg0LIg0L/QtdGA0LXQvNC10L3QvdGD0Y5cclxuXHJcbmZ1bmN0aW9uIGJsaW5rKCkge1xyXG4gIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dCcpO1xyXG4gIGlmIChhcnRpY2xlLnN0eWxlLnZpc2liaWxpdHkgPT0gXCJoaWRkZW5cIikge1xyXG4gICAgYXJ0aWNsZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICBhcnRpY2xlLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICAgYXJ0aWNsZS5zdHlsZS5jb2xvciA9IFwiYnJvd25cIjtcclxuICB9IGVsc2Uge1xyXG4gICAgYXJ0aWNsZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICB9XHJcbn0gXHJcbmNvbnN0IHRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0TG9vcCA9ICBibGluaygpO1xyXG4gIGlmIChyZXN1bHRMb29wID09PSB0cnVlKSB7IC8vINC10YHQu9C4INGN0LvQtdC80LXQvdGCINC90LDQudC00LXQvVxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lKTsgLy8g0L7RgdGC0LDQvdC+0LLQuNGC0Ywgc2V0SW50ZXJ2YWxcclxuICB9XHJcbn0sIDIwMDApOyovIl0sIm5hbWVzIjpbIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImRvY3VtZW50IiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJzbGlkZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudFNsaWRlIiwic2xpZGVJbnRlcnZhbCIsInNldEludGVydmFsIiwibmV4dFNsaWRlIiwiY2xhc3NOYW1lIiwicGxheWluZyIsInBhdXNlQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmNsaWNrIiwiaW5uZXJIVE1MIiwiY2xlYXJJbnRlcnZhbCIsImNvbG9yTmFtZXMiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIiwicm91bmQiLCJwYXJhZ3JhcGhzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJzdHlsZSIsImNvbG9yIiwiY29uc29sZSIsImxvZyIsImNvbG9yTmFtZXNzIiwicGFyYWdyYXBoc3MiXSwic291cmNlUm9vdCI6IiJ9