$(document).ready(function(){
	$(".a1").click(function(){
		$.post('/' , question: 1);
		$(".a1").hide(function(){
			$("#pr1").show(function(){
				$("#q2").show();
				$(".a2").show(function(){	
					$("#n2").click(function(){
						$(".a2").hide();
						$("#pr21").show(function(){
							$("#q3").show();
							$(".a3").show(function(){	
								$("#n3").click(function(){
									$(".a3").hide();
									$("#pr31").show();
									$("#b1").show();
								});
								$("#y3").click(function(){
									$(".a3").hide();
									$("#pr3").show();
									$("#b1").show();
								});
							});
						});
					});
					$("#y2").click(function(){
						$(".a2").hide();
						$("#pr2").show(function(){
							$("#q3").show();
							$(".a3").show(function(){	
								$("#n3").click(function(){
									$(".a3").hide();
									$("#pr31").show();
									$("#b1").show();
								});
								$("#y3").click(function(){
									$(".a3").hide();
									$("#pr3").show();
									$("#b1").show();
								});
							});
						});
					});
				});
			});
		});
	});
	$('#outOf').show();
	$("#b1").click(function(){
		$("#table1").hide();
		$("img").show();
	});
});
