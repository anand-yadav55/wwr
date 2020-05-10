const list=document.querySelector(".contributers ol");
list.innerText="";

let button = document.getElementById("add-contributor");
button.onclick=function(){
	let contributerName = prompt("Enter your Name");

	let listItem=document.createElement("li");
	listItem.textContent=contributerName;
	list.appendChild(listItem);
}