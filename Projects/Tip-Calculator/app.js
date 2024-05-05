let btn = document.querySelector("#calculate")
let billInput = document.querySelector("#bill")
let tipInput = document.querySelector("#tip")
let totalSpan = document.querySelector("#total")
const calculateTotal=()=>{
    let billValue = billInput.value;
    let tipValue = tipInput.value;
    let totalValue = billValue *(1 + tipValue / 100)
    totalSpan.innerText = totalValue.toFixed(2);

}
btn.addEventListener('click', calculateTotal)