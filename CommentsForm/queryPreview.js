window.addEventListener('load',()=>{
	
	const params = (new URL (document.location)).searchParams;
	const name = params.get('name');
	const email= params.get('email');
	const reason= params.get('reason');
	const willingmode= params.get('willingmode');
	const usedmode= params.get('usedmode');
	
	document.getElementById('name-preview').innerHTML = name;
	document.getElementById('email-preview').innerHTML = email;
	document.getElementById('reason-preview').innerHTML = reason;
	document.getElementById('usedmode-preview').innerHTML = usedmode;
	document.getElementById('willingmode-preview').innerHTML = willingmode;
	
	
})

function send() //fuction to intiate with 'send' button - sending email
{
    window.location.href="mailto:isyathu20222219@iit.ac.lk";
}

function edit()//function to initiate with 'edit' button - going back
{
	try{
		if(true){
			window.history.go(-1);
		}
	}catch(e){
		window.location.href="Query.html";
	}
}