// main.js

// References to HTML Elements and inputs
const nameFormElem = document.getElementById("name-setter");
const nameInHeader = document.getElementById("headername");
const clearButton = document.getElementById("nameclearbtn");
const addButton = document.getElementById("addbtn");

const taskboardDiv = document.getElementById("taskboard-div");
const taskboardHeader = document.getElementById("taskboard-header");

// Upon Initializing
console.log(localStorage);
if (localStorage.getItem("inputname") !== null) {
  localStorage.getItem("inputname").toLowerCase().endsWith("s")
    ? (nameInHeader.textContent = localStorage.getItem("inputname") + `'`)
    : (nameInHeader.textContent = localStorage.getItem("inputname") + `'s`);
}

// Handlers

// Name Setter Handler
nameFormElem.addEventListener("submit", (e) => {
  // Prevent default
  e.preventDefault();
  // Constructing FormData object which makes event
  const formData = new FormData(nameFormElem);
  console.log("Saving to local username: " + formData.get("inputname"));
  formData.get("inputname");
  formData.get("inputname") === ""
    ? (nameInHeader.textContent = "")
    : formData.get("inputname").toLowerCase().endsWith("s")
    ? (nameInHeader.textContent = formData.get("inputname") + `'`)
    : (nameInHeader.textContent = formData.get("inputname") + `'s`);
  localStorage.setItem("taskboard:name", formData.get("inputname"));
  console.log(
    "Checking local storage: " + localStorage.getItem("taskboard:name")
  );
});

clearButton.addEventListener("click", (e) => {
  localStorage.removeItem("taskboard:name");
  console.log(
    "After clicking clear, inputname is: " +
      localStorage.getItem("taskboard:name")
  );
  nameInHeader.textContent = `______'s`;
  document.getElementById("inputname").value = "";
});

addButton.addEventListener("click", (e) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("task-item");
  taskboardHeader.appendChild(newDiv);
});

function createTaskElement() {
  // will make the task element here
}