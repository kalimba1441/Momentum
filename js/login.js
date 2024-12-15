const loginForm = document.querySelector("#login");
const loginInput = loginForm.querySelector('input');

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName"

function paintGreetings(userName) {
    greeting.querySelector("span").innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function onClickLogout(event){
    event.preventDefault();
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginInput.value = null;
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}


const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}
else {
    paintGreetings(savedUserName);
}



loginForm.addEventListener("submit", onLoginSubmit);
greeting.querySelector("button").addEventListener("click", onClickLogout);