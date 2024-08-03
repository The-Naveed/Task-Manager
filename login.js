import { getAuth, signInWithEmailAndPassword } from "./firebase.js"
if(localStorage.getItem("user")){
  window.location.replace("./main.html")
}

const login = _ => {
    let mail = document.getElementById("mail")
    let pass = document.getElementById("pass")
    if (!mail.value) {
        alert("Email Not Found")
        return
    }
    if (!pass.value) {
        alert("Password Not Found")
        return
    }
    if (pass.value.length <= 7) {
        alert("Password Must Be 8 Characters")
        return
    }
    localStorage.setItem("Email", mail.value);
    localStorage.setItem("Password", pass.value);

const auth = getAuth();
var email = mail.value
var password = pass.value
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    window.location.replace("./main.html")
};

const create = _ => {
    window.location.replace("./sign.html")
}

window.login = login
window.create = create
