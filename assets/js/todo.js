//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

//click on x to delete todo
$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(e){
    //grabbing new todo text from input
    var todoText= $(this).val();
    if(e.keyCode===13){
    //creating new li and add it to the ul
        if(todoText === ""){
            return false;
        }
        else{
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
            $("input[type='text']").val("");
        }
    }
});

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});