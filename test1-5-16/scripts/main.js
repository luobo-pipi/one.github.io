/*querySelector方式定位标签
//实现图片切换
let myImage = document.querySelector('img');
//通过函数具体实现
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/huohu.png'){
		myImage.setAttribute("src","images/happy1.png")
	}else{
		myImage.setAttribute("src","images/huohu.png")
	}
};*/

/*getElementById定位具体id*/
//实现图片切换
let myImage = document.getElementById('img1');
//通过函数具体实现
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/huohu.png'){
		myImage.setAttribute("src","images/happy1.png")
	}else{
		myImage.setAttribute("src","images/huohu.png")
	}
};

/* let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

//个性化欢迎信息设置函数
function setUserName(){
	let myName = prompt("请输入你的姓名。");
	if(!myName || myName === null){
		setUserName();
	}else{
		localStorage.setItem('name',myName);
		myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
	}
};

// 初始化代码：在页面初次读取时进行构造工作：
if (!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
};

//为按钮设置 onclick 事件处理器：
myButton.onclick = function(){
	setUserName();
}; */

let myHead = document.querySelector("h1");
let myButton = document.querySelector("button");

function setUserName(){
	let myName = prompt("请输入火狐名","小火狐");
	if(myName === null){
		setUserName();
	}else{
		localStorage.setItem('name',myName);
		myHead.innerHTML = 'Mozilla 酷毙了，' + myName;
	}
};

if (!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName = localStorage.getItem('name');
	myHead.textContent = 'Mozilla 酷毙了，' + storedName;
};

myButton.onclick = function(){
	setUserName();
};