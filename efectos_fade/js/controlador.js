// With the element initially hidden, we can show it slowly:
$("#clickme").click(function() {
  $("#book").fadeOut(5000,function(){
    //alert("oikopio");
  });
});

$("#clicknomas").click(function(){
	$("#book").fadeIn("slow",function(){
		//mbae la oikopava
	});
});
