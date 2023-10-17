const userName = document.getElementById(`username`)
const email = document.getElementById(`email`)
const newsletter = document.getElementById(`newsletter`)
const onSubmit = document.getElementById(`submit`)
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const modal = document.getElementById(`christmas__sale`)

import {createCookies} from "./createcookie.js"

onSubmit.addEventListener('click', function(e){
    e.preventDefault();
    // Show error if Email or checkbox value is blank.
    if(!emailPattern.test(email.value)){
        alert('Please enter valid email address');
    }
    if(!newsletter.checked){
        alert('Please check to receive monthly newsletter');
    }
    // Successful submission: create cookie & auto close the popup.
    if(emailPattern.test(email.value) && newsletter.checked){
        createCookies("uname", userName.value)
        createCookies("email", email.value)
        createCookies("newsletter", newsletter.checked)
        userName.value = '';
        email.value = '';
        newsletter.checked = false;
        modal?.close();
    }
});
