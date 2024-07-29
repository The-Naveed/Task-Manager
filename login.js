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
    window.location.replace("./main.html")

};

const create = _ => {
    window.location.replace("./sign.html")
}

window.login = login
window.create = create