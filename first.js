let input = document.querySelector("input");
let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let button = document.querySelector("button");
let result = document.querySelector(".result");

for(code in countryList){
    const opt = document.createElement("option");
    opt.innerText = code;
    option1.appendChild(opt);
    if(code === "USD"){
        opt.selected = "selected";
    }
}

for(code in countryList){
    const opt = document.createElement("option");
    opt.innerText = code;
    option2.appendChild(opt); 
    if(code === "INR"){
        opt.selected = "selected";
    }
}

option1.addEventListener("change", () => {
   let con =  countryList[option1.value];
   img1.setAttribute("src", `https://flagsapi.com/${con}/flat/64.png`)
});
 
option2.addEventListener("change", () => {
    let con =  countryList[option2.value];
    img2.setAttribute("src", `https://flagsapi.com/${con}/flat/64.png`)
 });


 let url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

button.addEventListener("click", async() =>{
    let num = input.value;
    let fromval = option1.value;
    let toval = option2.value;
    let callapi = await fetch(`${url}${fromval.toLowerCase()}/${toval.toLowerCase()}.json`);
    let rate = await callapi.json();
    let conrate = rate[toval.toLowerCase()];
    let final = num * conrate;
    result.innerText= `${num}${fromval} = ${final.toFixed(2)}${toval}`;
});