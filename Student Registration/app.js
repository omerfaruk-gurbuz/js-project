const firstName = document.getElementById("validationCustom01");
const lastName = document.getElementById("validationCustom02");
const username = document.getElementById("validationCustomUsername");
const city = document.getElementById("validationCustom03");
const path = document.getElementById("validationCustom05");
const button = document.getElementById("button1");
const tbody = document.getElementById("tbody");
const tr = document.getElementsByClassName("tr");
const label = document.getElementsByClassName("form-control");

button.addEventListener("click", (e) => {
  newPerson();
  e.preventDefault();
});

function newPerson() {
  const tr = document.createElement("tr");
  tr.className = "tr";
  tr.innerHTML = `<td>${firstName.value}</td>
      <td>${lastName.value}</td>
      <td>T ${username.value}</td>
      <td>${city.value}</td>
      <td>${path.value}</td>`;

  tbody.appendChild(tr);
}
