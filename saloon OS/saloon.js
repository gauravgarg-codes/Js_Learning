const salons = [
{
name:"Style Cut Salon",
rating:4.5,
distance:"1.2 km"
},
{
name:"Urband hair falntum",
rating:4.2,
distance:"2 km"
}
];

function openSalon(name){
localStorage.setItem("selectedSalon", name);
window.location.href = "salon.html";
}