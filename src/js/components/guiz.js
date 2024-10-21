const quizData = [
  {
    number: 1,
    title: "Какой тип кроссовок рассматриваете?",
    answer_alias: "type",
    answers: [
      {
        answer_image: "../img/quiz/1.jpg",
        answer_title: "кеды",
        type: "checkbox",
      },
      {
        answer_image: "../img/quiz/1.jpg",
        answer_title: "кеды",
        type: "checkbox",
      },
      {
        answer_image: "../img/quiz/1.jpg",
        answer_title: "кеды",
        type: "checkbox",
      },
      {
        answer_image: "../img/quiz/1.jpg",
        answer_title: "кеды",
        type: "checkbox",
      },
      {
        answer_image: "../img/quiz/1.jpg",
        answer_title: "кеды",
        type: "checkbox",
      },
      {
        answer_image: "../img/quiz/1.jpg",
        answer_title: "кеды",
        type: "checkbox",
      },
    ],
  },
  {
    number: 2,
    title: "Какой размер вам подойдет?",
    answer_alias: "size",
    big_image: "../img/quiz/big-image.jpg",

    answers: [
      {
        answer_title: "менее 36",
        type: "checkbox",
      },
      {
        answer_title: "36-38",
        type: "checkbox",
      },
      {
        answer_title: "39-41",
        type: "checkbox",
      },
      {
        answer_title: "42-44",
        type: "checkbox",
      },
      {
        answer_title: "45 и больше",
        type: "checkbox",
      },
    ],
  },
  {
    number: 3,
    title: "Уточните какие-либо моменты",
    answer_alias: "message",
    answers: [
      {
        placeholder: "Введите сообщение",
      },
    ],
  },

  {
    number: 4,
    title: "Получить предложение",
    subtitle: "Получите подборку подходящих для вас моделей на почту",
    answer_alias: "send",
    answers: [
      {
        name: "name",
        placeholder: "Ваше имя",
        type: "text",
      },
      {
        name: "email",
        placeholder: "E-mail",
        type: "email",
      },
    ],
  },
];

const quizTemplate = (data = [], dataLength, options) => {
  //console.log(data);
  const { number, title } = data;
  const { nextBtnText } = options;
  let answers;
  if (data.answer_alias === "type") {
    answers = data.answers.map((item) => {
      return `
      <li class="quiz-question__item animate__animated animate__fadeIn">
      <img class="quiz-question__item-image" src="${
        item.answer_image
      }" alt="Крассовки">
    	<label class="custom-checkbox quiz-question__label animate__animated animate__fadeIn">
    	<input type='${
        item.type
      }' data-valid='false' class='custom-checkbox__field quiz-question__answer' name='${
        data.answer_alias
      }' ${
        item.type == "text" ? 'placeholder="Введите ваш вариант"' : ""
      } value='${item.type !== "text" ? item.answer_title : ""}'>
    	 <span class="custom-checkbox__content animate__animated animate__fadeIn">${
         item.answer_title
       }</span>
    	</label>
      </li>

    	`;
    });

    return `
    <div class='quiz__questions animate__animated animate__fadeIn'>
      <div class='quiz-question'>
      <h3 class='quiz-question__title'>${title}</h3>

      <div class="quiz-question-type">
      <ul class="quiz-question__answers list-reset">
      ${answers.join("")}
      </ul>
    </div>
    <div class="quiz-bottom">
    <div class="quiz-question__count">${number} из ${dataLength - 1}</div>
        <button type="button" class="btn btn-reset btn--thirty quiz-question__btn" data-next-btn>${nextBtnText}</button>
    </div>
    </div>
    </div>

      `;
  } else if (data.answer_alias === "size") {
    answers = data.answers.map((item) => {
      return `
      <li class="quiz-question__item animate__animated animate__fadeIn">
    	<label class="custom-checkbox quiz-question__label">
    	<input type='${
        item.type
      }' data-valid='false' class='custom-checkbox__field quiz-question__answer' name='${
        data.answer_alias
      }' ${
        item.type == "text" ? 'placeholder="Введите ваш вариант"' : ""
      } value='${item.type !== "text" ? item.answer_title : ""}'>
    	 <span class="custom-checkbox__content">${item.answer_title}</span>
    	</label>
      </li>

    	`;
    });
    return `

    <div class='quiz__questions animate__animated animate__fadeIn'>
      <div class='quiz-question'>
      <h3 class='quiz-question__title'>${title}</h3>

      <div class="quiz-question-size">
      <ul class="quiz-question__answers list-reset ">
      ${answers.join("")}
      </ul>
       <div class="quiz-question-size__image">
        <img src="${data.big_image}" alt="Крассовки">
      </div>
    </div>
    <div class="quiz-bottom">
    <div class="quiz-question__count">${number} из ${dataLength - 1}</div>
        <button type="button" class="btn btn-reset btn--thirty quiz-question__btn" data-next-btn>${nextBtnText}</button>
    </div>
    </div>
    </div>
      `;
  } else if (data.answer_alias === "message") {
    answers = data.answers.map((item) => {
      return `
      <li class="quiz-question__item animate__animated animate__fadeIn">
    	<label class="custom-checkbox quiz-question__label animate__animated animate__fadeIn">
    	<textarea class="quiz-question__message" placeholder="${item.placeholder}" name="message"></textarea>
    	</label>
      </li>

    	`;
    });
    return `

    <div class='quiz__questions animate__animated animate__fadeIn'>
      <div class='quiz-question'>
      <h3 class='quiz-question__title'>${title}</h3>
      <div class="quiz-question-message">
      <ul class="quiz-question__answers list-reset">
      ${answers.join("")}
      </ul>

    </div>
    <div class="quiz-bottom">
    <div class="quiz-question__count">${number} из ${dataLength - 1}</div>
        <button type="button" class="btn btn-reset btn--thirty quiz-question__btn" data-next-btn>${nextBtnText}</button>
    </div>
    </div>
    </div>
    </div>
      `;
  } else if (data.answer_alias == "send") {
    answers = data.answers.map((item) => {
      return `
    	<input type='${item.type}' data-valid='false' class='last-question__input animate__animated animate__fadeIn' name='${item.name}' placeholder="${item.placeholder}" required>
    	`;
    });

    document.querySelector(".quiz__title").textContent =
      "Ваша подборка готова!";
    document.querySelector(".quiz__sub").textContent =
      "Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог";

    return `

    <div class='last-question'>
      <div class='last-question__form animate__animated animate__fadeIn'>
      <h3 class='last-question__title animate__animated animate__fadeIn'>${title}</h3>
      <p class="last-question__descr animate__animated animate__fadeIn">${
        data.subtitle
      }</p>

      <div class="last-question__form-block animate__animated animate__fadeIn">
      ${answers.join("")}
      </div>

    </div>
    </div>
    </div>
      `;
  }
};

class Quiz {
  constructor(selector, data, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.data = data;
    this.counter = 0;
    this.dataLength = this.data.length;
    this.resultArray = [];
    this.tmp = {};
    this.init();
    this.events();
  }

  init() {
    //console.log("init");
    this.$el.innerHTML = quizTemplate(
      quizData[this.counter],
      this.dataLength,
      this.options
    );
  }

  events() {
    this.$el.addEventListener("click", (e) => {
      if (e.target == document.querySelector("[data-next-btn]")) {
        this.addToSend();
        this.nextQuestion();
      }

      if (e.target == document.querySelector("[data-send]")) {
        this.send();
      }
    });

    this.$el.addEventListener("change", (e) => {
      if (e.target.tagName == "INPUT" || e.target.tagName == "TEXTAREA") {
        if (e.target.type !== "checkbox" && e.target.type !== "radio") {
          let elements = this.$el.querySelectorAll("input");

          elements.forEach((el) => (el.checked = false));
        }

        this.tmp = this.serialize(this.$el);
        //console.log(this.tmp);
      }
    });
  }

  nextQuestion() {
    if (this.valid()) {
      //console.log("next question");
      if (this.counter + 1 < this.dataLength) {
        this.counter++;
        this.$el.innerHTML = quizTemplate(
          quizData[this.counter],
          this.dataLength,
          this.options
        );
        if (this.counter + 1 == this.dataLength) {
          this.$el.children[0]
            .querySelector(".last-question__form-block")
            .insertAdjacentHTML(
              "beforeend",
              `<button type='button' class='btn btn-reset btn--primary last-question__btn' data-send>${this.options.sendBtnText}</button>
              <div class="last-question__decorate">
              <div class="last-question__decorate-res">
                <span>Отправлено</span>
              </div>
              <img class="last-question__decorate--screen" src="img/phone/screen.png" alt="" aria-hidden="true">
              <img class="last-question__decorate--phone" src="img/phone/phone.png" alt="" aria-hidden="true">
            </div>
              `
            );
          //this.$el.querySelector("[data-next-btn]").remove();
        }
      }
    }
  }

  valid() {
    let isValid = false; // Изначально считаем, что форма не валидна
    let elements = this.$el.querySelectorAll("input");

    elements.forEach((el) => {
      switch (el.type) {
        case "text":
        case "email": // Проверяем текстовые и email поля
          if (!el.value) {
            el.classList.add("error");
          } else {
            el.classList.remove("error");
            isValid = true; // Если поле заполнено, форма валидна
          }
          break;

        case "checkbox":
          if (el.checked) {
            el.classList.remove("error");
            isValid = true; // Если хотя бы один чекбокс выбран, валидно
          } else {
            el.classList.add("error");
          }
          break;

        case "radio":
          if (el.checked) {
            el.classList.remove("error");
            isValid = true;
          } else {
            el.classList.add("error");
          }
          break;
      }
    });

    // Проверка текстовых областей (textarea)
    const textareas = this.$el.querySelectorAll("textarea");
    textareas.forEach((item) => {
      if (!item.value) {
        item.classList.add("error");
      } else {
        item.classList.remove("error");
        isValid = true;
      }
    });

    // Дополнительная проверка для последнего вопроса (вопрос с номером 4)
    if (this.counter === 3) {
      // Вопрос 4 будет иметь индекс 3 в массиве (this.counter)
      let nameInput = this.$el.querySelector("input[name='name']");
      let emailInput = this.$el.querySelector("input[name='email']");

      // Оба поля обязательны для заполнения
      if (!nameInput.value || !emailInput.value) {
        if (!nameInput.value) {
          nameInput.classList.add("error");
        }
        if (!emailInput.value) {
          emailInput.classList.add("error");
        }
        isValid = false; // Если хотя бы одно поле пустое, форма не валидна
      } else {
        nameInput.classList.remove("error");
        emailInput.classList.remove("error");
        isValid = true; // Если оба поля заполнены, форма валидна
      }
    }

    return isValid; // Возвращаем результат валидации
  }

  addToSend() {
    if (Object.keys(this.tmp).length !== 0) {
      // Добавляем только не пустые объекты
      this.resultArray.push(this.tmp);
    }
  }

  send() {
    if (this.valid()) {
      //console.log("send");
      this.addToSend();
      let elements = this.$el.querySelectorAll("input");

      elements.forEach((el) => el.classList.remove("error"));
      const formData = new FormData();
      //console.log(this.resultArray);
      for (let item of this.resultArray) {
        for (let obj in item) {
          formData.append(obj, item[obj].substring(0, item[obj].length - 1));
        }
      }

      const response = fetch("../index.php", {
        method: "POST",
        body: formData,
      });

      const phone = document.querySelector(".last-question__decorate--screen");
      const phonedecor = document.querySelector(".last-question__decorate");
      phone.classList.add("last-question__decorate--screen-active");
      phonedecor.classList.add("last-question__decorate-active");
      document
        .querySelector(".last-question__decorate-res")
        .classList.add("last-question__decorate-res--active");
      document
        .querySelector(".last-question__btn")
        .classList.add("last-question__btn--hide");

      const inputs = document.querySelectorAll(".last-question__input");
      inputs.forEach((item) => {
        item.style.visibility = "hidden";
        item.setAttribute("disabled", "true");
        item.classList.add("last-question__input--hide");
      });

      document.querySelector(".quiz__sub").classList.add("quiz__sub--hide");

      document
        .querySelectorAll(".last-question__input")
        .forEach((el) => (el.value = ""));
    }

    setTimeout(() => {
      document
        .querySelector(".quiz")
        .classList.add("animate__animated", "animate__fadeOut");
      document.querySelector(".quiz").classList.add("quiz--hide");
    }, 5000);
  }

  serialize(form) {
    let field,
      s = {};

    if (typeof form == "object" && form.nodeName == "FORM") {
      let len = form.elements.length;
      for (let i = 0; i < len; i++) {
        field = form.elements[i];
        let valueString = ""; // Сбрасываем строку для каждого поля

        if (
          field.name &&
          !field.disabled &&
          field.type != "file" &&
          field.type != "reset" &&
          field.type != "submit" &&
          field.type != "button"
        ) {
          if (field.type == "select-multiple") {
            for (j = form.elements[i].options.length - 1; j >= 0; j--) {
              if (field.options[j].selected)
                s[s.length] =
                  encodeURIComponent(field.name) +
                  "=" +
                  encodeURIComponent(field.options[j].value);
            }
          } else if (field.type === "checkbox" && field.checked) {
            // Если поле checkbox и оно выбрано
            if (s[field.name]) {
              s[field.name] += "," + field.value; // Добавляем значение через запятую
            } else {
              s[field.name] = field.value; // Первое значение
            }
          } else if (
            (field.type != "checkbox" &&
              field.type != "radio" &&
              field.value) ||
            field.checked
          ) {
            valueString += field.value;
            s[field.name] = valueString; // Присваиваем значение для каждого поля
          }
        }
      }
    }
    return s;
  }
}

window.quiz = new Quiz(".quiz .quiz-form", quizData, {
  nextBtnText: "Следующий шаг",
  sendBtnText: "Получить",
});
