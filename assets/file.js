const userNameInput = document.querySelector("[name=user]");
const kmInput = document.querySelector("[name=km]");
const etaInput = document.querySelector("[name=eta]");
const btnGenera = document.querySelector(".genera");
const btnAnnulla = document.querySelector(".annulla");

btnGenera.addEventListener("click", function () {
console.log("click")
    const username = userNameInput.value;
    const kilometres = kmInput.value;
    const age = etaInput.value;
    const pagamento = parseInt(kilometres) * 0.21;
    if (age < 18) {
        document.getElementById("costo").innerHTML = (pagamento - (pagamento * 20) / 100 ).toFixed(2);
    } else if ( age>= 65) {
        document.getElementById("costo").innerHTML = (pagamento - (pagamento * 20) / 100 ).toFixed(2);
    } else {
        document.getElementById("costo").innerHTML = pagamento.toFixed(2);
    }
    document.getElementById("name").innerHTML = user;
})
