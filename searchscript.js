// const locate = localStorage.getItem("location");
// const in_date = localStorage.getItem("in_date");
// const out_date = localStorage.getItem("out_date");
// const guests = localStorage.getItem("guests");

// // console.log(locate, in_date, out_date, guests);

// const location_name = document.getElementById("location_name");
// location_name.innerText = locate;

// const date_name = document.getElementById("date_name");
// date_name.innerText = in_date + "  " + out_date;

// const guest_number = document.getElementById("guest_number");
// guest_number.innerText = guests + " " + "Guests";

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

// function renderData(arrOfHotels) {
//   DATA = arrOfHotels;
//   console.log(DATA);
//   function viewall() {
//     const details = document.getElementById("details");
//     for (let i = 0; i < DATA.length; i++) {
//       const guestInRoom = DATA[i].persons;
//       const address = DATA[i].address;
//       addarray = address.split(", ");
//       for (let j = 0; j < addarray.length; j++) {
//         if (locate == addarray[j] && guestInRoom == guests) {
//           const line = document.createElement("div");
//           line.style.width = "760px";
//           line.style.height = "1px";
//           line.style.background = "#E5E7EB";
//           details.appendChild(line);

//           const card = document.createElement("div");
//           card.id = "card";

//           const image = document.createElement("div");
//           const img = document.createElement("img");
//           img.style = "height: 200px ; width: 300px;";
//           img.src = DATA[i].images[0];
//           //   img.src = "src="https://a0.muscache.com/im/pictures/20c61bc6-4312-4fc6-9035-4625b3de1264.jpg?im_w=720"";
//           image.appendChild(img);
//           card.appendChild(image);

//           const card_detail = document.createElement("div");
//           card_detail.id = "card-detail";

//           const c2 = document.createElement("div");
//           c2.innerText = DATA[i].name;
//           c2.className = "NAME";
//           card_detail.appendChild(c2);

//           const c3 = document.createElement("div");
//           c3.innerText =
//             `${DATA[i].persons} guests · ${DATA[i].type} · ${DATA[i].beds} beds · ${DATA[i].bathrooms} bath .` +
//             eminities();
//           function eminities() {
//             let s = "";
//             for (let k = 0; k < DATA[i].previewAmenities.length; k++) {
//               s = s + DATA[i].previewAmenities[k] + ". ";
//             }
//             return s;
//           }
//           c3.className = "DETAILS";
//           card_detail.appendChild(c3);

//           const c4 = document.createElement("div");
//           c4.innerText = DATA[i].rating + "  ";
//           c4.className = "RATINGS";

//           const lineelements = document.createElement("div");
//           lineelements.style = "display: inline; gap:20px;";
//           const star = document.createElement("img");
//           star.src = "resources/star.png";
//           lineelements.appendChild(star);

//           // lineelements.innerText = "(235)";

//           const c5 = document.createElement("div");
//           c5.innerText = "$" + DATA[i].price.rate + " /night";
//           c5.className = "PRICE";
//           lineelements.appendChild(c5);

//           c4.appendChild(lineelements);
//           card_detail.appendChild(c4);

//           card.appendChild(card_detail);

//           details.appendChild(card);
//           break;
//         }
//       }
//     }
//   }
//   viewall();
//   const elements = document.getElementsByClassName("NAME");
//   for (let i = 0; i < elements.length; i++) {
//     const namu = elements[i].parentNode.parentNode;
//     namu.addEventListener("mouseover", () => {
//       const name = elements[i].innerText;
//       // console.log(name);
//       for (let j = 0; j < DATA.length; j++) {
//         if (name == DATA[j].name) {
//           let lattitude = DATA[j].lat;
//           let longitude = DATA[j].lng;
//           // console.log(lattitude, longitude);
//           mapit(lattitude, longitude);
//         }
//       }
//     });

//     namu.addEventListener("click", () => {
//       const name = elements[i].innerText;
//       // console.log(name);
//       localStorage.setItem("name", name);
//       setTimeout(() => {
//         window.location.href = "list.html";
//       }, 3000);
//     });
//   }

//   function mapit(lattitude, longitude) {
//     const SRC = `https://maps.google.com/maps?q=${lattitude}, ${longitude}&output=embed`;
//     const map = document.getElementsByTagName("iframe")[0];
//     map.src = SRC;
//   }
// }
