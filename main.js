/*var users = [
{name: 'Petya',
 surname: 'Sidorov',
 age: 26
},
{name: 'Sveta',
 surname: 'Ivanova',
 age: 20
},
{name: 'Vasya',
 surname: 'Petrov',
 age: 35
},
{name: 'Yulia',
 surname: 'Svetikova',
 age: 30
},
{name: 'Anatolii',
 surname: 'Vasiliev',
 age: 50
}
]

users.sort(function(a,b){
  return a['age'] - b['age'];
})
// factory-funcs
function sum(a,b){
  console.log(a+b);
  return callback();
};
function mul(a,b){
  console.log(a*b);
  return callback();
};
function div(a,b){
  console.log(a/b);
  return callback();
};
function sub(a,b){
  console.log(a-b);
  return callback();
}

function calc(func,a,b){
  return func(a,b);
}
function callback(){
  console.log("I'm finished!");
}

function checkout(func){
  var date = new Date();
  var args = [].slice.call(arguments);
  args = args.slice(1);
  func.apply(this,args);
  return new Date() - date;
}*/


/*var user = {
  name: 'Peter',
  lastName: 'Jackson',
  fullName: function(a,b){
    this.name = a;
    this.lastName = b;
  },
  print: function(){
    console.log(this);
  }
}

var some = {
  name: 'hello',
  lastName: 'bye'
}*/

/*var f = user.print.bind(user);*/
/*var f = user.fullName;
f.call(some,'Mr.','Bean');
var arr = [];
for(var i =0; i< 100000; i++){
  arr[i] = i;
}

var brr = [];
for(var i =0; i< 100000; i++){
  brr[i] = i;
}

var a = arr;
var b = brr;*/

/*
var arr = [1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30];
var brr = [1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30, 1, 2, 3, 4, 10, 20, 30];
*/


/*function check(func){
  var date = new Date();
  for(var i = 0;i<1000;i++){
    eval(func);
  }
  var result = new Date() - date;
  console.log(result);
}
*/

/*var a = 5;
(function(){
  var a = 10;
  console.log(a)
})();
console.log(a)
*/


/*function f(){
  var a = 10;
  return function(){
    console.log('a = ', a);
  }
}


function fibonacci(n){
  return n <= 2? 1: fibonacci(n-1) + fibonacci(n-2);
}

function func(){
  var args = [].join.call(arguments,' ');
  console.log(arguments.length);

  console.log(args);
  for(var i =0; i < arguments.length; i++){
    console.log(arguments[i]);

  }
  
}

function sum(){
  var result = 0;
  var len = arguments.length;
  for(; len--;){
    result += arguments[len];
  }
  console.log(result);
}
*/
/*var arr = Object.keys(window);

var i = arr.length;
for(;i--;){
  var value = arr[i];
  if(typeof window[value] === 'function' || Array.isArray(window[value])) continue;  
  console.log(arr[i] + ': ' + window[value]);
}
*/

/*var button = document.getElementById('button');
button.onclick = function(){
  var site = prompt("What do you want to open?","");
  var newWindow = window.open('http://' + site,"about:blank", "width=500,height=700");
  var timer = setTimeout(function(){
      newWindow.close();
  },2000)
}*/

/*function foo(){
   for(var key in location){
    if(typeof location[key] == "function") continue;
      console.log(key + ': ' + location[key])
   }
}
foo()

var search = location.search;

// split location.search for key: value
var search = location.search;
search = search.slice(1);
search = search.split('&');
var obj = {};
for(var i = 0; i< search.length;i++){
  obj[search[i].split('=')[0]] = search[i].split('=')[1];
}
*/
/*var back = document.getElementById('buttonBack');
back.onclick = function(){
  history.back();
}

var forward = document.getElementById('buttonForward');
forward.onclick = function(){
  history.forward();
}*/

var arr = [45,15,1,6,7,89,5];

// no work for negative numbers
function min(arr){
    for(var i = 0; i< arr.length; i++){
        var index = arr.indexOf(i)
        if(index != -1) return arr[index];
    }
}

function minSecond(arr){
  var arrForSort = [];
  var i = arr.length
for(; i--;){
    arrForSort.unshift(arr[i]);
}

  arrForSort.sort(function(a,b){
return a > b;
});
return arrForSort[0];
}



var links = document.links;
var i = links.length;
for(;i--;){
    links[i].style.color = 'aqua';
}

function reverseArray(arr){
    var a = [];
    for(var i = arr.length-1;i > -1;i--){
      
      a.push(arr[i]);  
    }
    
    for(var i = 0; i < a.length; i++){
        arr[i] = a.pop();
    }
    return arr;
}
/*
function reverseArr(arr){
  for(var i = 0; i > arr.length; i++){
    var t = arr.unshift();
    (function(){
        arr.push(t);
    })()
  }
  return arr;
}*/


function sortList(list){
    	var arrLis = list.children;
		var arr = [];

    	for(var i = 0; i < arrLis.length; i++){
    		arr.push(arrLis[i].innerText);
    	}
    	arr.sort(function(a, b){
    		return a > b? 1: -1;
    	});
    	list.innerHTML = '';
    	for(var i = 0; i < arr.length; i++){
    		var li = document.createElement('li');
    		li.innerHTML = arr[i];
    		list.appendChild(li);
    	}

    }