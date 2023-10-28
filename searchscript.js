const locate = localStorage.getItem("location");
const in_date = localStorage.getItem("in_date");
const out_date = localStorage.getItem("out_date");
const guests = localStorage.getItem("guests");

console.log(locate, in_date, out_date, guests);

const location_name = document.getElementById("location_name");
location_name.innerText = locate;

const date_name = document.getElementById("date_name");
date_name.innerText = in_date + "  " + out_date;

const guest_number = document.getElementById("guest_number");
guest_number.innerText = guests + " " + "Guests";

let DATA;
const url =
  "https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-10-29&checkout=2023-10-30&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "76ff333793msh29c1cd56b392b4dp1cbd49jsn4b73e1e9d22f",
    "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
  },
};

async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result.results);
    renderData(result.results);
  } catch (error) {
    console.log(error);
  }
}
getData();

function renderData(arrOfHotels) {
  DATA = arrOfHotels;
  console.log(DATA);
  function viewall() {
    const details = document.getElementById("details");
    for (let i = 0; i < 10; i++) {
      const address = DATA[i].address;
      addarray = address.split(", ");
      for (let j = 0; j < addarray.length; j++) {
        if (locate == addarray[j]) {
          const line = document.createElement("div");
          line.style.width = "760px";
          line.style.height = "1px";
          line.style.background = "#E5E7EB";
          details.appendChild(line);

          const card = document.createElement("div");
          card.id = "card";

          const image = document.createElement("div");
          const img = document.createElement("img");
          img.style = "height: 200px ; width: 300px;";
          img.src = DATA[i].images[0];
          //   img.src = "src="https://a0.muscache.com/im/pictures/20c61bc6-4312-4fc6-9035-4625b3de1264.jpg?im_w=720"";
          image.appendChild(img);
          card.appendChild(image);

          const card_detail = document.createElement("div");
          card_detail.id = "card-detail";

          const c1 = document.createElement("div");
          c1.innerText = "Entire home in Bordeaux";
          card_detail.appendChild(c1);

          const c2 = document.createElement("div");
          c2.innerText = DATA[i].name;
          c2.id = "NAME";
          card_detail.appendChild(c2);

          const c3 = document.createElement("div");
          c3.innerText =
            "4-6 guests · Entire Home · 5 beds · 3 bath . Wifi · Kitchen · Free Parking";
          c3.id = "DETAILS";
          card_detail.appendChild(c3);

          const c4 = document.createElement("div");
          c4.innerText = DATA[i].rating;
          c4.id = "RATINGS";
          card_detail.appendChild(c2);

          const c5 = document.createElement("div");
          c5.innerText = "$325";
          c4.id = DATA[i].price.rate;
          card_detail.appendChild(c5);

          card.appendChild(card_detail);

          details.appendChild(card);
          break;
        }
      }
    }
  }
  viewall();
  //   const hotelList = document.getElementById("hotel-list");
  //   const name = arrOfHotels[0].name;
  //   const rating = arrOfHotels[0].rating;
  //   const image = arrOfHotels[0].images[0];
  //   console.log("name:", name);
  //   console.log("rating", rating);
}
