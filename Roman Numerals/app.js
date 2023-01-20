let latinandroman = [
  { latin: 1000, roman: "M" }, //0
  { latin: 900, roman: "CM" }, //1
  { latin: 500, roman: "D" }, //2
  { latin: 400, roman: "CD" }, //3
  { latin: 100, roman: "C" }, //4
  { latin: 90, roman: "XC" }, //5
  { latin: 50, roman: "L" }, //6
  { latin: 40, roman: "XL" }, //7
  { latin: 10, roman: "X" }, //8
  { latin: 9, roman: "IX" }, //9
  { latin: 5, roman: "V" }, //10
  { latin: 4, roman: "IV" }, //11
  { latin: 1, roman: "I" }, //12
];

function convert(number) {
  let romanHarf = "";
  let newNumber = number;
  for (let i = 0; i < latinandroman.length; i++) {
    if (number > 3999) {
      window.alert("lütfen 4000'den küçük bir değer giriniz");
      return;
    // } else if (1 > number) {  //! burda sıkıntı var 
    //   window.alert("lütfen 0'dan büyük bir değer giriniz");
    //   return;
    } else if (latinandroman[i].latin <= number) {
      number = number - latinandroman[i].latin;

      romanHarf = romanHarf + latinandroman[i].roman;

      i--;
    }
    document.getElementById("roman").value = romanHarf;
    console.log(`my number latin ${newNumber} is ${romanHarf} in Roman alfabe`);
  }
}
document.getElementById("convert").addEventListener("click", function () {
  let number = document.getElementById("latin").value;

  convert(number);
});
