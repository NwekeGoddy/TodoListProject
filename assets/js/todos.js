$("ul").on("click", "li", function(){
		$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(600, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newTodo =$(this).val();	
		$(this).val(" ");	
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + " </li>");
	}
});
	
$(".fa-plus").click(function(){
		$("input[type='text']").fadeToggle();
});

