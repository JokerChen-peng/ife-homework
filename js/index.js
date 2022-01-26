// 选择入学年份的弹窗
var date_year = document.querySelector('#date_year');
var date_year1 = document.querySelector('.date_year1');
var year = document.querySelector('.year');
date_year.onmouseover = function () {
    date_year.className = "hover";
    year.style.display = 'block';
}
date_year.onmouseout = function () {
    year.style.display = 'none';
    date_year.className = "";
}



// 入学年份设置及选择函数，定义鼠标经过点击时变化
var number = document.querySelector(".number_year").getElementsByTagName("li");	
for (i = 0; i < number.length; i++) {
	number[i].innerHTML = 2010+i;
	date_year.children[0].value = number[8].innerHTML;
	number[8].style.fontWeight = 'bolder';
    number[i].onclick = function () {
        date_year.children[0].value = this.innerHTML;
        year.style.display = 'none';
		date_year.className = "hover";
		for(var i =0;i<number.length;i++){
			number[i].style.fontWeight='normal';
		}
		this.style.fontWeight='bolder';
    }
}


// 报名条件判定及弹窗函数
var mail = document.querySelector('.mail')
var finish = document.querySelector('.finish')
var prompt = document.querySelector('.prompt')
var success = document.querySelector('.success')
var back = document.querySelector('.back')

var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
finish.onclick = function(){
	function tc3s(){setTimeout(function(){
		prompt.className = 'prompt';
	},3000);}

	if(school.children[0].value!=='' && date_year.children[0].value!=='' && reg.test(mail.value)) {
		prompt.className = 'prompt right';
		str2 = '恭喜你，来自 '+school.children[0].value
		str3 = ' '+date_year.children[0].value+'级'
		str4 = ' '+mail.value+' 同学，您的报名信息已记录，请关注您的邮件'
		prompt.innerHTML = str2.concat(str3,str4)		
		success.style.display = 'block';
		back.style.display = 'block';
		setTimeout(function(){
			prompt.className = 'prompt';
		},5000);
		back.onclick = function(){
			success.style.display = 'none';
			back.style.display = 'none';
		}
	}

	if(school.children[0].value=='' && date_year.children[0].value!=='' && reg.test(mail.value)){
		prompt.className = 'prompt wrong';
		prompt.innerHTML = '学校不能为空，请重新选择';
		tc3s();
	}


	if (date_year.children[0].value=='' && school.children[0].value!=='' && reg.test(mail.value)){
		prompt.className = 'prompt wrong';
		prompt.innerHTML = '入学年份不能为空，请重新选择';
		tc3s();
	}

	
	if(school.children[0].value!=='' && date_year.children[0].value!=='' && !reg.test(mail.value)){
		var str = mail.value
		var str1 = '邮箱地址不符合要求'
		prompt.className = 'prompt wrong';
		prompt.innerHTML = str1.concat(str,'，请重新填写');
		tc3s();
	}

	if(school.children[0].value=='' && date_year.children[0].value=='' && !reg.test(mail.value)){
		var str = mail.value
		var str1 = '学校、入学年份不能为空，邮箱地址不符合要求'
		prompt.className = 'prompt wrong';
		prompt.innerHTML = str1.concat(str,'，请重新填写');
		tc3s();
	}
	
	if(school.children[0].value!=='' && date_year.children[0].value=='' && !reg.test(mail.value)){
		var str = mail.value
		var str1 = '入学年份不能为空，邮箱地址不符合要求'
		prompt.className = 'prompt wrong';
		prompt.innerHTML = str1.concat(str,'，请重新填写');
		tc3s();
	}

	if(school.children[0].value=='' && date_year.children[0].value!=='' && !reg.test(mail.value)){
		var str = mail.value
		var str1 = '学校不能为空，邮箱地址不符合要求'
		prompt.className = 'prompt wrong';
		prompt.innerHTML = str1.concat(str,'，请重新填写');
		tc3s();
	}

	if(school.children[0].value=='' && date_year.children[0].value=='' && reg.test(mail.value)){
		var str1 = '入学年份、学校不能为空'
		prompt.className = 'prompt wrong';
		prompt.innerHTML = str1.concat('，请重新填写');
		tc3s();
	}
}




// 课程筛选事件函数
var html = document.getElementsByClassName('html');
var CSS = document.getElementsByClassName('CSS');
var JavaScript = document.getElementsByClassName('JavaScript');
var sum_up = document.querySelector('.sum_up');
var part = document.querySelector('.part');
var course  = document.querySelector('.course');

sum_up.children[3].style.fontWeight='bolder';
sum_up.children[3].style.color='#000'
sum_up.children[3].style.borderBottom='3px solid #000';

for (i = 0; i < sum_up.children.length; i++) {
    sum_up.children[i].onclick = function () {
		for(var i =0; i<sum_up.children.length; i++){
			sum_up.children[i].setAttribute('index',i);
			sum_up.children[i].style.fontWeight='normal';
			sum_up.children[i].style.borderBottom='2px solid #c1c1c1';
			sum_up.children[i].style.color='#c1c1c1'
		}			
		course.style.height = '1400px';
		this.style.fontWeight='bolder';
		this.style.color='#000'
		this.style.borderBottom='3px solid #000';
		var index = this.getAttribute('index');

		part.style.display = 'block'
		for(var i=0; i<CSS.length; i++){
			CSS[i].style.display = 'block';
		}
		for(var i=0; i<html.length; i++){
			html[i].style.display = 'block';
		}
		for(var i=0; i<JavaScript.length; i++){
			JavaScript[i].style.display = 'block';
		}


		if(index == 0){
			part.style.display = 'none';
			height = (JavaScript.length+1)*200+'px';
			course.style.height = height;
			for(var i=0; i<CSS.length; i++){
				CSS[i].style.display = 'none';
			}
			for(var i=0; i<html.length; i++){
				html[i].style.display = 'none';
			}
		}
		
		if(index == 1){
			part.style.display = 'none';
			height = (CSS.length+1)*200+'px';
			course.style.height = height;
			for(var i=0; i<JavaScript.length; i++){
				JavaScript[i].style.display = 'none';
			}
			for(var i=0; i<html.length; i++){
				html[i].style.display = 'none';
			}
		}

		if(index == 2){
			part.style.display = 'none';
			height = (html.length+1)*200+'px';			
			course.style.height = height;
			for(var i=0; i<JavaScript.length; i++){
				JavaScript[i].style.display = 'none';
			}
			for(var i=0; i<CSS.length; i++){
				CSS[i].style.display = 'none';
			}
		}
    }
}