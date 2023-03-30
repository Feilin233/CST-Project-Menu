function myFunction1() {
	var x = document.getElementById('Rest1');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function myFunction2() {
	var x = document.getElementById('Rest2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function myFunction3() {
	var x = document.getElementById('Rest3');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function myFunction4() {
	var x = document.getElementById('Rest4');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function myFunction5() {
	var x = document.getElementById('Rest5');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
  
function myFunction6() {
	var x = document.getElementById('Rest6');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAT9YnnMCqq4RjuAqqg0ttKl2SKXVhyuz8",
    authDomain: "rising-exchange-294203.firebaseapp.com",
    databaseURL: "https://rising-exchange-294203.firebaseio.com",
    projectId: "rising-exchange-294203",
    storageBucket: "rising-exchange-294203.appspot.com",
    messagingSenderId: "458741376358",
    appId: "1:458741376358:web:37059134d75726cd1814a7",
    measurementId: "G-C01TG05JWM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  
var companyRef = firebase.database().ref('feedback');
//var parents = database.ref('company');

//var data = {
  //name: "Albert",
//}

//parents.push(data);

document.getElementById('contactForm').addEventListener('submit',submitForm);

// submit form
function submitForm(e) {
  e.preventDefault();
  
  // get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var comment = getInputVal('comment');
  
  // Save Company Info
  saveCompany(name,email,comment);
  
  // Show Alert
  document.querySelector('.alert').style.display = 'block';
  
  // Hide Alert after 3 Seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none'; 
  },3000);
  
  // Clear Form
  document.getElementById('contactForm').reset();
  
}

//Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

function saveCompany(name,email, comment){
  var newCompanyRef = companyRef.push();
  newCompanyRef.set({
    name:name,
    email:email,
    comment:comment,
  });
  
}