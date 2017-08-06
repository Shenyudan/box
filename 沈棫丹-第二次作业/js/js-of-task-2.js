$(document).ready(function(){

//登录弹窗
	$(function(){
		$("#sign").click(function(event){ 
		$("#bg-wrap").show();
		$("#sign-in").show();
		});
		$("#bg-wrap").click(function(event){
		$("#bg-wrap").hide();
		$("#sign-in").hide();
		});
		$(".close").click(function(event){
		$("#bg-wrap").hide();
		$("#sign-in").hide();
		});
	});

//轮播图
	var img=$(".imgwrap img");//找到图片
	var li=$(".scroll li");//找到白点
	var divW=$(".imgwrap").width();//取banner的宽度
	var len=$(".imgwrap img").length;//总共有多少张图片
	img.css("left",divW);//所有图片距离左侧宽度为imgwrap
	img.eq(0).css("left",0);//第一张图片距离左侧大小为0
	li.eq(0).css({"background":"white","opacity":"0.6"});//第一个圆点背景颜色为白色，透明度为0.6
	var index=0;
	var next=0;//初始化

	function showR(){ 
		next++;
		if(next==len){
			next=0;//如果显示的next值等于图片张数则让next值重新取回0
   		}
  	img.eq(next).css("left",divW);//next每增加1，其对应图片位置距离左侧divW宽
   	img.eq(index).animate({"left":-divW});//当前图片以动画形式将左侧距离变为-divW
   	img.eq(next).animate({"left":0});//其对应图片以动画形式将左侧距离变为0
   	li.eq(next).css({"background":"white","opacity":"0.6"});//对应圆点变为白色，透明度为0.6
   	li.eq(index).css({"background":"black","opacity":"0.6"});//当前图片的对应圆点变为黑色，透明度0.6
   	index=next;//重新给index赋值，也就是重新定义当前图片
  	}

  t=setInterval(showR,2000);//调用showR（）函数，且每一张图片动画时间设定为两秒

  function showL(){
   	next--;
   	if(next==-1){
    	next=len-1;
   	}
   	img.eq(next).css("left",-divW);
  	img.eq(index).animate({"left":divW});
   	img.eq(next).animate({"left":0});
   	li.eq(next).css({"background":"white","opacity":"0.6"});
   	li.eq(index).css({"background":"black","opacity":"0.6"});
   	index=next;   
  }//同上

  img.hover(function(){
  	clearInterval(t);     
  	},
    function(){
  	 t=setInterval(showR,2000);
  });//鼠标停在图片上的时候，动画停止，时间归零，鼠标移出图片，动画继续

  //左右按钮
  	$(".right").click(function(){
   		clearInterval(t);
   		showR();
     	t=setInterval(showR,2000);
  	});//鼠标点击右键时，时间重为两秒，且调用showR（）函数
  	$(".left").click(function(){
   		clearInterval(t);
     	showL();
   		t=setInterval(showR,2000);
  	});//点击左键时，时间重为两秒，且调用showL（）函数，之后继续showR（）函数

  //小白点 点击
  	li.mousedown(function(){
  		num=$(this).index();//取当前播放的图片的index值
   		if(num==next){
    		return;//点击当前圆点没有任何效果
   		}else if(num<next){//如果点击的图片在下一张图片的前面，则设置图片从左滑入
    		clearInterval(t);
    		img.eq(num).css("left",-divW);
     		img.eq(index).animate({"left":divW});
     		img.eq(num).animate({"left":0});
     		li.eq(num).css({"background":"white","opacity":"0.6"});
     		li.eq(index).css({"background":"black","opacity":"0.6"});
     		index=num;
     		next=num;
   		}else if(num>next){//如果点击的图片在下一张图片的后面，则设置图片从右滑入
    		clearInterval(t);
     		img.eq(num).css("left",divW);
     		img.eq(index).animate({"left":-divW});
     		img.eq(num).animate({"left":0});
     		li.eq(num).css({"background":"white","opacity":"0.6"});
     		li.eq(index).css({"background":"black","opacity":"0.6"});
     		index=num;//
     		next=num;//
  	 	}
 	  });
    li.mouseup(function(){
      t=setInterval(show,2000);//鼠标松开的时候重新调用showR（）
    });

//搜索框
  var college=$(".col li");
  var liW=$(".col li").width();
  college.css("left","0");
  var school=new Array();
  $(".btn input[type=button]").click(function(){
    var pattern=/^[\u2E80-\u9FFF]+$/;//仅是中文的正则表达式
    if(!pattern.test($(".border input[type=text]").val())){//匹配测试
      alert("输入错误，请重新输入！");
    }
    else{
      for (var i=0;i<$(".col li").length;i++){
        var message=$(".border input[type=text]").val();
          //console.log(college.eq(i).text());检查内容是什么
        if (message==college.eq(i).text()){
          $(".colleges p").hide();
          $(".col").hide();
          school.push([college.eq(i).html()]);
        }
      }
      for(var i=1;i<=$(".col li").length;i++){
        var message=$(".border input[type=text]").val();
        var num=i-1;
        if((i=$(".col li").length)&&(!message==college.eq(num).text())){
          alert("请重新输入！");
        }
      }
    }
    $(".school").html("");
    for(var i=school.length-1;i>=0;i--){
      $(".school").append('&nbsp;&nbsp;&nbsp;&nbsp;'+school[i]+'<br>');
  }
  });
})