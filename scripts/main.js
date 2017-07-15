// Image switcher code
var myImg = document.querySelector("img") ;
myImg.onclick = function() {
	var mySrc = myImg.getAttribute("src");
	if(mySrc ==="images/firefox-logo.jpg") {
		myImg.setAttribute("src","images/chrome-logo.jpg");
	} else {
		myImg.setAttribute("src","images/firefox-logo.jpg");
	}
}
// Personalized welcome message code
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName(){
	var userName = prompt("Place enter your name:");
	localStorage.setItem("name",userName);
	myHeading.innerHTML = "Mozilla is cool," + userName;
}
if(!localStorage.getItem("name")){
	setUserName();
} else {
	var storedName = localStorage.getItem("name");
	myHeading.innerHTML = "Mozilla is cool," + storedName;
}
myButton.onclick = function(){
	setUserName();
}


















/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}


window.onload=init;
function init(){
	alert("jiazaiwanbi !");

	document.getElementById("gen").onclick = function() {
	    alert('Ouch! Stop poking me!');

	}
}
*/
/*
var myHeading = document.querySelector ("h1"); // spell the word wrong.
myHeading.innerHTML = "Hello Word!";

function multiply(num1 ,num2) {
	var  result = num1 * num2;
	return result;  
} 
console.log(multiply(3,4));  //正常使用

for ( var a = 0;a < 10; a++){
	return a;
}
console.log(a);//报错 Illegal return statement

 
function bb() {
	for(var b = 0;b < 10; b++) { 
		return b;
	}
}
 
console.log(bb());// 返回 0

*/