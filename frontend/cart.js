fetch("http://localhost:3000/carts", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector(".resultCart").innerHTML = `
									<div class="resultSearch"><span class="tripId" id ="${data.carts[0]._id}" ></span>
									<span class="departure" >${data.carts[0].departure} ></span>
									<span class="arrival">${data.carts[0].arrival}</span>
									<span class="price">${data.carts[0].price}€</span>
									<button class="deleteBtn" id ="${data.carts[0]._id}">X</button></div>
						`;
  });
