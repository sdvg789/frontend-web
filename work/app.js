for(var i = 1; i <= 100; i++ ) {
  console.log(i);
}
//짝수
console.log("짝수");
for(var i = 1; i <= 100; i++) {
  if(i%2 == 0){
    console.log(i);
  }
}
// 홀수
console.log("홀수");
for(var i = 1; i <= 100; i++) {
  if(i%2 == 1){
    console.log(i);
  }
}

for(var i = 1; i <= 9; i++) {
  console.log(i+"단");
  for(var s = 1; s <= 9; s++) {
    console.log(i + " x " + s + " = " + i * s);
  }
}
