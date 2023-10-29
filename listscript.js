const NAME = localStorage.getItem("name");
console.log(NAME);

// let DATA;
// // const limitError = "You have reached the limit generate new api code";
// const url =
//   "https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-11-16&checkout=2023-11-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
// //after getting new api remember to change the checkin and checkout dates as they may be in the past
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "e88ff35bcbmshe9dc14252b01a39p18aa91jsn085f04ee2915",
//     "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
//   },
// };

// async function getData() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     // console.log(result.results);
//     renderData(result.results);
//   } catch (error) {
//     console.log(error);
//     console.log("exceeded limi amount");
//   }
// }
// getData();

const apidata = localStorage.getItem("apidata");

renderData(apidata);
function renderData(apidata) {
  DATA = JSON.parse(apidata);
  // console.log(DATA);
  function viewall() {
    for (let i = 0; i < DATA.length; i++) {
      if (DATA[i].name == NAME) {
        console.log(DATA[i]);
        const roomname = document.getElementById("heading_name");
        roomname.innerText = NAME;
        const rating = document.getElementById("rating");
        rating.innerText = DATA[i].rating;
        const reviewcount = document.getElementById("reviewcount");
        reviewcount.innerText = DATA[i].reviewsCount + "reviews";
        const Superhost = document.getElementById("Superhost");
        if (DATA[i].isSuperhost) {
          Superhost.innerText = "Superhost";
        } else {
          Superhost.innerText = "Not Superhost";
        }
        const location = document.getElementById("location");
        location.innerText = DATA[i].address;

        const room0 = document.getElementById("room0");
        // console.log(room0);
        room0.src = DATA[i].images[0];
        const room1 = document.getElementById("room1");
        // console.log(room1);
        room1.src = DATA[i].images[1];
        const room2 = document.getElementById("room2");
        // console.log(room2);
        room2.src = DATA[i].images[2];
        const room3 = document.getElementById("room3");
        // console.log(room3);
        room3.src = DATA[i].images[3];

        const hostname = document.getElementById("hostName");
        hostname.innerText = DATA[i].type + " hosted by Ghazal";
        const guest = document.getElementById("guest");
        guest.innerText = DATA[i].persons + " guests";
        const bedroom = document.getElementById("bedroom");
        bedroom.innerText = DATA[i].bedrooms + " bedroom";
        const bed = document.getElementById("bed");
        bed.innerText = DATA[i].beds + " bed";
        const bath = document.getElementById("bath");
        bath.innerText = DATA[i].bathrooms + " bath";
        const hostpic = document.getElementById("hostpic");
        hostpic.src = DATA[i].hostThumbnail;

        function pricecalculation() {
          const in_date = new Date(localStorage.getItem("in_date"));
          const out_date = new Date(localStorage.getItem("out_date"));
          const checkin = document.getElementById("checkin");
          checkin.innerText = in_date;
          const checkout = document.getElementById("checkout");
          checkin.innerText = out_date;

          const daydiff = (out_date - in_date) / (1000 * 60 * 60 * 24);
          const rate = DATA[i].price.priceItems[0].amount;
          const pricepernight = document.getElementById("pricepernight");
          pricepernight.innerText = "$" + rate;

          const p1 = document.getElementById("p1");
          p1.innerText = "$" + `${rate} x ${daydiff} nights`;
          const p2 = p1.nextElementSibling;
          let P1 = rate * daydiff;
          p2.innerText = "$" + P1;
          const P2 = 28;
          const Cleaning = document.getElementById("Cleaning");
          const Service = document.getElementById("Service");
          const tax = document.getElementById("tax");
          Cleaning.innerText = "$0";
          Service.innerText = "$0";
          tax.innerText = "$0";
          let P3 = 0;
          let P4 = 0;
          let P5 = 0;
          for (let j = 1; j < DATA[i].price.priceItems.length; j++) {
            if (DATA[i].price.priceItems[j].title == "Airbnb service fee") {
              Service.innerText = "$" + DATA[i].price.priceItems[j].amount;
              P3 = DATA[i].price.priceItems[j].amount;
            }
            if (DATA[i].price.priceItems[j].title == "Cleaning fee") {
              Cleaning.innerText = "$" + DATA[i].price.priceItems[j].amount;
              P4 = DATA[i].price.priceItems[j].amount;
            }
            if (DATA[i].price.priceItems[j].title == "Taxes") {
              tax.innerText = "$" + DATA[i].price.priceItems[j].amount;
              P5 = DATA[i].price.priceItems[j].amount;
            }
          }
          const TOTAL = P1 + P3 + P4 + P5 - P2;
          const total = document.getElementById("total");
          total.innerText = "$" + TOTAL;
        }
        pricecalculation();
      }
    }
  }
  viewall();
}
