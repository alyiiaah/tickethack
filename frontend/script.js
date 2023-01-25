document.querySelector("#searchBtn").addEventListener("click", function () {
    const departure = document.querySelector('#departure').value
    const arrival = document.querySelector('#arrival').value
    const date = document.querySelector('#date').value


  fetch("http://localhost:3000/trips",{ method: 'POST',	headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ departure,arrival,date})}, )
    .then((response) => response.json())
    .then((data) => {
      if (data.trips.length>0) {
        document.querySelector("#resultCard").innerHTML = '' ;
        console.log(data)
        for (let i = 0; i < data.trips.length; i++) {
          const hour = data.trips[i].date.substring(12, 16);
          document.querySelector("#resultCard").innerHTML += `
                <div class="resultSearch"><span class="tripId" id ="${data.trips[i]._id}" ></span>
                <span class="departure" >${data.trips[i].departure}</span>
                <span class="arrival">${data.trips[i].arrival}</span>
                <span class="hour">${hour}</span>
                <span class="price">${data.trips[i].price}</span>
                <button class="bookBtn" id ="${data.trips[i]._id}">Book</button></div>
			`;
          bookingBtnListen();
        }
      } else {
        document.querySelector("#resultCard").innerHTML = `
        <div id ="notripfound">
        <img src ="images/notfound.png">
        No trip found
        </div>
        `;
      }
    });
});

function bookingBtnListen() {
  for (let i = 0; i < document.querySelectorAll(".deleteCity").length; i++) {
    document
      .querySelectorAll(".bookBtn")
      .addEventListener("click", function () {
        fetch(`http://localhost:3000/carts/${this.id}`, { method: "PUT" })
          .then((response) => response.json())
          .then((data) => {
            window.location.assign("cart.html");
          });
      });
  }
}
