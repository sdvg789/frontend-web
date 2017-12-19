var memo = document.getElementById('memo');
var save = document.getElementById('save');
save.addEventListener('click', function(){
  storage.setItem('note', memo.value);
});

var storage = window.localStorage;
document.addEventListener('DOMContentLoaded', function(){
  if (storage.length !== 0) {
    memo.value = storage.getItem('note');
  }
});


var fullscreen = document.getElementById('fullscreen');
fullscreen.addEventListener('click', function(){
  if (screenfull.enabled) {
    screenfull.request();
  }
});


var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var save_file = document.getElementById('save-file');
save_file.addEventListener('click', function(){
  var blob = new Blob([memo.value], {type: "text/plain;charset=utf-8"});
  saveAs(blob, 'text.txt');
});

var clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    memo.value = '';
});
