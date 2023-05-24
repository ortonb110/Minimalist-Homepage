const btn = document.getElementById("btn-toggle");
const navigation = document.getElementById("navigation");
const toggleNavBar = () => {
  navigation.classList.toggle("active");
  document.body.classList.toggle("disable");
  btn.classList.toggle('active');
};

btn.addEventListener("click", toggleNavBar);
