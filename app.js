import { app, getFirestore, db, collection, addDoc, getDocs, getStorage, ref, deleteObject } from "./firebase.js"

let getbtn = document.getElementById("add");
let getInput = document.getElementById("data");
let genCard = document.getElementById("allCards");
let cardData = document.getElementsByClassName("card")
getbtn.addEventListener('click', async (stop) => {
    stop.preventDefault()
    genCard.innerHTML +=
        `<div class="col-12 col-md-6 col-lg-4">
    <div class="card" style="background-color:#052b4e;">
    <div class="card-body">
    <div class="d-flex justify-content-around mb-3">
    <p class="card-text">Day:</p>
    <p class="card-text">Date:</p>
    <p class="card-text">Time:</p>
    </div>
    <h5 align="center" class="card-title pb-3">
    <i><strong class="font">${getInput.value}</strong></i>
    </h5>
    <div class="d-flex justify-content-between">
    <button class="btn btn-primary" id="edi">Edit Task</button>
    <button class="btn btn-success" id="com">Completed</button>
    <button class="btn btn-danger" id="del">Remove Task</button>
    </div>
    </div>
    </div>
    </div>`
    let delBtn = document.getElementById("del");
    delBtn.addEventListener("click", () => {
        cardData.remove
    })
    try {
        const docRef = await addDoc(collection(db, "Card"), {
            info:
                `<div class="col-12 col-md-6 col-lg-4">
            <div class="card" style="background-color:#052b4e;" id="card">
            <div class="card-body">
            <div class="d-flex justify-content-around mb-3">
            <p class="card-text">Day:</p>
            <p class="card-text">Date:</p>
            <p class="card-text">Time:</p>
            </div>
            <h5 align="center" class="card-title pb-3">
            <i><strong class="font">${getInput.value}</strong></i>
            </h5>
            <div class="d-flex justify-content-between">
            <button class="btn btn-primary" id="edi">Edit Task</button>
            <button class="btn btn-success" id="com">Completed</button>
            <button class="btn btn-danger" id="del">Remove Task</button>
            </div>
            </div>
            </div>
            </div>`
        });

    } catch (e) {
        console.error("Error adding document: ", e);
    }
});

let hisBtn = document.getElementById("history");
hisBtn.addEventListener('click', async (stop) => {
    stop.preventDefault()
    genCard.innerHTML = " "
    const querySnapshot = await getDocs(collection(db, "Card"));
    querySnapshot.forEach((doc) => {
        genCard.innerHTML += doc.data().info
    });
});