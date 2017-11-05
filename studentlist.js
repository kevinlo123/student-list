/*when user gives the name of the student they press add to log it to the list and print to show all the names added*/
var students = [];
var input1;
// students.forEach(function(name1){
//   $("ol").append("<li>" + name1 + "</li>");
// });
// console.log(students);

$(document).ready(function(){
 $("#add").on("click", function(){
   input1 = $("input").val();
   students.push(input1);
   $("input").val("");
 });
});

 $("#print").on("click", function(){
   $("li").remove();
   students.forEach(function (el){
   $("ol").append("<li>" + el + "</li>");
   });
 });
