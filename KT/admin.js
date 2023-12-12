// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
// button Add product
function addSucces() {
  alert("Successed !!!");
  location.assign("ProductManagement.html")
}
// btn Search product
function loaddingPage() {
  location.assign("ProductManagement.html")
}
// btn search Order
function loaddingpageOrder() {
  location.assign("orderManagement.html")
}
// delete product
function dltOnc() {

  var CheckPr = prompt("Are You Sure About That !!! \n Type Yes To Do It").valueOf();
  if (CheckPr !==NULL)
  {
    if (CheckPr.toLowerCase()=="yes")
{
  alert("OKE");
  location.assign("ProductManagement.html");
}
    else
    {
      return;
    }
  }
  else
  {
    alert("Failing To Do This!!");
  }
}

