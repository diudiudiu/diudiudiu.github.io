window.onload=function(){
	var loading=document.getElementById('loading');
	setTimeout(function(){
		if (document.readyState=="complete") {
			loading.style.display='none';
		}
	},500);
	
	
	/*搜索*/
	var search=document.getElementById('search');
	var so=document.getElementById('so');
	search.onclick=function(){
		if (so.value!='') {
			window.location.href="so/index.html"; 
		}
	}


	/* 留言 */
	var send=document.getElementById('send');
	var num=2;
	send.onclick=function(){
		var now=new Date();var y=now.getFullYear();
		var m=now.getMonth()+1;var d=now.getDate();var h=now.getHours();
		var min=now.getMinutes();
		function zero(i){
			if(i<10){
				i='0'+qi;
			}
			return i;
		}
		min=zero(min);
		var time=y+"."+m+"."+d+" "+h+':'+min;
		var information=document.getElementById('information');
		var input=information.getElementsByTagName('input');
		var text=document.getElementById('text').value;
		var name=input[0].value;
		var Email=input[1].value;
		var git=input[2].value;
		var oParent = document.getElementById('boardul');// 父级对象
	    var oPin=document.createElement('li'); //添加 元素节点
	    oParent.appendChild(oPin);              //添加 子节点
	    var oinfo=document.createElement('div');
	    oinfo.className='info';
	    if (name=='') {
	    	name="一位不愿透露姓名的游客";
	    }
	    oinfo.innerHTML="<i>"+name+"</i><a href='#'>"+Email+"</a><a href=''>"+git+"</a><span class='floor'>"+num+"L</span>";
	    num++;
	    oPin.appendChild(oinfo);
	    var hr=document.createElement('hr');
	    oPin.appendChild(hr);
	    var omessage=document.createElement('div');
	    omessage.className='message';
	    omessage.innerHTML="<p>"+text+"</p><span>"+time+"</span>"
	    oPin.appendChild(omessage);
	}
	
	/* 左侧最小化 */

	var timer;
	var leftdiv=document.getElementById("left");
	var goleft=document.getElementById("goleft");
	var rightdiv=document.getElementById("right");
	// goleft.onclick=function(){
		// leftdiv.style.position='absolute';		
		// // rightdiv.style.position='absolute';		
		// timer=setInterval(function(){	
		// 	if (leftdiv.offsetLeft<=-300) {
		// 		leftdiv.style.left=-300+'px';
		// 		rightdiv.style.marginLeft=0+'px';
		// 		clearInterval(timer);
		// 	}else{
		// 		leftdiv.style.left=(leftdiv.offsetLeft-3)+'px';
		// 		rightdiv.style.marginLeft=(rightdiv.style.marginLeft-3)+'px';
		// 	}
		// },10)
	// }
	var box=document.getElementById("box");
	// alert(box.style.marginLeft==='0px');		
	goleft.onclick=function(){
		// rightdiv.style.position='absolute';		
		timer=setInterval(function(){	
			if (box.style.marginLeft<=-300) {
				box.style.marginLeft=-300+'px';
				clearInterval(timer);
			}else{
				box.style.marginLeft=(box.style.marginLeft-3)+'px';
			}
		},10)
	}


	// /*二维码*/
	// var qq=document.getElementById('qq');
	// var QQ=document.getElementById('QQ');
	// var WeChat=document.getElementById('WeChat');
	// var VX=document.getElementById('VX');
	// var timer=null;
	// var up=false;
	// var down=false;
	// qq.onmouseover=function(){
	// 	if (!up&&VX.offsetHeight==0) {
	// 		ChangeHeight(QQ,240,5,20);
	// 	}
	// }
	// qq.onmouseout=function(){
	// 	if (!down&&VX.offsetHeight==0) {
	// 		ChangeHeight(QQ,0,-5,10);
	// 	}
	// }
	// WeChat.onmouseover=function(){
	// 	if (!up&&QQ.offsetHeight==0) {
	// 		ChangeHeight(VX,240,5,20);
	// 	}
	// }
	// WeChat.onmouseout=function(){
	// 	if (!down&&QQ.offsetHeight==0) {
	// 		ChangeHeight(VX,0,-5,10);
	// 	}
	// }
	// function ChangeHeight(that,height,speed,time){
	// 	var LHeight=that.offsetHeight;
	// 	clearInterval(timer);
	// 	up=false;
	// 	down=false;
	// 	timer=setInterval(function(){
	// 		LHeight+=speed;
	// 		if(speed>0){
	// 			up=true;
	// 			if(LHeight>=height){
	// 				LHeight=height;
	// 				clearInterval(timer);
	// 				up=false;
	// 			}
	// 		}else if(speed<0){
	// 			down=true;
	// 			if(LHeight<=height){
	// 				LHeight=height;
	// 				clearInterval(timer);
	// 				down=false;
	// 			}
	// 		}
	// 		that.style.height=LHeight+'px';
	// 	},time);
	// }
}