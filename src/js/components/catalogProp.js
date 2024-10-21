const items = document.querySelectorAll(".catalog-prop__inner .sizes-table tr");

items.forEach((item) => {
  //console.log(item);
  item.addEventListener("click", (e) => {
    if (e.target.tagName === "TD") {
      console.log(e.target);
      e.target.classList.toggle("td-active");
    }
  });
});
