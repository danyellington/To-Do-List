//business logic
var checkId =1;
function toDo(toDoString) {
  this.toDo = toDoString;
  this.id = "" + checkId;
  checkId += 1;
}

toDo.prototype.printToDo = function() {
  return this.toDo + " ";
}

// user interface logic
$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedToDo = $("input#toDo").val();
    var newToDo = new toDo(inputtedToDo);


    $("ul#toDos").append('<li id="' + newToDo.id + '"><input type="checkbox" name="listoftodo" value="' + newToDo.id +
    '"><span class="contact"> ' + newToDo.printToDo() + "</span></li>");
    console.log(newToDo.id);

  });

  $("form#toDoList").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=listoftodo]:checked").each(function(){
      var checkedToDoList = $(this).val();
      console.log(checkedToDoList);
      var parent = document.getElementById("toDos");
      var child = document.getElementById(checkedToDoList);
      parent.removeChild(child);
    });

  });

});
