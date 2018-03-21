function login(){
  document.getElementById('login').style.display="block";
}

function shut(){
  document.getElementById('login').style.display="none";
  document.getElementById('signup').style.display="none";
  document.getElementById('adminLogin').style.display="none";
  document.getElementById('adminSignup').style.display="none";

 }
function signup(){
  document.getElementById('signup').style.display="block";
}

function clientDetails(){
	document.getElementById('clientDetails').style.display='block';
}
function dismiss(){
	document.getElementById('clientDetails').style.display="none";
  document.getElementById('clientView').style.display="none";
}
function adminSignup(){
  document.getElementById('adminSignup').style.display="block";
}

function adminLogin(){
	document.getElementById('adminLogin').style.display='block';
}

function deleteSubmit() {
  var name=document.getElementById('name').value;
  var author=document.getElementById('author').value;
  var qty =document.getElementById('qty').value;

  return confirm('confirm to delete ' + qty + ' copy of ' + name +' by '+author +' from shelf');
}

function addSubmit(){
	var name=document.getElementById('name').value;
    var author=document.getElementById('author').value;
    var qty =document.getElementById('qty').value;

    return  confirm(qty + " copy of " +name + " by "+ author +" has be added to self ");

}
function clientView(){
  document.getElementById('clientView').style.display='block';
}
