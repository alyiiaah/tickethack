fetch("http://localhost:3000/carts", {})
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.carts.length; i++) {
      console.log(data);
      document.querySelector(".resultCart").innerHTML += `
									<div class="resultSearch"><span class="tripId" id ="${data.carts[i]._id}" ></span>
									<span class="departure" >${data.carts[i].departure} ></span>
									<span class="arrival">${data.carts[i].arrival}</span>
									<span class="price">${data.carts[i].price}€</span>
									<button class="deleteBtn" id ="${data.carts[i]._id}">X</button></div>
						`;
    }
  });
