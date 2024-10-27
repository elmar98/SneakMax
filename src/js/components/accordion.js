class Accordion {
  constructor(items, content, showFirst = false, closeOther = false) {
    this.items = document.querySelectorAll(items);
    this.cssClass = "accordion-faq__item-active";
    this.content = content;
    this.showFirst = showFirst;
    this.closeOther = closeOther;
  }

  showFirstElem() {
    if (this.showFirst) {
      this.items[0].classList.add(this.cssClass);
      let firstElemHeight = this.items[0].querySelector(this.content);
      firstElemHeight.style.maxHeight = firstElemHeight.scrollHeight + "px";
    }
  }

  show() {
    if (!this.closeOther) {
      this.items.forEach((item) => {
        item.addEventListener("click", () => {
          let height = item.querySelector(this.content);
          item.classList.toggle(this.cssClass);
          if (item.classList.contains(this.cssClass)) {
            height.style.maxHeight = height.scrollHeight + "px";
          } else {
            height.style.maxHeight = "0";
          }
        });
      });
    } else {
      this.items.forEach((item) => {
        item.addEventListener("click", () => {
          let height = item.querySelector(this.content);
          if (!item.classList.contains(this.cssClass)) {
            this.items.forEach((close) => {
              let allHeight = close.querySelector(this.content);
              close.classList.remove(this.cssClass);
              allHeight.style.maxHeight = "0";
            });
            item.classList.add(this.cssClass);
            height.style.maxHeight = height.scrollHeight + "px";
          } else {
            item.classList.remove(this.cssClass);
            height.style.maxHeight = "0";
          }
        });
      });
    }
  }

  render() {
    this.show();
    this.showFirstElem();
  }
}

const accordion = new Accordion(
  ".accordion-faq__item",
  ".accordion-faq__answer",
  true,
  true
);
accordion.render();
