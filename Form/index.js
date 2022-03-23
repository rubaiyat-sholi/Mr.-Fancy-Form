var submit_btn = document.getElementById('submit');
submit_btn.onclick = function validate() {
    
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var age = document.getElementById('age');
    var number = document.getElementById('number');
    var dob = document.getElementById('dob');
    var age = document.getElementById('age');

    if(fname.value == '' | lname.value == '' | email.value=='' | age.value=='' | number.value=='' | age.value=='' | dob.value==''){
        alert("This field cannot be empty");
    }
    var str1 = fname.value.slice(0,1);
    var str2 = lname.value.slice(0,1);
    if(str1 == "_" || str1 == "$"){
        alert("First Name is not valid");
    }
    else if(str2 == "_" || str2 == "$"){
        alert("Last Name is not valid");
    }
    if(!isEmail(email.value)){
        alert("Email is not valid");
    }

}

function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}