import { app, getFirestore, db, collection, addDoc, getDocs } from "./firebase.js"

const getbtn = document.getElementById("add");
getbtn.addEventListener('click', async (stop) => {
    stop.preventDefault()
    const getInput = document.getElementById("data");
    console.log(getInput.value)
    const genCard = document.getElementById("allCards");
    genCard.innerHTML +=
        `<div class="col-12 col-md-6 col-lg-4">
                <div class="card" style="background-color: #001200;">
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
                            <button class="btn btn-primary">Edit Task</button>
                            <button class="btn btn-success">Completed</button>
                            <button class="btn btn-danger">Remove Task</button>
                        </div>
                    </div>
                </div>
            </div>`

    try {
        const docRef = await addDoc(collection(db, "Card"), {
            info: `<div class="col-12 col-md-6 col-lg-4">
                  <div class="card" style="background-color: #001200;">
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
                              <button class="btn btn-primary">Edit Task</button>
                              <button class="btn btn-success">Completed</button>
                              <button class="btn btn-danger">Remove Task</button>
                          </div>
                      </div>
                  </div>
              </div>`
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
});

const hisBtn = document.getElementById("history");
hisBtn.addEventListener('click', async (stop) => {
    stop.preventDefault()
    const querySnapshot = await getDocs(collection(db, "Cards"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
})


const getInputValue = () => {
}
