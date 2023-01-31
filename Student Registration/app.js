const firstName = document.getElementById("validationCustom01");
const lastName = document.getElementById("validationCustom02");
const username = document.getElementById("validationCustomUsername");
const city = document.getElementById("validationCustom03");
const path = document.getElementById("validationCustom05");
const button = document.getElementById("button1");
const tbody = document.getElementById("tbody");
const tr = document.getElementsByClassName("tr");
const control = document.querySelector(".form-control");

runEvents();
button.addEventListener("click", (e) => {
  let persons = [
    firstName.value,
    lastName.value,
    username.value,
    city.value,
    path.value,
  ];
  
  localStorage.setItem("persons", JSON.stringify(persons));
  newPerson(persons);

  e.preventDefault();
});

function runEvents() {
  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("persons")=== null) {
      persons = [];
      
    } else {
      persons = localStorage.getItem("persons");
      console.log(persons);
      const tr = document.createElement("tr");
    tr.className = "tr";
    tr.innerHTML = `
        <td> ${persons[2]}</td>
        <td>${persons[0]}</td>
        <td>${persons[1]}</td>
        <td>${persons[3]}</td>
        <td>${persons[4]}</td>`;
    tbody.appendChild(tr);
    }
  });
}

function newPerson(persons) {
  if (control.value == "") {
    window.alert("Lütfen Tüm Boşlukları Doldurunuz.");
    console.log(persons.firstName);
  } else {
    const tr = document.createElement("tr");
    tr.className = "tr";
    tr.innerHTML = `
        <td> ${persons[2]}</td>
        <td>${persons[0]}</td>
        <td>${persons[1]}</td>
        <td>${persons[3]}</td>
        <td>${persons[4]}</td>`;
    tbody.appendChild(tr);
  }
}
// let sli = 11;
// const personss = [sli, "beşi", "sxçmm", "vsvv"];
// console.log(personss[0]);
