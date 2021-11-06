window.onload = function()
{
    checkStorage()
}

const pageStorage = localStorage.getItem("mode")


// check storage if button disabled or not
function checkStorage() {
    if (pageStorage == "complete") {
        drawList();
      } else {
        completedTheme(); //if completed mode was on, run this function
      }
    }


var give = ['Daniel', 'Elijah', 'Jon', 'Katy', 'Joss', 'Rocher'];
var receive = give.concat();
var peopleWrap = document.getElementById('peopleWrap');
var people = document.getElementById('people');
var choose = document.getElementById('choose');
var result = document.getElementById('result');
var close = document.getElementById('close');

function drawList()
{
	people.innerHTML = '<option value="">Who are you?</option>';
	for (var i = give.length - 1; i >= 0; i--) {
		var option = document.createElement('option');
		option.value = i;
		option.innerHTML = give[i];
		people.appendChild(option);
	}
}

function selectPerson(person) {

	var name = give[person];
	var nameIndex = receive.indexOf(name);
	
	if(nameIndex >= 0) 
	{
		receive.splice(nameIndex, 1);
	}
	var recipient = Math.floor((Math.random() * receive.length));
	var recipientName = receive[recipient];
	
	receive.splice(recipient, 1);
	give.splice(person, 1);

	if(nameIndex >= 0)
	{
		receive.push(name);
	}
	result.innerHTML = "<h2>" + name + ", you&rsquo;ve got " + recipientName + "!</h2>";
	close.innerHTML = "Okay. Destroy this message.";
	if(give.length > 0)
	{
		drawList();
	}
}

choose.onclick = function()
{
	if(people.value)
	{
		selectPerson(people.value);
	}
}

close.onclick = function() {

	result.innerHTML = "";
	close.innerHTML = "";
    result.innerHTML = "<h2>All done!</h2>";
    completedTheme ();
}

function completedTheme() { 
    console.log("completedTheme active");
    document.getElementById("choose").disabled=true;
};

//   if(give.length == 0){
//  peopleWrap.parentNode.removeChild(peopleWrap);
// 		choose.parentNode.removeChild(choose);
// 		result.innerHTML = "<h2>All done!</h2>";
// 		close.innerHTML = "";
// 	}
// }


