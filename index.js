const btn = document.getElementById("btn-toggle");
const navigation = document.getElementById("navigation");

const toggleNavBar = () => {
  navigation.classList.toggle("active");
  document.body.classList.toggle("disable");
  document.getElementById('input').classList.toggle("active");
  document.getElementById('btn-input').classList.toggle("active");
  btn.classList.toggle('active');
};

btn.addEventListener("click", toggleNavBar);
