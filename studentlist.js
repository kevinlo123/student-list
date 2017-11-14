 /************* functional *******************************/

document.addEventListener("DOMContentLoaded" , () => {
  
  //variables

  let name = [];
  let studentName = document.querySelector("#studentNames");
  const addButton = document.querySelector("#addButton");
  const printButton = document.querySelector("#printButton");
  const list = document.querySelector("#orderedList");
  const clearButton = document.querySelector("#clearButton");
  
  //event add students handler

 addButton.addEventListener("click" , () => {
   name.push(studentName.value);
   console.log(name);
   studentName.value = "";
 });

  //event printing names
  
  printButton.addEventListener("click" , () =>{
    list.innerHTML = "<li class='students'>" + name.join("</li><li class='students'>") + "</li>";
  });
  
  //event removing all names
  
  clearButton.addEventListener("click" , () =>{
    name = [];
    list.innerHTML = "";
  });
});

