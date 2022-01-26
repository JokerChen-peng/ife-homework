// 省市、学校二级联动函数及鼠标样式函数封装
function Action(arg){
	this.create(arg);					
}
Action.prototype={
	create:function(arg){
		this.sit=arg;					
		this.key=[];					
		var _self=this;
		getKey(arg,_self);				
		this.showKey(this.key);			
		this.keyEvent();				
	},

	showKey:function(key){					
		var left=document.getElementById('ld-left');
		for(index in key){
			var msg=key[index];
			var li=document.createElement('li');
			li.class='ld-key';
			li.innerText=msg;
			left.appendChild(li);
		}
		
	},
	keyEvent:function(){			//li的点击事件
		var _self=this;				//保存对象
		var key=document.getElementById('ld-left');
		var list=key.childNodes;
		for( i in list){
			var i=i;
			if(list[i].nodeName=='LI'){
				list[i].onclick=function(){
					var k=this.innerText;
					_self.showValue(k);
					for(var i =0;i<list.length;i++){
						list[i].style.fontWeight='normal';
					}
					this.style.fontWeight='bolder';
				}
			}
		}
	},
	showValue:function(key){		//显示value值
		var right=document.getElementById('ld-right');
		this.clearValue(right);
		var value=this.sit[key];
		var lis = right.childNodes;
		for(index in value){
			var msg=value[index];
			var li=document.createElement('li');
			li.class='ld-value';
			li.innerText=msg;
			right.appendChild(li);
            li.onclick = function () {
            school.children[0].value = this.innerHTML;
            ld.style.display = 'none';
			for(var i =0;i<lis.length;i++){
				lis[i].style.fontWeight='normal';
			}
			this.style.fontWeight='bolder';
            }
		}
	},
	clearValue:function(right){		//	清除value值
		right.innerHTML=null;	
	}
}
function getKey(site,obj){			//获取key，并将key值传入数组
	for(var key in site){
		var key=key;
		obj.key.push(key);
	}
}


// 定义学校弹窗及鼠标经过点击样式变化函数
var school = document.querySelector('#school');
var ld = document.querySelector('#ld');
var ld_left = document.querySelector('#ld-left');

school.onmouseover = function () {
    school.className = "hover";
    ld.style.display = 'block';
}
school.onmouseout = function () {
    ld.style.display = 'none';
    school.className = "";
}