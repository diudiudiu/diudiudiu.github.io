window.onload=function(){
	var qq=document.getElementById('qq');
	var QQ=document.getElementById('QQ');
	var vx=document.getElementById('VX');
	var timer=null;
	var up=false;
	var down=false;
	qq.onmouseover=function(){
		if (!up) {
			ChangeHeight(QQ,240,3,20);
		}
	}
	qq.onmouseout=function(){
		if (!down) {
			ChangeHeight(QQ,0,-3,20);
		}
	}
	function ChangeHeight(that,height,speed,time){
		var LHeight=that.offsetHeight;
		
		timer=setInterval(function(){
			LHeight+=speed;
			if(speed>0){
				up=true;
				if(LHeight>=height){
					LHeight=height;
					clearInterval(timer);
					up=false;
				}
			}else if(speed<0){
				down=true;
				if(LHeight<=height){
					LHeight=height;
					clearInterval(timer);
					down=false;
				}
			}
			that.style.height=LHeight+'px';
		},time);
	}
}