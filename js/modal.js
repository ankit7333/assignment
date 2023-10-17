const modal = document.getElementById(`christmas__sale`)
const modalClose = document.querySelector(`.modal__close`)

const userName = document.getElementById(`username`)
const email = document.getElementById(`email`)
const newsletter = document.getElementById(`newsletter`)

import {createCookies} from "./createcookie.js"

// On Closing the popup(whether the form is filled or not) a cookie will be created.
modalClose.addEventListener('click', function(){
    modal.close();
    createCookies("uname", userName.value)
    createCookies("email", email.value)
    createCookies("newsletter", newsletter.checked)
})
const windowWidth = screen.width;
// console.log(windowWidth);
window.addEventListener('load', (e) => {
    if(windowWidth > 600){
        // On refresh: if any of the above-created cookies(i.e. successful submission or close) are present, then exit intent popup should not appear.
        const isSetCookie = document.cookie;
        const cookieArr = isSetCookie.split(';')
        let cookieObj = {};
        let email_logged = ''
        cookieArr.map((e)=>{
            let tempVal = e.split('=');
            cookieObj[tempVal[0]?.trim()] = tempVal[1]?.trim(); 
        })
        console.log(cookieObj, (!!cookieObj?.email?.length ))
        if(!(cookieObj?.uname?.length && cookieObj?.email?.length && cookieObj?.newsletter=='true')){
            modal.showModal();
        } else {
            modal.close();
        }
    }
    // The scope will be different here, instead of exit intent the popup should auto appear after 5 seconds.
    if(windowWidth <= 600){
        modal.classList.add('dn');
        setTimeout(function(){
            modal.showModal()
            modal.classList.remove('dn');
        },5000)
    }
});