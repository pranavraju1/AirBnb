// window.location.href use this to redirect to another page
console.log("object");
document.getElementById("sl").addEventListener("click", function (event) {
  event.preventDefault();
  const form = document.getElementById("myForm");
  form;
  localStorage.clear();
  const location = document.getElementById("location").value;
  const in_date = document.getElementById("in_date").value;
  const out_date = document.getElementById("out_date").value;
  const guests = document.getElementById("guests").value;
  localStorage.setItem("location", location);
  localStorage.setItem("in_date", in_date);
  localStorage.setItem("out_date", out_date);
  localStorage.setItem("guests", guests);
  const locate = localStorage.getItem("location");
  console.log(locate);
  setTimeout(() => {
    window.location.href = "search.html";
  }, 3000);
});
