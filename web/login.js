const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USER_NAME, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `안녕하세요! ${username}님. 오늘의 할 일을 작성하세요.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUserName = localStorage.getItem(USER_NAME);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    paintGreetings(savedUserName);
}


