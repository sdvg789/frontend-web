// var log = document.getElementById('log');
//
// console.log(log);
//
// log.innerHTML = '안녕';
//
// var log = document.getElementById('log');
// console.log(log);

// var a = document.querySelectorAll('#log a');
// console.log(a.length, a[0], a[1]);
//

//
// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
// log.appendChild(div);

//
// window.load=function(){
//     alert("load1");
// };
//
// window.addEventListener('load', function(){
//     alert("load2");
// });
//
// var log = document.getElementById('log');
// log.addEventListener('click', function(){
//   console.log('log');
// // });
//
// var log = document.getElementById('log');
// funcion printlog(event){
//   console.log('log!!!');
//   debugger;
// }
// log.addEventListener('click', function()

var divs = document.querySelectorAll('#wrap div');

// console.log(divs);

function changeBg(event){
  console.log('changeBg');
divs[0].addEventListener('click', changeBg);
};

divs[0].style.background-color = 'blue';

function changeBg(event){
  console.log('changeBg');
}
