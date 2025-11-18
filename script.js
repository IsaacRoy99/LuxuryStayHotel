/* script.js */
const rooms = [
{ name: "Standard Room", price: 600, img: "images/room1.jpg" },
{ name: "Deluxe Room", price: 900, img: "images/room2.jpg" },
{ name: "Executive Suite", price: 1500, img: "images/room3.jpg" }
];


const container = document.getElementById("roomsContainer");
if (container) {
rooms.forEach(room => {
container.innerHTML += `
<div class="col-md-4 mb-4">
<div class="card room-card">
<img src="${room.img}" alt="${room.name}" />
<div class="card-body">
<h5>${room.name}</h5>
<p>Price per night: R${room.price}</p>
<a href="booking.html" class="btn btn-primary">Book Now</a>
</div>
</div>
</div>
`;
});
}