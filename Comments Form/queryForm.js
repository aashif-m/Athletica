function validate()
{
    var name=document.getElementById('name').value;
	var email=document.getElementById('email').value;
    var reason=document.getElementById('reason').value;
    var usedmode=document.getElementById('usedmode').value;
	var willingmode=document.getElementById('willingmode').value;

	

	//if there are missing fields
	if(name=="" || email=="" || reason==""  || usedmode=="" || willingmode==""){
		alert("Please fill all the fields...")
		return false;
	}
	
	//validating name
	if(name==""){
		alert("Please enter the name to continue")
		return false;
	}
	var letters = /^[A-Za-z\s]+$/; //letters in the alphabet and spaces
    if(!(name.match(letters))){
    alert("Name should only contain characters...")
    return false;
	}

    //validating email
	var atPosition = email.indexOf("@");
	var dotPosition = email.lastIndexOf(".");
    if (atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=email.length){    //https://www.javatpoint.com/javascript-form-validation
		alert("Not a valid email")
        return false;
    }	
	return(true) //if everything is valid returning a true value to proceed to next page
}