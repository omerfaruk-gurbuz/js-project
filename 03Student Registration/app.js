const firstName = document.getElementById("validationCustom01");
const lastName = document.getElementById("validationCustom02");
const username = document.getElementById("validationCustomUsername");
const city = document.getElementById("validationCustom03");
const path = document.getElementById("validationCustom05");
const button = document.getElementById("button1");
const tbody = document.getElementById("tbody");
const tr = document.getElementsByClassName("tr");

button.addEventListener("click", (e) => {
  addPerson();
  e.preventDefault();
  newPerson();
});

function addPerson() {
  tbody.innerHTML = `<tr>
  <td>${firstName.value}</td>
  <td>${lastName.value}</td>
  <td>C ${username.value}</td>
  <td>${city.value}</td>
  <td>${path.value}</td>
  </tr> ;`;
}

function newPerson(newTodo) {
  const tr = document.createElement("tr");
  tr.className = "tr";
  tr.textContent = addPerson;
  
}
