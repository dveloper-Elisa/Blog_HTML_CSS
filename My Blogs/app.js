const menu = document.querySelector(".menu");
const show = document.querySelector(".navBar");
const test = document.querySelector(".test");
menu.addEventListener("click", (e) => {
  e.preventDefault();
  show.classList.add("hidenn");
  test.innerText = show;
  console.log(show);
});
