var field1 = document.getElementById("field1");// esa karke main user se jo input loonga vo javascript access karlega
var field2 = document.getElementById("field2");
//field1.value = "hey!";
var field3 = document.getElementById("field3");
var form = document.getElementById("field4");
form.addEventListener("submit",function(write_anything){   //is ka matlab hai ki jab mai submit button pe click karunga tab function mai likhi cheej chalegi.
	
	if(!field1.value || !field2.value)
		alert("please enter the values");
var x = parseFloat(field1.value);
	var y = parseFloat(field2.value);
	field3.innerText = "Result "+ ((x/y)*100) + "%";
	write_anything.preventDefault();
	
});