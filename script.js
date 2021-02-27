const check = document.getElementById("check");
check.addEventListener("change", function (ev) {
  if (ev.target.checked) {
    console.log("active");
    document.querySelector(".links").classList.remove("hidden");
  } else {
    console.log("desactive");
    document.querySelector(".links").classList.add("hidden");
  }
});
