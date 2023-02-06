const btn = document.querySelector(".btn");
const input = document.querySelector(".inp");
const p = document.querySelector(".p");

// console.log(Math.random()*100);

const randoms = Math.random()*100;
const randoma = Math.floor(randoms);

    
console.log(randoms);
console.log(randoma);
console.log(btn);

let attempts = 0;

btn.addEventListener("click", function(){
    let inputValue = input.value;
    console.log(inputValue);
    if(inputValue < randoma){
        attempts++;
        console.log(attempts);
        // p.innerHTML = ("yukarı" + " " + attempts);
        p.innerHTML = `Yukarı hata sayınız: ${attempts}`
    }
    else if(inputValue > randoma){
        attempts++;
        console.log(attempts);
        // p.innerHTML = "aşağı";
        p.innerHTML = `Aşağı hata sayınız: ${attempts}`
    }
    else{
        p.innerHTML = `Tahmin doğru, toplam hata sayınız: ${attempts} `;
    }
})
