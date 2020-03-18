function bintodec(a){
  var s=0;
  for (var i=0;i<a.length;i++){
    s=s+Math.pow(2,a.length-i-1)*a[i];
    }
    return s
}
function dectobin(s){
  var t='';

  while(1){
    if (s<1){
      break;
    }
    else{
      t=t+(s%2);
      s=Math.floor(s/2);
    }
  }
  return t
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
var op=false;
var operation;
var enteredNumbers1=[];
var enteredNumbers2=[];
var decNumber1,decNumber2;
$('.add').on('click',function(){
  op=true;
  var g=$('.screen').text();
  g=g+'+';
  $('.screen').text(g);
  operation='+';
})
$('.sub').on('click',function(){
  op=true;
  var g=$('.screen').text();
  g=g+'-';
  $('.screen').text(g);
  operation='-';
})
$('.prod').on('click',function(){
  op=true;
  var g=$('.screen').text();
  g=g+'*';
  $('.screen').text(g);
  operation='*';
})
$('.quo').on('click',function(){
  op=true;
  var g=$('.screen').text();
  g=g+'/';
  $('.screen').text(g);
  operation='/';
})
$('.zero').on('click',function(){
  var t=$('.screen').text();
  t=t+'0';
  $('.screen').text(t);
  if (!op){
    enteredNumbers1.push(0);
  }
  else{
    enteredNumbers2.push(0);
  }

})
$('.one').on('click',function(){
  var p=$('.screen').text();
  p=p+'1';
  $('.screen').text(p);
  if (!op){
    enteredNumbers1.push(1);
  }
  else{
    enteredNumbers2.push(1);
  }

})
function answer(decNumber1,decNumber2){
  decNumber1=bintodec(enteredNumbers1);
  decNumber2=bintodec(enteredNumbers2);
  var ans;
  switch (operation) {
    case '+':
      ans=decNumber1+decNumber2;
      break;
    case '-':
      ans=decNumber1-decNumber2;
      break;
    case '*':
      ans=decNumber1*decNumber2;
      break;
    case '/':
      ans=decNumber1/decNumber2;
      break;
  }
  return ans;
}

$('.solution').on('click',function(){
  if (answer(decNumber1,decNumber2)===0){
    var sol=0;
  }
  else{
    var sol=reverseString(dectobin(answer(decNumber1,decNumber2)));
  }
  $('.screen').text(sol);
  var tex=$('.screen').text();
  enteredNumbers1=[];
  enteredNumbers2=[];
  for (i=0;i<tex.length;i++){
    enteredNumbers1.push(tex[i]);
  }
  console.log(enteredNumbers1);

})
$('.allclear').on('click',function(){
  $('.screen').text('');
  enteredNumbers1=[];
  enteredNumbers2=[];
  op=false;
})
