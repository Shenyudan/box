$(document).ready(function(){
  //点击事件明显是个重复事件，但是我还不知道怎么把这五个点击合并，希望下次去工作室的时候学长能讲一下
  $(".first").click(function(){
    $("#tab-content").html("");
    $.ajax({  
	    type: "get",
	    url:"http://rapapi.org/mockjsdata/14169/geek",  
	    dataType: "json",  
	    success: function(responseText){  
	    var i=responseText.list.length; 
	      $("#tab-content").html(responseText.list[i-5])}  
	    });
  });

  $(".second").click(function(){
    $("#tab-content").html("");
    $.ajax({  
    	type: "get",
	    url:"http://rapapi.org/mockjsdata/14169/geek",  
	    dataType: "json",  
	    success: function(responseText){  
	    var i=responseText.list.length; 
	      $("#tab-content").html(responseText.list[i-4])}
	    });
  });

  $(".third").click(function(){
    $("#tab-content").html("");
    $.ajax({  
    	type: "get",
	    url:"http://rapapi.org/mockjsdata/14169/geek",  
	    dataType: "json",  
	    success: function(responseText){  
	    var i=responseText.list.length; 
	      $("#tab-content").html(responseText.list[i-3])} 
	    });
  });

  $(".forth").click(function(){
    $("#tab-content").html("");
    $.ajax({  
    	type: "get",
	    url:"http://rapapi.org/mockjsdata/14169/geek",  
	    dataType: "json",  
	    success: function(responseText){  
	    var i=responseText.list.length; 
	      $("#tab-content").html(responseText.list[i-2])} 
	    });
  });

  $(".fifth").click(function(){
    $("#tab-content").html("");
    $.ajax({  
    	type: "get",
	    url:"http://rapapi.org/mockjsdata/14169/geek",  
	    dataType: "json",  
	    success: function(responseText){  
	    var i=responseText.list.length; 
	      $("#tab-content").html(responseText.list[i-1])}  
	    });
  });
});
