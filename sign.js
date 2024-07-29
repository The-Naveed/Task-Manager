const sign = _ => {
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    if (!firstName) {
        alert("First Name Not Found")
        return
    };
    if (!lastName) {
        alert("Last Name Not Found")
        return
    };
    if (!mail) {
        alert("Email Not Found")
        return
    };
    if (!pass) {
        alert("Password Not Found")
        return
    };
    if (pass.length <= 7) {
        alert("Password Must Be 8 Characters")
        return
    };
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Email", mail);
    localStorage.setItem("Password", pass);
    window.location.replace("./index.html")
};

window.sign = sign