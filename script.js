// window.location.href use this to redirect to another page

async function a() {
  const url =
    "https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-10-29&checkout=2023-10-30&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "76ff333793msh29c1cd56b392b4dp1cbd49jsn4b73e1e9d22f",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
a();
