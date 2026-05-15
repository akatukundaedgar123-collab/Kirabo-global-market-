
let currency="UGX";

const rates={
UGX:1,
USD:0.00027,
EUR:0.00025,
GBP:0.00021
};

const products=[
{name:"iPhone 15 Pro",price:2500000, country:"USA"},
{name:"Samsung S24",price:1800000,country:"Korea"},
{name:"MacBook Pro",price:6000000,country:"USA"},
{name:"African Fashion Set",price:150000,country:"Uganda"}
];

function render(list){
document.getElementById("grid").innerHTML=
list.map(p=>{
let price=(p.price*rates[currency]).toFixed(2)+" "+currency;
return `<div class='card'>
<h3>${p.name}</h3>
<p>${p.country}</p>
<strong>${price}</strong>
</div>`
}).join("");
}

render(products);

function search(){
let q=document.getElementById("search").value.toLowerCase();
let filtered=products.filter(p=>p.name.toLowerCase().includes(q));
render(filtered);
}

function changeCurrency(){
currency=document.getElementById("currency").value;
render(products);
}

async function askAI(){
let prompt=document.getElementById("prompt").value;
document.getElementById("out").innerText="Thinking...";

document.getElementById("out").innerText=
"Global AI: " + prompt + " (upgrade backend with OpenAI/Supabase for real intelligence)";
}
